function bookPlaneTickets() {
  // draw
  console.trace();
  console.log("Plane tickets booked");
  requestVacationDays();
  // draw
}

function bookHotel() {
  console.log("Hotel booked");
  // draw
  planItinerary();
  // draw
}

function requestVacationDays() {
  // draw
  console.log("Vacation days requested");
  let arr = null;
  arr.push(1);
  // draw
}

function planItinerary() {
  console.log("Itinerary done");
  // draw
}

function planTrip() {
  bookPlaneTickets();
  // draw
  bookHotel();
  // draw
  console.log("Trip planned");
}

// draw
console.trace();
console.log("Start planning trip");
planTrip();
// draw