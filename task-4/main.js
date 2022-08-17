const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let input = result.input;
    let n = input.split('');
    let a = parseInt(n[0]); //2
    let b = parseInt(n[1]); //3
    let c = parseInt(n[2]); //2
   
   let d = parseInt(n[3]);  //2

   if (a==b && a==c && a!==d || b==c && b==d && b!==a || c==a && c==d && c!==b || d==a && d==b && d==a && d!==c) {
    console.log('YES');
   }else {console.log('NO');}
});
