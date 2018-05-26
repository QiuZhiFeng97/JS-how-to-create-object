// 构造函数和原型分别独立,动态原型模式把所有信息封装进构造函数中

function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;

    if(typeof this.sayName !== 'function'){
        Person.prototype.sayName = function(){
            alert(this.name);
        };
    }
}

var friend = new Person('Nicolas', 29, 'Software Engineer');
friend.sayName();