const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n=result.input; //2322
   let a=parseInt(n/1000); //2
   let b=parseInt((n/100)%10); //3
  let c=parseInt(n/10)%10; //2
let d=parseInt(n%10); //2

if (a+b>=c+d) {
  console.log('YES');
}else if (a+d<=c+b) {
  console.log('NO');
}
  
});
