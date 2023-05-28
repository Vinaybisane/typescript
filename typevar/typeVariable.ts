const vartype=()=>{

    //primitive type
    const string1:string='string1';
    const num:number=2;
    const booleantype:boolean=false;
    const nulltype:null=null;
    const undefinetype: undefined=undefined;

    //complex type

    const emptyarr: []=[];
    const arr1:string[]=['vinay'];
    const numarr:number[]=[1,2,3];
    const strAndNum:(string | number)[]=[1,'vinay',2.,'achal']

    type sub='sub';
    type add='add';
    type mul='mul';
    type div='div';

    const customarr:(sub | add | mul | div)[]=['sub','mul','add','div'];

    //object

    let objuser:{
        name:string,
        age:number,
        city?:string,
        mob:number| undefined,
        statusofadd:sub|add|mul|div
    }={

        name:'arc',
        age:22,
        mob:undefined,
        statusofadd:'add'
        
    };
}
vartype();