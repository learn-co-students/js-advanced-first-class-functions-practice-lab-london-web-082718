// Code your solution in this file!

// Receives an array of driver objects and logs the name attribute of each driver to the console.
function logDriverNames(array) {
array.forEach(driver => console.log(driver.name))
}

// Receives an array of driver objects as the first argument and a location as the second argument. The function logs to the console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.
function logDriversByHometown(array, location) {
    for (const driver of array) { 
        if (driver.hometown === location) {
            console.log(driver.name);
        }
    }
};

// Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.
function driversByRevenue(array) {
    return [...array].sort( (a,b) => a.revenue - b.revenue)
}

function driversByName(array) {
    return [...array].sort( (a,b) => a.name.localeCompare(b.name) );
}

function totalRevenue(array) {
    return array.reduce((acc, cv) => acc += cv.revenue, 0)
}

function averageRevenue(array) {
    return totalRevenue(array) / array.length;
}