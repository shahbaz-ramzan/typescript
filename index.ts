// function define


const sum = (a:number,b:number):number=>{
    return a+b
}

// function call
console.log(sum(5,10))


// string length


let myName:string="shahbaz"
let stringLength:number=myName.length
console.log(stringLength)

// convert to uppercase

let fullName:string="shahbaz ramzan"
let uppercase:string=fullName.toUpperCase()
console.log(uppercase)

// convert to lowercase

let lowercase:string=uppercase.toLowerCase()
console.log(lowercase)

// bolean 

let isMyNameShahbaz:Boolean=true;
let isDone:Boolean=false;
let hasStarted:Boolean=false;

// function check even or odd numbers

function getBoolean(num:number):boolean{
    if(num%2===0){
        return true
    }
    else{
        return false
    }
}
const result:boolean=getBoolean(5)

console.log("result: " + result)