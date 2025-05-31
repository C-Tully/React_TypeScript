/**
 * Quick refresher on the basics.
 */

//Explicit assignment
// let userName: string = "Chris";

// userName = "John";
// userName = 34; <- type error

/**
 * Some keywords to keep in mind..
 *
 * string
 * number
 * boolean
 * classes
 * interfaces
 * union
 * void
 * undefined
 * functions
 * custom types (type keyword)
 *
 */

//Invoking the compliler
// in a terminal..
/**
 *   tsc :
 *  npx tsc : on demand
 *    npx tsc /route
 *
 */

//Union Example
// let userID = 'abc1';
// userID = 123; //throws error without being a uniton type

// let userID: string | number;
// userID = 123; //No error;
// userID = 'abc'; //No error;
// userID = true; //throws error

//Working with Objects

// let user; //not setting an initial type leaves us with type: any

// user = {
//   name: 'Max',
//   age: 34,
//   isAdmin: true,
//   id: 'abc' //or 123
// };

//built in object type, missing structure though
// let user: object = {}

// user = 'abc' throws error, object type is a primitive value

//to get a given structure for a object
//we change it from object to let user: { key:value }
// let user: {
//   name: string;
//   age: number;
//   isAdmin: boolean;
//   id: string | number; //union type
// };

// //Note we have married up the expected types

// user = {
//   name: "Max",
//   age: 34,
//   isAdmin: true,
//   id: "abc", //or 123
// };

// user = {} throws error

//Arry types
// let hobbies: Array;
/**
 * Throws error, due to missing 1 type argument
 * meaning the array type requires more information. <type> is required.
 * the type of values a given array contains, also works with union types
 */
// let hobbies: Array<string>;
// hobbies = ["lorem", "ipsum", "dollar"];
// hobbies = [1,2,3]; throws error

//More common short cut to write this out. ...number[]; boolean[]
//objects {name:string; age: number}[]
// let hobbies: string[];

//Parameters & Return Value types

// const API_KEY = 'abc';
//API_KEY = 'def'; //error.

//functions..
// function add(a:number, b:{}) {
//// function add(a:number, b:string) {

// function add(a:number, b:number) {
//   const result = a+b; //TS infers number return type due to params
// }

// function add(a:number, b:number): undefined {
//This sets the return type and sets a explicit no return type
// : void should be used instead of undefiend for a func without a return type

// function add(a:number, b:number): void {
//   const result = a+b;
//   // return result; errors due to :void return type
// }

//omiting the return type will still return a number inference
function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

//defining functions as stypes

/**
 * setting a func as a param is valid js
 * we should seta fuction type in these cases as well
 * We need to define the funcion leveraging an arrow function
 * this is TS syntax
 */

// function calculate(
//   a: number,
//   b: number,
//   calcFn: (a: number, b: number) => number
// ) {
//   calcFn(a, b);
// }

// calculate(2, 5, add);

//Custom Types

/** type aliases are keywords made avaiable by TS
 * the type key words is spectial to TS
 */
//type AddFn = (a: number, b: number) => number;

/** The change here we see is that instead of defining the
 *   type inline we can create a custom reuseable type definition
 */

// function calculate(a: number, b: number, calcFn: AddFn) {
//   calcFn(a, b);
// }

// calculate(2, 5, add);

//E.g Making a Union type
// type StringOrNum = string | number;

// let userID: StringOrNum = "abc";
// userID = 123;

// //Object Types
// type User = {
//   name: string;
//   age: number;
//   isAdmin: boolean;
//   id: string | number; //union type
// };

// let user: User;

/**
 *  Interfaces
 *  TS specific,
 *  interfaces are intended for defining Object types
 */

interface Credentials {
  password: string;
  email: string;
}

// Example of extending an existing interface
// *Helps with Declaration merging
interface Credentials {
  mode: string;
}

let creds: Credentials;

creds = {
  password: "abc",
  email: "test@example.com",
  mode: "abc",
};

/**
 *  So why use interface instead of type?
 *  In general you can always use the type keyword
 *  Interface is more limited to objects.
 *  *note: You can actually use interface to define function types
 *  Buy you, for example, CANT use interface to store a uniton type
 *
 */

/**
 * We can however implement a interface
 * This forces us to have the props from the interface
 * within the class. Essentially a contract the class must adear to
 * Interfaces are also easily extendable allowing us to add to it
 */
class AuthCrendentials implements Credentials {
  email: string;
  password: string;
  mode: string;
}

/**
 *  Using a interface as a param in a function
 *  lets us set the requirements as well for that param
 */
function login(credentials: Credentials) {}

//Passing just a object
login(creds);

//Passing a class that implements the credentials interface
// also sastifies the type requirements
login(new AuthCrendentials());

/**
 * Merging Types
 */

// type Admin = {
//   permissions: string[];
// };

// type AppUser = {
//   userName: string;
// };

/**
 *  In this example we want the two types seperated
 *  but we also what a merged type, for that we use the &
 * We can also merge types with the interface keywords.
 */
// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;

// admin = {
//   userName: "abc",
//   permissions: ["lorem"],
// };

interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

//Note its the extends Keywords that lets us merge this
//into a new interface. you can extend multiple interfaces
interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;

admin = {
  userName: "abc",
  permissions: ["lorem"],
};

/**
 * Being specific with Literal types
 *  Setting up a lock on type
 */
//admin, user, or editor nothing else, we could use string..
// let role: string;

//By defining the type in this way, we are locking in
// an acceptable input to allow multiple, we use a union type

// let role: "admin" | "user" | "editor" | 1;
type Role = "admin" | "user" | "editor" | 1; // Setting to type
//to demonstrate typeGuards
let role: Role;
role = "admin";
role = "user";
role = "editor";
// Note: the abc doesn't work due to the union type
// requirements
// role = 'abc'

/**
 * Type Guards
 */

/** E.g we only want a given function to triger
 * if a specific role is eligable
 * This is important when working with union types
 * and a pattern that helps to ensure we are correclty
 * firing when needed
 *  Other types of "type guard" operators include
 *  typeof
 *  instanceof
 *  in
 *
 * IMPORTANT! you can not check if a value mees the definition of a cust time
 * (type alias) or interface type due these being TS specific features and
 * does not translate at compile since they are TS only and not JS.
 */

function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    //Do something...
  }
}

/**
 * Generic Types : A type that works together with another type
 */

//Built in generic type example.
let roles: Array<Role>;
roles = ["admin", "editor", "user"];

/**
 * Due to us not know what the data will be at this time we want a generic type
 * or a type placeholder. The DataStorage type will be connected to another type
 * and there fore we want a generic type <T, U> allows for multiple generic types
 */
type DataStorage<T> = {
  storage: T[]; //An array of ojects we don't know of yet'
  add: (data: T) => void; //could return what ever
};

//Note we set the type at this point, the string being used as the
//place holder
const textStorage: DataStorage<string> = {
  storage: ["abc", "def"],
  //Because we're using T as the generic type and passing it
  //to the props/funcs VS will infer from the declaration
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {
    this.storage.push(user);
  },
};

//Generic Function, note the <> is after the name
function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

/**
 * Setting up the connected types
 * Note you can remove the <> in this case as TS will
 * infer based on the original function declaration.
 * while keeping type safety.
 */
const newUser = merge<{ name: string }, { age: number }>(
  { name: "John" },
  { age: 100 }
);
newUser.name;
