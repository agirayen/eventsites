/*
const url =
  "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=62FtsiHexAHvYoNSqzGB9eEDhG3HN4gv&size=100";

const main = async () => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const result = data._embedded.events;
      //result is a collection of events
      //const postalcode = result._embedded.venues[0].postalCode;
      console.log(result);
    });
  return <div></div>;
};

export default main;


*/
import React from "react";
import axios from "axios";
import Input from "./input";
import Events from "./events";
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      zipcode: "",
    };
  }
  componentDidMount() {
    const response = axios
      .get(
        "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=62FtsiHexAHvYoNSqzGB9eEDhG3HN4gv&size=100"
      )
      .then((data) => {
        this.setState({
          events: data._embedded.events.slice(0, 500),
        });
      });
    console.log(response);
  }

  setZipcode = (e) => {
    this.setState({
      zipcode: e.target.value,
    });
  };

  render() {
    const { events, zipcode } = this.state;
    const filteredEvents = events.filter(
      (event) => event._embedded.venues[0].postalCode === zipcode
    );
    return (
      <React.Fragment>
        <Input placeholder="Type your Zipcode" handleChange={this.setZipcode} />
        <Events results={filteredEvents} />
      </React.Fragment>
    );
  }
}

export default Main;
