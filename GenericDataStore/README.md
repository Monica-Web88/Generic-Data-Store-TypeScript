# DataStore

/*
This DataTypeStore.ts Class is a Generic Class that can create an array
of any data type.

Functions are:
--------------
Add a single or multiple data to the array.
Remove data from array given an index
Get all items from array
Add only items with unique ID incase of Person dataType
Person interface created 
Find an item by name incase of Person dataType

*/

To execute the file:
First generate the .js file

> tsc DataTypeStore.ts

Next execute the generated .js file

>node DataTypeStore.js

This would generate the below output




<<<<<<<<<<<<<<<-------------Monica's Generic DataType Store----------------->>>>>>>>>>>>>>>

Getting number array :
 [ 1, 2, 3, 4, 5 ]

Getting string array :
 [ 'pink', 'blue', 'red', 'green', 'yellow' ]

Get all entries with name Monica :
 [ { name: 'Monica', id: 30 }, { name: 'Monica', id: 25 } ]

Getting Person Object array :
 [
  { name: 'Monica', id: 30 },
  { name: 'Monica', id: 25 },
  { name: 'Harry', id: 22 },
  { name: 'Ron', id: 45 },
  { name: 'Ginny', id: 68 },
  { name: 'Luna', id: 23 }
]

Getting mixed type array :
 [ 42, 'Hello', { name: 'Percy', id: 40 } ]

After Removing first item from mixed array :
 [ 'Hello', { name: 'Percy', id: 40 } ]

Clearing the mixed array:
 []


