// Defining a Class
class Car {
    Brand = 'Tesla';
    Speed = 200;
    static Ignition = () => {
        console.log(`Car starts and begins to move with 200Kmhr on the road`)
    }
    ColorOfBody = 'Red';
    static numberOfTyres = 4;
}
// Accessing a static property of the object
Car.Ignition()
console.log(Car.numberOfTyres)
// Accessing the object properties
// First we create an Object of the Class
const Vehicle1 = new Car() // This creates an Object Vehicle1 which contains all the properties of the car object
// Accessing the properties of Vehicle 1
console.log( `${Vehicle1.Brand} moves at the speed of ${Vehicle1.Speed}`)
// Updating Object Properties
Vehicle1.ColorOfBody = 'Grey'
console.log(`Vehicle1 is now ${Vehicle1.ColorOfBody} in color`);