// // TS is a programming language, its a super set of JS
// // syntax is same
// // tsc --init will create tsconfig.json file

// // let id:number = 3;
// // let name:string = "Tanzim";
// // let isGraduated: boolean = false;

// // //array
// // let ids: number[] = [1,2,3,4,5];
// // let idAny:any =true; // only be used in extreme scenerios
// // // array with strings
// // let strIds: string[] = ["1","2","3","4","5"];

// // // array with mixed types:
// // let mixedIds: any[] = [1,'Tanzim', false];


// // const concatVals = (a:number,b:number):number=>{
// //     return a+b;
// // }
// // console.log(concatVals(2,2));


// // Defining object
// interface UserInterface {
//     id: number;
//     name: string;
//     age?: number;
//     isGraduated: boolean;
//     greet(msg:string): void;

// }//roadpap of how a obj should look like

// const User:UserInterface = {
//     id: 0,
//     name: "Tanzim",
//     age: 34,
//     isGraduated: false,
//     greet(msg) {
//         console.log(msg);
//     }
// };

// User.greet('Hi');

const printID = (id:number | string):void=>{ // union : allows both type
    console.log('ID is '+ id)
}
printID(12143);
printID("sas12");

// we can create custom type according to our need
type TokenField = number | string;
const getToken = (token: TokenField) =>{
    console.log("Token is " + token);
}
getToken("FDR565612")

interface BusinessPartner { 
    name: string;
    creditScore: number;
}

interface Users{
    id: number;
    age: number;
    email: string;
}

type Employee = BusinessPartner & Users;

const getEmployeeInfo = (employee: Employee): void=>{
    console.log(`The person named ${employee.name} has an email address: ${employee.email}`)
}

const employee1:Employee = {
    name: "Tanzim",
    creditScore: 790,
    id: 123,
    age: 38,
    email: 'tanzimr@mun.ca'
}

getEmployeeInfo(employee1)