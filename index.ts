import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enter first number", type: Number, name: "firstNumber" },
  { message: "Enter second number", type: Number, name: "secondNumber" },
  {
    message: "select one of the operators to performs operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Mulplication", "Divison"],
  },
]);

if (asnwer.operator === "Addition"){
  console.log(asnwer.firstNumber + asnwer.secondNumber);
}
else if(asnwer.operator === "Subtraction" ){
    console.log(asnwer.firstNumber - asnwer.secondNumber);
    
}
else if(asnwer.operator === "Mulplication" ){
  console.log(asnwer.firstNumber * asnwer.secondNumber);
  
}
else if (asnwer.operator === "Divison"){
  console.log(asnwer.firstNumber / asnwer.secondNumber);
  
}
else {
  console.log('Please select valid operator');
  
}


