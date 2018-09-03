for (let counter = 1; counter < 101; counter++) {
 
switch (counter) {
	
 case (counter % 3 === 0 && counter % 5 === 0):
 console.log("fizzbuzz");
 break;
 
 case (counter % 3 === 0):
 console.log("fizz");
 break;
 	
 case (counter % 5 === 0):
 console.log("buzz");
 break;
 	 	
 default 
 console.log(counter);
 break;
 
 }
}

