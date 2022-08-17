const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
  let input=result.input.split(""); //1378
    
 for (let i = 0; i < input.length; i++) {
 if (parseInt(input[i])===3 && parseInt(input[i+1])===7) {
  console.log('YES');
 }else{console.log('NO');}

 }
  
});
