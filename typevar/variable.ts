const checktypes=()=>{
     const  STATUSADD:'status-add'='status-add';

     type  statussub='status-sub';

     let status:'add'| 'sub'| 'mul'| 'div'| statussub='add';
     status='div';
     status="mul";
     status='status-sub';

     let string1='string1';

     console.log('status',status, typeof status)
     console.log('string1',string1, typeof string1)
}

checktypes();