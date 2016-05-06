

var PrimeFactors = function(y){
	var storage = [];
	var array = [];
	var array2 = [];
		for (var i = 2; i <= y; i++){
			array.push(1);
		}
		for (var j = 2; j <= (Math.sqrt(y)); j++){
			if (array[j-2] === 1){
				for (var k = j*j; k <= y; k+=j){
					array[k - 2] = 0;
				}
			}
		}
		for (var l = 2; l <= y; l++){
			if (array[l-2] === 1){
				array2.push(l);
			}
		}	
		console.log(array2)
	for (var i = 0; i < array2.length; i++){
		if (y % array2[i] === 0){
			storage.push(array2[i]);
		}
	}
	console.log("prime factors: " + storage);
	window.alert(storage);
}
PrimeFactors(prompt("what is your number"));
