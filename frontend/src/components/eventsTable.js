import React from "react";
import { Row, Table, Container } from "react-bootstrap";

const EventsTable = ({ data, handlePurchase, handleWhishlist }) => {
  return (
    <Container>
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
                      <td
                        onClick={() => handlePurchase(event)}
                      >{`Purchase`}</td>
                      <td
                        onClick={() => handleWhishlist(event)}
                      >{`Wishlist`}</td>
                    </tr>
                  </Table>
                </Row>
              </>
            );
          })}
      </Row>
    </Container>
  );
};

export default EventsTable;
