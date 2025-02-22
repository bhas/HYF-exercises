function getTicketPrice(age, isVIP) {
    let price;
    if (isVIP) {
        price = 0;
    } else {
        if (age < 12) {
            price = 50;
        } else {
            if (age >= 12 && age < 18) {
                price = 75;
            } else {
                price = 100;
            }
        }
    }
    return price;
}

function canTravel(height, age) {
    if (height >= 140) {
        if (age >= 10) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function printPassengerInfo(name, age, height, isVIP) {
    let ticketPrice = getTicketPrice(age, isVIP);
    let travelStatus = canTravel(height, age) ? "Approved for launch" : "Not eligible for space travel";
    console.log(name + " | Age: " + age + " | Height: " + height + "cm | Ticket Price: $" + ticketPrice + " | Travel Status: " + travelStatus);
}

printPassengerInfo("John", 25, 180, false);
printPassengerInfo("Jane", 10, 130, false);
printPassengerInfo("Bob", 16, 155, true);
printPassengerInfo("Alice", 8, 120, false);
printPassengerInfo("David", 12, 140, false);
printPassengerInfo("Eve", 18, 160, false);
printPassengerInfo("Frank", 11, 145, false);
printPassengerInfo("Grace", 14, 135, false);
printPassengerInfo("Henry", 9, 125, false);
printPassengerInfo("Isabel", 13, 150, false);
printPassengerInfo("Kevin", 17, 170, false);
printPassengerInfo("Lucy", 7, 110, false);
printPassengerInfo("Michael", 15, 165, false);
printPassengerInfo("Nancy", 19, 175, false);
printPassengerInfo("Oliver", 6, 105, false);
printPassengerInfo("Patricia", 20, 185, false);
printPassengerInfo("Quinn", 5, 100, false);
printPassengerInfo("Robert", 21, 190, false);