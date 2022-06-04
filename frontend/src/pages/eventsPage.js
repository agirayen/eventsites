import React, { useEffect, useState } from "react";
import { baseUrl } from "../config";
import { getData, postData } from "../services/httpService";
import EventsTable from "../components/eventsTable";

const EventsPage = ({ searchTerm }) => {
  const [eventsData, setEventsData] = useState([]);
  const [eventsDataBckup, setEventsDataBackup] = useState([]);
  useEffect(() => {
    let url = `${baseUrl}/getEvents`;
    getData(url).then((events) => {
      console.log(events);
      setEventsData(events.data.data);
      setEventsDataBackup(events.data.data);
    });
  }, []);

  useEffect(() => {
    let allEvents = JSON.parse(JSON.stringify(eventsData));
    let filteredArr = allEvents.filter((data) => {
      return data.postal_code.indexOf(searchTerm) > -1;
    });
    if (searchTerm && searchTerm.length) {
      setEventsData(filteredArr);
    } else {
      setEventsData(eventsDataBckup);
    }
  }, [searchTerm]);

  const handlePurchase = (eventData) => {
    let url = `${baseUrl}/savePurchase`;
    let user_id = parseInt(localStorage.getItem("userId"), 10);
    let { event_id } = eventData;
    let dataToPost = {
      user_id,
      event_id,
    };
    postData(url, dataToPost).then((success) => {
      console.log("whishlist posted", success);
    });
  };
  const handleWhishlist = (eventData) => {
    let url = `${baseUrl}/saveWhishlist`;
    let user_id = parseInt(localStorage.getItem("userId"), 10);
    let { event_id } = eventData;
    let dataToPost = {
      user_id,
      event_id,
    };
    postData(url, dataToPost).then((success) => {
      console.log("purchase posted", success);
    });
  };

  return (
    <div>
      {eventsData && (
        <EventsTable
          data={eventsData}
          handlePurchase={(data) => handlePurchase(data)}
          handleWhishlist={(data) => handleWhishlist(data)}
        />
      )}
    </div>
  );
};

export default EventsPage;
