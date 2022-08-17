const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
      


    let input = result.input;
    let n = input.split(',');
    let a = parseInt(n[0]); //5
    let b = parseInt(n[1]); //6
    let c = parseInt(n[2]); //7
    if (a + b > c && a + c > b && b + c > a) {
        console.log('YES');
    } else { console.log('NO'); }
});
