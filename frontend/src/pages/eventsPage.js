import React, { useEffect, useState } from "react";
import { baseUrl } from "../config";
import { getData } from "../services/httpService";
import EventsTable from "../components/eventsTable";

const EventsPage = () => {
  const [eventsData, setEventsData] = useState([]);
  useEffect(() => {
    let url = `${baseUrl}/getEvents`;
    getData(url).then((events) => {
      console.log(events);
      setEventsData(events.data.data);
    });
  });

  return <div>{eventsData && <EventsTable data={eventsData} />}</div>;
};

export default EventsPage;
