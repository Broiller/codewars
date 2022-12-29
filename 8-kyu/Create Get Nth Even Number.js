/*
Вернуть N-е четное число
Пример ( ввод --> вывод )
1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
Ввод не будет 0.
*/

function nthEven(n){
  console.log(n)
return n == 1 ? 0 : n * 2 - 2
}
