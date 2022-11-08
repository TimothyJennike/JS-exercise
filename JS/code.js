/*let userName ='Maxwill';
let surname = 'Isaacs';
let salary = 10000;*/

/*document.write(`<br>Name:${userName}`);
document.write(`<br>Age:${surname}`);
 let eval = (`<br>Salary:${salary}+${500}`)
document.write(`<br>Salary:R${eval}`)*/

let userName =prompt("Please enter your name");
let surname =prompt("Please enter your surname");
let salary =prompt("Please enter your salary");
document.write(`<br>Name: ${userName}`);
document.write(`<br>Surname: ${surname}`);
let product =eval(`${salary}+${500}`)
document.write(`<br>Salary: R${product}`)