// 出现原因:工厂模式无法判断对象的类型

/**
 *  对比工厂模式:
 *      1.没有显示创建对象
 *      2.使用this来为属性赋值
 *      3.没有return语句
 * 
 *  构造函数使用了 new 操作符,使用new操作符的过程为
 *      1.创建一个对象
 *      2.将构造函数的作用域赋值给新对象
 *      3.执行构造函数中的代码 
 *      4.返回新对象
 * 
 *  因此 alert(person1.constructor() === Person) //true
 *      alert(person2.constructor() === Person) //true
 *      alert(person1 instanceof Person) //true
 *      alert(person1 instanceof Object) //true
 * 
 *  使用构造函数的缺点:
 *      alert(person1.sayName === person2.sayName) //false
 *      每次在创建函数的时候,我们都创建了新的sayName,并将它赋值给对象。导致内存浪费
 */

function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        alert(this.name);
    }
}

var person1 = new Person('Nicolas', 29, 'Software Engineer');
/**
 * 与上面定义person1等价
 * var person1 = new Object()
 * Person.call(o, 'Nicolas', 29, 'Software Engineer')
 * 
 */
var person2 = new Person('Greg', 27, 'Doctor');



