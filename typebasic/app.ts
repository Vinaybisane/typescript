console.log("this is ts file")

const fun=()=>{

    const a:number=2;

    const b:number=4;

    const add:number=a+b;

    console.log("addition=", add);

    return add;
}

const addreturn:number= fun();

const sub=(a:number,b:number)=>a-b
const subreturn=sub(4,1);
console.log("sub",subreturn);

const mul=()=>{

    const a:number=2;
    const b:string='3';

    const c= parseInt(b);

    const mul:number=a*c;
    console.log('mul', mul);

}
mul();

const div=(a:string, b:string)=>{

    const c= parseInt(a);
    const d= parseInt(b);

    const divi:number=c/d;

    console.log("div=", divi);
}
div('10','2');