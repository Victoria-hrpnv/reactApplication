// Напишите, пожалуйста, на JavaScript функцию, которая будет выводить в
// консоль числа от 0 до 1000, кратные трём и не кратные пяти, сумма цифр в которых меньше десяти.

function filterNumbers() {
   for (let i = 1; i<=1000; i++){
       let iArr = i.toString().split('');
       let sum = iArr.reduce((acc, item)=>{
            return acc + Number(item)
       }, 0)

       if (i % 3 === 0 && i % 5 !== 0 && sum < 10){
        console.log(i);
       }

   }
}

// filterNumbers();

function Increment(value=0) {
    let number = value;
    this.toString = function () { return ++number; };
}

let increment = new Increment()
alert(increment)
alert(increment)
alert(increment + increment)

class Increment {

    constructor(value=0) {
        this.value = value;
    }

    toString() {
        return ++this.value;
    }
}

let increment = new Increment()
alert(increment)
alert(increment)
alert(increment + increment)