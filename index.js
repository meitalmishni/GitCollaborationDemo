function sum(arrayOfNumbers) {
    let sum = 0;
    console.log('Calculating sum...');
    arrayOfNumbers.forEach((number) => sum += number);
    console.log('Sum calculated');
}

const arraySum = sum([1, 2, 3, 4,5,6,7,8,9,10]);
console.log(arraySum);