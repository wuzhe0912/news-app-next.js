// 傳統 JS 流程
// let a // 宣告變數
// a = 10 // 給定初始資料
// console.log(a) // 使用變數

// ----

// 一般而言，任何程式都會要求，必須先宣告變數，才能正確執行程式
// 但是 JS 本身具有宣告提升的特性
// a = 10
// console.log(a)
// let a
// 如上，即使 Code 順序不正確，JS 在檢視 Code時，會自動將 let a 提升至最前面，然後才執行，促使 Code 可以正常執行

// ----

// Hoisting 本身的特性，在於提升宣告，但不會影響賦值
// console.log(a)
// let a = 10
// 如上，JS 引擎在檢視時，會自動將let a 提升，但賦值的 10 不會被提升，所以實際運作的 Code 如下
// let a
// console.log(a)
// a = 10
// 因此自然會拿到 undefined

// ----

// 函數在一般程式，如前所述，必須先宣告，才能運作
// function test () {
//   console.log('Hello')
// }
// test()
// 但 JS 在此處，依然具有 Hoisting(宣告提升)的特性
// test()
// function test () {
//   console.log('Hello')
// }
// 但如果採用，宣告變數為函數的寫法時，則會出現 error
// test()
// let a = function test () {
//   console.log('Hello')
// }
// 此時，因為只有 let a 被提升，test 會被認定為 is not defined
// 實際運作的 Code 如下
// let a
// test()
// function test () {
//   console.log('Hello')
// }