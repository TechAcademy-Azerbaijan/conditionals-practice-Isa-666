const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n=result.input; //3456
    let a=parseInt(n/1000); //3
    let b=parseInt((n/100)%10); //4
   let c=parseInt((n/10)%10); //5
 let d=parseInt(n%10); //6

 if (a%2==0 && b%2==0 && c%2==0 && d%2==0) {console.log('YES');
    
 }else {console.log('NO');
    
}
  
});
