// Code your solution in this file!
function logDriverNames(drivers) {

    // for (const element in drivers) {
    //     console.log(drivers[element][name])
    // }
    drivers.map(driver => console.log(driver['name']))
} 

function logDriversByHometown(drivers, location) {
    drivers.filter( function(driver) {
        console.log(driver)
        if (driver['hometown'] === location) {
            console.log(driver['name'])
        }
    })
}

function driversByRevenue(drivers) {
    const sortedDrivers = [...drivers]

    const numberSorter = function (obj1, obj2) {
        return obj1.revenue - obj2.revenue;
    };

    return sortedDrivers.sort(numberSorter);
}

function driversByName(drivers) {
    const sortedDrivers = [...drivers]

    const comparator = function (a, b) {
        return a.name.localeCompare(b.name);
      };

    return sortedDrivers.sort(comparator); 
} 

function totalRevenue(drivers) {
    // var total = [ 0, 1, 2, 3 ].reduce(
    //     ( accumulator, currentValue ) => accumulator + currentValue,
    //     0
    //   );

    driverRevenues = []
    drivers.map( driver => driverRevenues.push(driver['revenue']))
    console.log(driverRevenues)

    sum = driverRevenues.reduce(
        (total, current) => total + current, 
    )
    return sum;

    // o = drivers 
    // Object.values(o).reduce(
    //     (total, current) => total + current
    // )

    // const total = drivers.reduce(
    //     (driver[], currentValue) => acc + currentValue
    // );
    // return total;
}


function averageRevenue(drivers) {
    sum = totalRevenue(drivers)
    return avg = sum / drivers.length
}







// Object.values(o).reduce((total, current) => total + current.value, 0)

// (acc + (val * 3))


// var o = { 
//     a: {value:1}, 
//     b: {value:2}, 
//     c: {value:3} 
// };

// Object.keys(o).reduce(function (previous, key) {
//     return previous + o[key].value;
// }, 0);










// reduce: function reduce(collection, callback, init=0) {
//     // console.log(collection, callback, init)
//     if (init !== undefined) {
//       acc = init
//     } else {
//       acc = collection[0]
//       collection = collection.slice(1)
//     }

//     for(const element of collection) {
//       acc = callback(acc, element)
//     }
    
//     return acc;
//   },