const  User={
    name:"shahbaz",
    email:"shahbz@gmain.com",
    isActive:false
}

function createUser({name:String,isActive:boolean}):void{
// console.log(name)
// console.log(isActive)

}

let newuser={name:"shahbaz",isActive:false}

createUser(newuser)

//function return object

function createCourse():{name:String,price:number}{
   return {name:"shahbaz",price:299}
}




export{}