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

//_embedded.events[0]._embedded.venues[0].postalCode
