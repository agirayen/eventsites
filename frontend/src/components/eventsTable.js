import React from "react";
import { Row, Col, Table } from "react-bootstrap";

const EventsTable = ({ data }) => {
  return (
    <Row>
      {data &&
        data.length &&
        data.map((event) => {
          return (
            <>
              <Row>
                <Table>
                  <thead></thead>
                  <tr>
                    <td>{event.event_name}</td>
                    <td>{event.name}</td>
                    <td>{event.url}</td>
                    <td>{event.address_line_1}</td>
                    <td>{`Purchase`}</td>
                    <td>{`Wishlist`}</td>
                  </tr>
                </Table>
              </Row>
            </>
          );
        })}
    </Row>
  );
};

export default EventsTable;
