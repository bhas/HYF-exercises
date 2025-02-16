


console.warn("======= Part 3 =======");

// Task 1
// use log.trace() to see the stack trace
function bookPlaneTickets() {
  // what is stack here?
  // Stack is:
  //    bookPlaneTickets
  //    planTrip
  //    global (anonymous)
  console.log("Plane tickets booked");
  requestVacationDays();
}

function bookHotel() {
  // what is stack here?
  // Stack is:
  //    bookHotel
  //    planTrip
  //    global (anonymous)
  console.log("Hotel booked");
  planItinerary();
}

function requestVacationDays() {
  // what is stack here?
  // Stack is:
  //    requestVacationDays
  //    bookPlaneTickets
  //    planTrip
  //    global (anonymous)
  console.log("Vacation days requested");
}

function planItinerary() {
  // what is stack here?
  // Stack is:
  //    planItinerary
  //    bookHotel
  //    planTrip
  //    global (anonymous)
  console.log("Itinerary done");
}

function planTrip() {
  // what is stack here?
  // Stack is:
  //    planTrip
  //    global (anonymous)
  bookPlaneTickets();
  bookHotel();
  console.log("Trip planned");
}

// what is stack here?
// Stack is:
//    global (anonymous)
planTrip();

