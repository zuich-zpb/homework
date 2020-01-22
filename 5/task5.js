//Задача №6 Решение 1(Напишите функцию которая вернет пропущенное число)
function findMissingNumbers(number) {
	let min = Math.min(...number);
	let max = Math.max(...number);
	let all = Array.from(Array(max - min + 1), (e, i) => i + min)
return all.filter(e => !number.includes(e))
}
console.log(findMissingNumbers([0,1,3]));//2
console.log(findMissingNumbers([-2,0,1,2]));//-1
console.log(findMissingNumbers([1,3,2,-1])); //0

//Решение 2
function findMissingNumbers(number) {
  number=number.sort();
  let newNumber=[];
    newNumber.push(number[0])
    for (let i=1; i <= number.length ; i++ ) {
      newNumber.push(number[0]+i)
         }
       let missingNumber=newNumber.filter(missing=>!number.includes(missing))
     return missingNumber.join('')
      }
 console.log (findMissingNumbers([0,1,3]));
 console.log (findMissingNumbers([-2,0,1,2]));
 console.log (findMissingNumbers([1,3,2,-1]));