// // // TS is a programming language, its a super set of JS
// // // syntax is same
// // // tsc --init will create tsconfig.json file

// // // let id:number = 3;
// // // let name:string = "Tanzim";
// // // let isGraduated: boolean = false;

// // // //array
// // // let ids: number[] = [1,2,3,4,5];
// // // let idAny:any =true; // only be used in extreme scenerios
// // // // array with strings
// // // let strIds: string[] = ["1","2","3","4","5"];

// // // // array with mixed types:
// // // let mixedIds: any[] = [1,'Tanzim', false];


// // // const concatVals = (a:number,b:number):number=>{
// // //     return a+b;
// // // }
// // // console.log(concatVals(2,2));


// // // Defining object
// // interface UserInterface {
// //     id: number;
// //     name: string;
// //     age?: number;
// //     isGraduated: boolean;
// //     greet(msg:string): void;

// // }//roadpap of how a obj should look like

// // const User:UserInterface = {
// //     id: 0,
// //     name: "Tanzim",
// //     age: 34,
// //     isGraduated: false,
// //     greet(msg) {
// //         console.log(msg);
// //     }
// // };

// // User.greet('Hi');

// const printID = (id:number | string):void=>{ // union : allows both type
//     console.log('ID is '+ id)
// }
// printID(12143);
// printID("sas12");

// // we can create custom type according to our need
// type TokenField = number | string;
// const getToken = (token: TokenField) =>{
//     console.log("Token is " + token);
// }
// getToken("FDR565612")

// interface BusinessPartner { 
//     name: string;
//     creditScore: number;
// }

// interface Users{
//     id: number;
//     age: number;
//     email: string;
// }

// type Employee = BusinessPartner & Users;

// const getEmployeeInfo = (employee: Employee): void=>{
//     console.log(`The person named ${employee.name} has an email address: ${employee.email}`)
// }


// const employee1:Employee = {
//     name: "Tanzim",
//     creditScore: 790,
//     id: 123,
//     age: 38,
//     email: 'tanzimr@mun.ca'
// }

// getEmployeeInfo(employee1)

// //TS ENUMS
// // Kind of errors:
// // 1.  unauthorized 2. No user 3.wrong cred 4. internal
// // enum help readability
// enum LoginError {
//     Unauthorized = 'unauthorized',
//     NoUser = 'no user',
//     WrongCred = 'wrongcred',
//     Internal = 'internal',    
// }
// const printErrorMessage = (error:LoginError)=>{
//     if (error === LoginError.Unauthorized) {
//         console.log('Not authorized')
//     }else if(error === LoginError.NoUser){
//         console.log('No user found');
        
//     }else if(error === LoginError.WrongCred){
//         console.log('Wrong credentials');  
//     } 
//     else if(error === LoginError.Internal){
//         console.log('There are some internal errors');
//     }

// }

// printErrorMessage(LoginError.WrongCred);


class StorageContainer<T>{ // T is like a placeholder for different data types that we use
    private contents : T[];
    constructor(){
        this.contents = [];
    }
    addItem(item: T):void{
        this.contents.push(item)
    }
    getItem(idx:number):T | undefined{
        return this.contents[idx];
    
    }

}
const container1 = new StorageContainer<string>();
container1.addItem("Tanzim");
container1.addItem("Rahman");
console.log(container1.getItem(1));

//read only variables
interface Runner {
    readonly runnerId: number,
    name: string,
    max_speed: number,
    count_medal: number,
    first_ran: Date
}

const runner: Runner = {
    runnerId: 1,
    name: "Tanzim",
    max_speed: 100,
    count_medal: 0,
    first_ran: new Date()

}
