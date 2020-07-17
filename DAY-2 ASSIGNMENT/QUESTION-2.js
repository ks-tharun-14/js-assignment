console.log( "METHODS OF STRINGS" );

let text = "There is a tree with apples which one of the has fell down on NEWTON."

var intReg = /[0-9 -()+]+$/;  

console.log(text);

// to get the length of string
console.log(text.length);

// Returns the character at the “x” position within the string
console.log(text.charAt(6));

// Returns the Unicode value of the character at position “x” within the string.
console.log(text.charCodeAt(1));

// Returns the string with all of its characters converted to lowercase.
console.log(text.toLocaleLowerCase());

// Returns the string with all of its characters converted to uppercase.
console.log(text.toLocaleUpperCase());

// Returns the characters in a string between “from” and “to” indexes, NOT including “to” inself. “To” is optional, and if omitted, up to the end of the string is assumed.
console.log(text.substring(0,[14]));

// Returns the characters in a string beginning at “start” and through the specified number of characters, “length”. “Length” is optional, and if omitted, up to the end of the string is assumed.
console.log(text.substr(9,[18]));

// Splits a string into many according to the specified delimiter, and returns an array containing each element
console.log(text.split(" "));
console.log(text.split("i"))

// Returns a substring of the string based on the “start” and “end” index arguments, NOT including the “end” index itself
console.log(text.slice(1,10));
console.log(text.slice(11,20));

// Tests for a match in a string. It returns the index of the match, or -1 if not found.
console.log(text.search(intReg))

// Searches and replaces the regular expression (or sub string) portion (match) with the replaced text instead
console.log(text.replace(new RegExp( "apple" ), "mango"));

/*
Searches and (if found) returns the index number of the searched character or substring within the string.
Searches the string from end to beginning.
If not found, -1 is returned.
*/ 
console.log(text.lastIndexOf("r"));
console.log(text.lastIndexOf("z"));

/*
Searches and (if found) returns the index number of the searched character or substring within the string. 
If not found, -1 is returned
*/
console.log(text.indexOf("r"));

/*
Combines one or more strings (arguments v1, v2 etc) into the existing one and returns the combined string.
Original string is not modified.
*/
console.log(text.concat("Because of this now we are studying physics.","why the hell happened this ?"));

/*
Check whether it ends with same index returned.
Returns TRUE if it matches,FALSE if doesn't match 
*/ 
console.log(text.endsWith(97));
console.log(text.endsWith("NEWTON."));


console.log( "METHODS OF ARRAYS" );

let arr1 = ["1",2,"three",[4,"five"]];
let arr2 = ["abc",123,"123"]

console.log(arr1);
console.log(arr2);

// Joins two or more arrays, and returns a copy of the joined arrays.
arr = arr1.concat(arr2);
console.log(arr);

// Copies array elements within the array, to and from specified positions
console.log(arr1.copyWithin(3,0));

// Adds new elements to the end of an array, and returns the new length
console.log(arr2.push("sss",2));

// Removes the last element of an array, and returns that element
console.log(arr1.pop());


arrr = [100,81,64,36,49];

// Creates a new array with the result of calling a function for each array element
console.log(arrr.map(Math.sqrt));

// Check if an array contains the specified element
console.log(arrr.includes(100));

// 	Search the array for an element and returns its position
console.log(arrr.indexOf(49));

// Checks whether an object is an array
console.log(Array.isArray(arrr));

//Joins all elements of an array into a string
console.log(arrr.join());

// Removes the first element of an array, and returns that element
console.log(arrr.shift());

// Selects a part of an array, and returns the new array
console.log(arrr.slice(1));

// Returns the primitive value of an array
console.log(arrr.valueOf());

//	Sorts the elements of an array
console.log(arrr.sort());

// Converts an array to a string, and returns the result
console.log(arrr.toString());

// 	Adds/Removes elements from an array
console.log(arrr.splice(1,2));

