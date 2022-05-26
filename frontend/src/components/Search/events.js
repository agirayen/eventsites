import React from "react";

export const Event = (props) => {
  return (
    <div className="event-container">
      <span className="EventsAndPie">
        <table className="EventsTable">
          <thead>
            <tr>
              <th>Event</th>
              <th>city</th>
              <th>Date</th>
              <th>Site</th>
            </tr>
          </thead>
          {props.map((val) => {
            return (
              <tbody>
                <tr key={val.id}>
                  <td>{val.name}</td>
                  <td> {val._embedded.venues[0].city.name}</td>
                  <td>{val.dates.start.localDate}</td>
                  <td>
                    <a href={val.url}>Link</a>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </span>
    </div>
  );
};
export default Event;
