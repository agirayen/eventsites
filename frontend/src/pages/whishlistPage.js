import React, { useEffect, useState } from "react";
import { baseUrl } from "../config";
import { getData, deleteData } from "../services/httpService";
import EventsTable from "../components/eventsTable";

const PurchasePage = () => {
  const [eventsData, setEventsData] = useState([]);
  useEffect(() => {
    let user_id = parseInt(localStorage.getItem("userId"), 10);
    let url = `${baseUrl}/getWhishlist?user_id=${user_id}`;
    getData(url).then((events) => {
      console.log("whishlist events", events);
      setEventsData(events.data.data);
    });
  }, []);

  const handleRemove = (data) => {
    console.log("whishlist", data);
    let url = `${baseUrl}/removeWhishlist`;
    let deleteInputParams = {
      data: { id: data.whishlist_id },
    };
    deleteData(url, deleteInputParams).then((success) => {
      console.log("successfuly delete item", success);
    });
  };

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
      {eventsData && eventsData.length > 0 && (
        <EventsTable
          data={eventsData}
          handlePurchase={(data) => handlePurchase(data)}
          handleWhishlist={(data) => handleWhishlist(data)}
          handleRemove={(data) => handleRemove(data)}
          showRemove={true}
        />
      )}
      {eventsData && eventsData.length === 0 && <div>No Data</div>}
    </div>
  );
};

export default PurchasePage;
