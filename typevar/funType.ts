const fun1=(a:string,b:string)=>{

    const aa:string=a.trim();
    const bb:string=b.trim().toUpperCase();

    const newvalue:string=aa+bb;

    return newvalue;

}

const valueReturn:string=fun1('vinay','achal');
console.log("returnValue" ,valueReturn);

const addnewuser=(newuser)=>{

    const id:number=Math.random();
    const newdate:any=new Date();

    return{
        name:newuser.name,
        email:newuser.email,
        id:id,
        date:newdate
    }
};

const onj1:{
    name:string,
    email:any,
}={
    name:'vinay',
    email:'vin2GMAIL.COM'

}
const returnuser=addnewuser(onj1);
console.log("returnuser",returnuser);