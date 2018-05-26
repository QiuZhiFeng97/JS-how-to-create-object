// 出现原因:使用构造函数模式创建对象,所有对象无法共享方法

/**
 *  对比index.js中的构造函数模式(优点):
 *      所有对象共享了同一个方法
 *  缺点:
 *      全局函数只能被对象调用,且封装性差
 */

function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}

function sayName(){
    alert(this.name);
}

var person1 = new Person('Nicolas', 29, 'Software Engineer');
var person2 = new Person('Greg', 27, 'Doctor');



