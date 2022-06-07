import React, { useEffect, useState } from "react";
import { baseUrl } from "../config";
import { getData } from "../services/httpService";
import EventsTable from "../components/eventsTable";

const PurchasePage = () => {
  const [eventsData, setEventsData] = useState([]);
  useEffect(() => {
    let user_id = parseInt(localStorage.getItem("userId"), 10);
    let url = `${baseUrl}/getPurchase?user_id=${user_id}`;
    getData(url).then((events) => {
      console.log("purchase events", events);
      setEventsData(events.data.data);
    });
  }, []);

  const handlePurchase = (eventData) => {
    // let url = `${baseUrl}/savePurchase`;
    // let user_id = parseInt(localStorage.getItem("userId"), 10);
    // let { event_id } = eventData;
    // let dataToPost = {
    //   user_id,
    //   event_id,
    // };
    // postData(url, dataToPost).then((success) => {
    //   console.log("whishlist posted", success);
    // });
  };
  const handleWhishlist = (eventData) => {
    // let url = `${baseUrl}/saveWhishlist`;
    // let user_id = parseInt(localStorage.getItem("userId"), 10);
    // let { event_id } = eventData;
    // let dataToPost = {
    //   user_id,
    //   event_id,
    // };
    // postData(url, dataToPost).then((success) => {
    //   console.log("purchase posted", success);
    // });
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

export default PurchasePage;