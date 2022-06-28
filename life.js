//read numbers in the program
const number1 = parseFloat(prompt ("please input a number","e.g. 123"));
const number2 = parseFloat(prompt ("please input a number","e.g. 123"));
//read operator
const operator = prompt ('Enter operator (*, -, /, +)');
let result = 0;
if(isNaN(number1) || isNaN(number2)){
    alert ('wrong input! Refresh the page again and input a value!');
}else{
    if(operator == '+'){
        result = number1 + number2;
    }else if (operator == '-'){
        result = number1 - number2;
    }else if (operator == '*'){
        result = number1 * number2;
    }else if (operator == '/'){
        result = number1 / number2;
    }
    }
alert(result);


