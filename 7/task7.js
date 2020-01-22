//Задача 7
//Напишите функцию, которая вернёт n-ное самое большое число.


function largestN(maxy,n) {
let sorted = [...maxy].sort((a,b) => b - a)
console.log(sorted)

Math.max.apply(sorted)
console.log(Math.max.apply(n, sorted))
}

largestN([2, 4, 1, 5, 3], 1) // 5
largestN([2, 4, 1, 5, 3], 2) // 4
largestN([1, 8, 3, 2], 4) // 1