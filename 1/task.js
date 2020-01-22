//Задача 1 Напишите функцию, которая принимает массив цен товаров и остаток денег на вашей карте. Функция должна вернуть максимальное количество товаров,
//которые вы сможете купить на все деньги.
function maxProduct(arr, money) {
     arr=arr.sort();
     let backet = 0
     let count = 0
     arr.forEach(element => {
         if (backet + element <= money) {
         }
     });
 for (let i = 0; i < arr.length; i++) {
 if (backet + arr[i] <= money) {
 backet = backet + arr[i]
 count++;
 }
 }
     console.log("quantity of goods -" + count)
     return backet
 }
 maxProduct([1, 2], 7)
 maxProduct([1, 2, 10, 1], 2)
 maxProduct([1, 2, 3, 4], 7)