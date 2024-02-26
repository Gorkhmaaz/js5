/////Task 27
for (let i = 1; i <= 5; i++) {
    let square = i * i
    console.log('square', square)
}

/////Task 28
let i = 1
while(i <= 100){
    if(i % 5 === 0){
        console.log('i % 5', i)
    }
    i = i + 1
}

/////Task 29
let output = '';
for (let i = 1; i <= 10; i++) {
  output = output + '3 x ' + i + ' = ' + 3 * i + '\n';
}
console.log('table multiply', output);

/////Task 30
let number = 1
while(number <= 50){
    if(number % 3 === 0 && number % 5 === 0){
        console.log(number)
    }
    number = number + 1
}

///Task 31
let x = 0;
for (let i = 1; i <= 15; i += 2) {
    x = x + i;
}
console.log('x', x);

////Task 32
let sum = 0
for (let i = 1; i <= 100; i = i + 1){
    if(i % 3 === 0 && i % 5 === 0){
        sum = sum + i
    }
}
console.log('sum', sum)

////Task 33
for (let i = 1; i <= 100; i = i + 1){
    if(i % 7 === 0 && i % 5 !== 0){
        console.log('task 7', i)
    }
}

////Task 34
let y = 123456789;
let summary = 0;

while (number > 0) {
  summary += number % 10;
  number = number / 10
}

////Task 37
let first = 0;
let second = 1;
let end = second;

for (let i = 1; i < 10; i++) {
  let Fib = first + second;
  first = second;
  second = Fib;
  end += second;
}
console.log('fibonachi', end); 

///Task 38
let factorial = 1
for(i = 1; i <= 10; i = i + 1){
    factorial *= i
}
console.log('factorial',factorial)
////Task 39
let summ = 0 
for(let i = 0 ; i <= 10; i = i + 1 ){
    summ = summ + (i*i) 
}
console.log(summ)

////Task 40
let res = 0;
for (let i = 1; i <= 100; i += 2) {
  res += i;
  res -= i + 1;
}
console.log(res); 







///Task 41

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + " * " + j + " = " + i * j);
  }
}









