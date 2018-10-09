// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(ele => console.log(ele.name))
};

function logDriversByHometown(drivers, town) {
  return drivers.map(function (element) {
    if (element.hometown === town) { console.log(element.name) };
  })
}

function driversByRevenue(drivers) {
  return [...drivers].sort( (a, b) => a.revenue - b.revenue );
}

function driversByName(drivers) {
  return [...drivers].sort( (a, b) => a.name.localeCompare(b.name) );
}

function totalRevenue(drivers) {
  return drivers.reduce( (agg, ele) => agg + ele.revenue, 0 );
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}