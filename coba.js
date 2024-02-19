function addScore(score){
    let result;

if(score>=90){
    result='Selamat!Anda mendapatkan nilai A';
}
else if(score>=80 && score<=89){
    result='Anda mendapatkan nilai B';
}
else if(score>=70 && score<=79){
    result='Anda mendapatkan nilai C';
}
else if(score>=60 && score<=69){
    result='Anda mendapatkan nilai D';
}
else{
    result='Anda mendapatkan nilai E';
}
return result;
}

console.log(addScore(58));

const car={color:'red'}
console.log(car.color);
console.log(delete car.color);
console.log(car.color);

let a=5;
console.log(a+=3);
console.log(4>5?"hai":"hello");

for(let i=1;i<=11;i++){
    console.log("halo");
}

if ((true || false) && (false || false)) {
    console.log("It's true");
} else {
    console.log("It's false");
}

const stock = 0;
const milkNeeded = 25;

if (stock > milkNeeded) {
  stock = stock - milkNeeded;
  console.log('Processing your order...');
} else {
  console.log('Out of Stock!');
}

console.log('Thank you');

const name = 'Dicoding';
const language = 'JavaScript';

console.log(`Hello $name. Welcome to $language!`);