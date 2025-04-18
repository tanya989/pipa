let Firstnumber = document.getElementById('Firstnumber');
let Secondnumber = document.getElementById('Secondnumber');
let button = document.querySelector('button');

button.addEventListener('click',
    function(){
        let num1 = parseFloat(Firstnumber.value);
        let num2 = parseFloat(Secondnumber.value);
        let sum = num1+num2;
        alert("Sum of numbers:    "+sum);
    }
)