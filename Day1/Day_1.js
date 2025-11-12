//variables
//always go with the let=>cannot be redeclared but updated.only declaration without initialization will  be allowed
 //OR const=>cannot be redeclared as well as updated.=>also need to initialize always.
//In js '' or "" are same.

let age=24; //typeof age is Number (one of the data type in js=>Number,String,Boolean,BigInt,Symbol,Undefined,Null )
age=35; //don't redeclared
const pi=3.14;//value become unchanged  
let fullName="Tony stark";
let x;
let y=null;//its a value and datatype as well in js.see after in details.
//null also means absence of an object .we consider here it as primitive data type.
string="abcd"+1; //strings in js are unique things they are appends if we use + sign not add
//now we can take object,mostly we declared it as const,it contains values in the form of
//key:value pair =>that collection is called as object.

const student={  //to access the values inside console in html doc's inspect =>Student["variable name"] and also to know type the=>typeof variable name
    fullName:"yogesh patil",
    age:28,
    cgpa:8.5,
    city:"navi mumbai"
};

const profile={
    username :"shradhhakhapra",
    isFollow :false,
    followers:1234,
    following:1323
};

Console= "mera badla"; 

console.log(student.age); //to access objects key =>student.age or student["age"]=same result.
console.log(student["age"]);//both are same.
//to update any value within student object see below=>
student['age']=student['age']+1;//increase age of student by 1 and assigned to respective key
console.log(student["age"]);
student["fullName"]="yogesh bhat"; //change occured even ,student object is constant. its rule in js ,see later.
console.log("i love javascript");
//area of circle
let length=10;
const breadth=30;
console.log("area of square= "+length*breadth);
console.log("area of square= "+length*breadth);
