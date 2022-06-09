INSERT INTO venue_address(state_name,city,country, address_line_1) VALUES ('Oregon','Portland', 'United States Of America','12 Beaverton');
INSERT INTO venue_address(state_name,city,country, address_line_1) VALUES ('Washington','Seattle', 'United States Of America','12 Downtown');
INSERT INTO venue_address(state_name,city,country, address_line_1) VALUES ('California','San Jose', 'United States Of America','12 Creek');
INSERT INTO venue(name,type,venue_id, postal_code, address_id) VALUES ('Hilton','venue', 'ZZZ','123',2);
INSERT INTO venue(name,type,venue_id, postal_code, address_id) VALUES ('Kingston','venue', 'YYY','1234',3);

INSERT INTO events(event_name,venue_id,url, event_type , startDate) 
VALUES ('Concert',2, 'https://www.ticketmaster.com/event/Z7r9jZ1AdC9f8','event','2022-06-07T22:30:00Z');

INSERT INTO events(event_name,venue_id,url, event_type , startDate) 
VALUES ('Laughter Show',2, 'https://www.ticketmaster.com/event/Z7r9jZ1AdC9f8','event','2022-06-07T22:30:00Z');

INSERT INTO events(event_name,venue_id,url, event_type , startDate) 
VALUES ('Holi show',2, 'https://www.ticketmaster.com/event/Z7r9jZ1AdC9f8','event','2022-06-07T22:30:00Z');

INSERT INTO events(event_name,venue_id,url, event_type , startDate) 
VALUES ('Rain dance',2, 'https://www.ticketmaster.com/event/Z7r9jZ1AdC9f8','event','2022-06-07T22:30:00Z');