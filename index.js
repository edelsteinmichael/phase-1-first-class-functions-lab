// Code your solution in this file!
// task 1

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'] 

const returnFirstTwoDrivers = function (drivers) {
    let firstDrivers = drivers.slice(0, 2)
    return firstDrivers
}
const returnLastTwoDrivers = function (drivers) {
    let lastDrivers = drivers.slice(2, 4)
    return lastDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// task 2

let farePrice 
function createFareMultiplier(farePrice) {
  return function Multiplier() { 
    const newFare1 = farePrice * 5
    return newFare1
 }
}

function fareDoubler(farePrice) {
    let newFare2 = farePrice * 2
    return newFare2

}

function fareTripler(farePrice) {
    let newFare3 = farePrice * 3
    return newFare3
}

// task 3

function selectDifferentDrivers(drivers, selectingDrivers) {
    
}