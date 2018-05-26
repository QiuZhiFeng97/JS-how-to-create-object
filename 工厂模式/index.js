// 出现的原因
// 使用构造函数或对象字面量方法会产生大量的重复代码

// 优点: 代码重复量大大减少
// 缺点: 无法知道对象的类型

function createPerson( name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        alert(this.name);
    }
    return o;
}

var person1 = createPerson('Nicolas',29,'Software Engineer');
var person2 = createPerson('Greg', 27, 'Doctor');

