// Задача 2 Найдите самую длинную, неразрывную последовательность уникальных символов в строке
function longest(str) {
  strArr = str.split("")
  uniqStream = new Set()
  arrOfuniqStream = []
  for (let i = 0; i < strArr.length; i++) {
      if (!uniqStream.has(strArr[i])) { // проверяем есть ли значение в сете
          uniqStream.add(strArr[i]) // добавляем значение
      } else {
          // console.log(uniqStream)
          arrOfuniqStream.push(uniqStream)
          uniqStream = new Set()
          uniqStream.add(strArr[i])
      }
  }
 arrOfuniqStream.sort((a, b) => {
     return b.size - a.size
})
//arrOfuniqStream[0].forEach((item) =>{
//     console.log(item)
//   })
console.log(Array.from(arrOfuniqStream[0]).join(''))
}
longest("abcabcbb")
longest("ababcd")
longest("bbb")
longest("bbbab")