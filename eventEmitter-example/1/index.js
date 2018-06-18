const events=require('events');

class active extends  events{
    doSomething(){
        console.log('321')
    };
    static myMethods(){
        console.log(999)
    }
};

let lx=new active();
lx.on('start',()=>{
   console.log('123')
});

lx.emit('start')

active.on('ss',active.myMethods)
