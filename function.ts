
// function for add number  
function addTwo(num:number):number{
return num+2
// return "shahbaz"
}
console.log(addTwo(5))


export{}


// uppercase

function upperCase(value){
    return value.toUpperCase()

}

let result= upperCase("shahbaz")

console.log(result)

// signup

function signUpUser(name:String,email:string,isPaid:boolean){

}

signUpUser("shahbaz","shahbaz@gmail.com",false)

// loggedin

function logedInUser(name:String,email:String,isLoggedIn:Boolean=false){

}

logedInUser("shahbaz","shahbaz@gmail.com")


// function returnValue(myVal:number):boolean{
//    if(myVal>5){
//     return true
//    }
//    return "200 ok"
// }


// getValue

const getHello=(s:string):string =>{
   return s
}

let r= getHello("Hello")
console.log(r)

const heros=["thor","spiderman","ironman"]


heros.map((hero):string=>{
    return `hero is ${hero}`
})


