// 构造函数模式用于定义实例属性,原型模式用于定义方法和共享的属性

// 这是目前ECMAScript中使用最广泛，认同度最高的一种创建自定义类型的方法

function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ['Shelby','Court'];
}

Person.prototype = {
    constructor: Person,
    sayName: function(){
        alert(this.name);
    }
}

var person1 = new Person('Nicolas', 29, 'Software Engineer');
var person2 = new Person('Greg', 27, 'Doctor');

person1.friends.push('Van');
alert(person1.friends); //['Shelby','Court','Van']
alert(person2.friends); //['Shelby','Court']
alert(person1.sayName === person2.sayName); //true