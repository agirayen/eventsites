import React from "react";

const EventsTable = ({ data, handlePurchase, handleWhishlist }) => {
  return (
    <div>
      <table className="EventsTable">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>City</th>
            <th>Link </th>
            <th>Address</th>
            <th>Purchase</th>
            <th>Wishlist</th>
          </tr>
        </thead>
        {data &&
          data.length &&
          data.map((event) => {
            return (
              <tbody>
                <tr>
                  <td>{event.event_name}</td>
                  <td>{event.name}</td>
                  <td>
                    <a href={event.url} alt="link to event">
                      Link to event
                    </a>
                  </td>
                  <td>{event.address_line_1}</td>
                  <td>
                    <button onClick={() => handlePurchase(event)}>
                      {`Purchase`}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleWhishlist(event)}
                    >{`Wishlist`}</button>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default EventsTable;
