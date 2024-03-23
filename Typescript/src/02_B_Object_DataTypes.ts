// Composite Datatypes
// Arrays
let arrnum: number[] = [3, 4, 5, 6,];
let arrstr: Array<string> = ["Husky", "Sexo", "Octya"]


//Custom / Typescript datatypes
// Tuple : A tuple is a typed array with a pre-defined length and types for each index.
let tuplevar: [string, number] = ["hello", 10]; // Value arrangement should be same as type annotation
console.log(tuplevar);

// ENUM : An enum is a special "class" that represents a group of constants (unchangeable variables).  Enums come in two flavors string and numeric.
enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
};
let c: CardinalDirections = CardinalDirections.North;
console.log(c);


// ------------------
// Interface


// Class