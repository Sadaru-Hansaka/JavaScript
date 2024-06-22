const cities = ["Delhi", "Mumbai", "Chennai", "Kolkata"];

function logCities(...city){
    for(var i =1 ; i<=cities.length;i++){
        console.log(i,city[i-1]);
    }
}

logCities(...cities)