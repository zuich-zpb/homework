//Задача 4 Напишите сокращатель диапазонов чисел
//в отсортированном массиве уникальных значений.
function short(numbers) {
  arrOfuniqStream = []
  stream = []
  startValue = numbers[0]
  numbers.forEach(element => {
      if (element == startValue) {
          stream.push(element)
          startValue++
      } else {
          arrOfuniqStream.push(stream)
          startValue = element
          stream = [element]
          arrOfuniqStream.push(stream)
      }
  });
  arrOfuniqStream.forEach(element => {
      console.log(element[0] + "-" + element[element.length - 1])
  });
}
short([1,2,3,4,5,6]);
short([1,2,3,5,6,8]);
short([-3,-2,-1,1,2,3]);

