import React from "react";

const EventsTable = ({
  data,
  handlePurchase,
  handleWhishlist,
  handleRemove,
  showRemove,
  showPurchaseRemove,
}) => {
  return (
    <div>
      <table className="EventsTable">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>City</th>
            <th>Link </th>
            <th>Address</th>
            <th></th>
            <th></th>
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
                  {showPurchaseRemove && (
                    <td>
                      <button onClick={() => handlePurchase(event)}>
                        {`Purchase`}
                      </button>
                    </td>
                  )}
                  {showPurchaseRemove && (
                    <td>
                      <button
                        onClick={() => handleWhishlist(event)}
                      >{`Wishlist`}</button>
                    </td>
                  )}
                  {showRemove && (
                    <td>
                      <button onClick={() => handleRemove(event)}>
                        Remove
                      </button>
                    </td>
                  )}
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default EventsTable;
