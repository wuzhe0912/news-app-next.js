### practice
// 這是 Animal 類別，請不要更動
class Animal{
    constructor(name){
        this.name=name;
    }
    sleep(){
        console.log(this.name+"睡覺");
    }
}
/* 
練習一：
    定義一個 Cat 子類別，繼承 Animal 類別。
    並滿足下方程式碼的操作需求
*/
class Cat extends Animal {
    constructor (val) {
        super(val);
    }
    speak (val) {
        console.log(val + "!" + val + "!")
    }
}

// 以下 Cat 子類別的操作
let cat=new Cat("小花");
cat.sleep(); // 印出："小花睡覺"
cat.speak("喵"); // 印出："喵!喵!"

/*
練習二：
    定義一個 Dog 子類別，繼承 Animal 類別。
    並滿足下方程式碼的操作需求
*/
class Dog extends Animal{
    // 請在這裡完成 Dog 子類別的定義
    constructor (val) {
        super(val);
    }
    sleep (val) {
        this.time = val
        console.log(this.name + "睡了" + this.time + "小時")
    }
}
// 以下 Dog 子類別的操作
let dog=new Dog("小黑");
dog.sleep(3); // 印出："小黑睡了3小時"