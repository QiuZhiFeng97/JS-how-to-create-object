// 没有公共属性,其方法不引用this. 即创建私有变量
// 稳妥构造函数模式提供了安全性
function Person(name, age, job){
    var o = new Object();

    //注意,与工厂模式对比,所有变量都没有数值给o的属性
    o.sayName = function(){
        alert(name);
    };
    return o;
}

var friend = Person('Nicolas', 29, 'Software Engineer');
friend.sayName(); // Nicolas