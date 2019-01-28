// Code your solution here:


// function driversWithRevenueOver(arr, rev) {
//     const returnArr = [];
//     for (const element of arr) {
//         if (element.revenue > rev) {
//             returnArr.push(element);
//         }
//     };
//     return returnArr;
// };
// driversWithRevenueOver([dname: "Sally", revenue: 400}, {name: "Annette", revenue: 200}, {name: "Jim", revenue: 150}], 250);
//      => [{name: "Sally", revenue: 400}]

function driversWithRevenueOver(array, revenueNum) {
    return array.filter(function (element){ return element.revenue > revenueNum });
};
//      => [{name: "Sally", revenue: 400}]


function driverNamesWithRevenueOver(driver, revenue) {
    return driversWithRevenueOver(driver, revenue).map(function(driver) { return driver.name });
};
//      => ["Sally", "Annette"]


function exactMatch(drivers, attribute) {
	return drivers.filter(function(driver) {
		for (const key in attribute) {
			return driver[key] === attribute[key]
		}
	})
};
// exactMatch(driver, { name: 'Sally' }) => [{ name: 'Sally', revenue: 400 }, { name: 'Sally', revenue: 200 }]
// exactMatch(driver, { revenue: 200 }) => [{ name: 'Annette', revenue: 200 }, { name: 'Sally',   revenue: 200 }]

function exactMatchToList(drivers, attribute) {
    return exactMatch(drivers, attribute).map(function(driver) { return driver.name });
};
// exactMatchToList(drivers, { name: 'Sally' }) => [ 'Sally', 'Sally' ]
// exactMatchToList(drivers, { revenue: 200 }) => [ 'Annette', 'Sally' ]
