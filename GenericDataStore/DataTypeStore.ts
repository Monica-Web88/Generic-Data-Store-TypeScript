/*
This DataTypeStore Class is a Generic Class that can create an array
of any data type.

Functions are:
--------------
Add a single or multiple data to the array.
Remove data from array given an index
Get all items from array
Add only items with unique ID incase of Person dataType
Person interface created 
Find an item by name incase of Person dataType

Author: Monica Purushothaman
Date : 2024 August
*/

class DataTypeStore<T> {
    private store: T[] = [];  // Array to hold items of type T
  
    /*
    // Add an item to the store
    addItem(item: T): void {
      this.store.push(item);  // Add item to the array
    }
  */
  
  // Add an item to the store (for Person, ensure unique ID)
  addItem(item: T): void {
    if ((item as Person).id) {
      const person = item as Person;
      // Check if the ID already exists in the store
      try{
      if (this.store.some((storedItem) => (storedItem as Person).id === person.id)) {
        throw new Error(`Error: Person with id ${person.id} already exists.`);
      }
    }
    catch (error) {
      console.error("Error while adding Person data : ", error);
      
      }
    }
    
    // If no duplicate ID, add the item to the store
    this.store.push(item);
  }
  
    //use spread operator to add array of items
    addMultipleItems(items: T[]):void {
      this.store.push(...items);
    }
  
    // Get an item from the store by index
    getItem(index: number): T | undefined {
      return this.store[index];  // Return item at the specified index, or undefined if out of bounds
    }
  
    // Remove an item from the store by index
    removeItem(index: number): void {
      if (index < 0 || index >= this.store.length) {
        throw new Error(`Index ${index} is out of bounds.`);
      }
      this.store.splice(index, 1);  // Remove item from array using splice
    }
  
    // Get all items in the store as an array
    getAllItems(): T[] {
      return this.store;  // Return a shallow copy of the array
    }
  
   // Find all items by name (only for Person type)
   findByName(name: string): Person[] 
   {
      return this.store.filter(item => 
        {
        // Check if the item is of type Person and has a 'name' property
          if ((item as Person).name === name) {
            return true;
           
        }
       return false;
      }) as Person[];
    }
  
    // Clear all items from the store
    clearAll(): void {
      this.store = [];  // Reset the array to an empty array
    }
  
    // Check if there are any items in the store
    hasItems(): boolean {
      return this.store.length > 0;  // Return true if there are any items
    }
  }
  
  // Example usage:
  
  // 1. Create a store for numbers
  const numberStore = new DataTypeStore<number>();
  numberStore.addItem(1);
  numberStore.addItem(2);
  numberStore.addMultipleItems([3,4,5]);
  console.log("\n\n<<<<<<<<<<<<<<<-------------Monica's Generic DataType Store----------------->>>>>>>>>>>>>>>")
  console.log("\nGetting number array : \n" , numberStore.getAllItems()); // Output: [1, 2]
  
  // 2. Create a store for strings
  const stringStore = new DataTypeStore<string>();
  stringStore.addItem('pink');
  stringStore.addItem('blue');
  stringStore.addMultipleItems(['red','green', 'yellow']);
  console.log("\nGetting string array : \n" ,stringStore.getAllItems()); // Output: ['Hello', 'Goodbye']
  
  // 3. Create a store for custom types (e.g., Person)
  interface Person {
    id: number;
    name: string;
    
  }
  
  const personStore = new DataTypeStore<Person>();
  personStore.addItem({ name: 'Monica', id: 30 });
  personStore.addItem({ name: 'Monica', id: 25 });
  personStore.addMultipleItems( [{name :'Harry', id:22}, {name : 'Ron', id:45}]);
  personStore.addMultipleItems( [{name :'Ginny', id:68}, {name : 'Luna', id:23}]);
  console.log("\nGet all entries with name Monica : \n" ,personStore.findByName('Monica'));
  console.log("\nGetting Person Object array : \n" , personStore.getAllItems()); // Output: [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }]
  //personStore.addItem({ name: 'Bob', id: 25 });
  
  // 4. Create a store for mixed types (number, string, object)
  const mixedStore = new DataTypeStore<any>();
  mixedStore.addItem(42);
  mixedStore.addItem('Hello');
  mixedStore.addItem({ name: 'Percy', id: 40 });
  console.log("\nGetting mixed type array : \n" ,mixedStore.getAllItems()); 
  
  // 5. Remove an item from the store
  mixedStore.removeItem(0);  // Remove first person (Alice)
  console.log("\nAfter Removing first item from mixed array : \n" ,mixedStore.getAllItems()); 
  
  // 6. Clear all items
  mixedStore.clearAll();
  console.log("\nClearing the mixed array: \n" ,mixedStore.getAllItems()); // Output: []