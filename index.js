// Code your solution in this file!

// FunctionsL: forEach, sort and reduce  

// this first function is stored as a variable
function logDriverNames(drivers) {
  drivers.forEach(eachDriver => console.log(eachDriver.name)) ;
}

function logDriversByHometown(drivers, location) {
// logDriverNames(drivers.filter(eachDriver => eachDriver.hometown === location))
  const filteredDrivers = drivers.filter(eachDriver => eachDriver.hometown === location)
  logDriverNames(filteredDrivers)
}

function driversByRevenue(drivers) { 
  return drivers.slice().sort(function (driver1, driver2) { 
    // need to use .slice() method here 
    // makes a copy of the entire array as nothing is sliced
    return driver1.revenue - driver2.revenue
  })
  // need to return the sorted list of drivers
} 

function driversByName(drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    // returns a new array  - hence use .slice()
    return driver1.name.localeCompare(driver2.name)
    // need to compare the names
  })
}

function totalRevenue (drivers) {
  return drivers.reduce( (total, currentDriver) => total + currentDriver.revenue, 0)
} 
// this callback func  (arrow) has an accumulator and the current value we are iterating over, also 0 is default starting value - is defined in the actual function side, not as a parameter
// https://github.com/learn-co-students/london-web-082718/tree/master/24-callbacks-and-closures 

function averageRevenue (drivers) { 
  const totalRev = totalRevenue (drivers)
  const averageRev  = totalRev / drivers.length 
  return averageRev
}