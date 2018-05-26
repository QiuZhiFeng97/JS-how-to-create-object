// 出现原因:构造函数模式无法满足需求

/**
 *  只要创建函数,函数就拥有prototype属性,该属性指向函数的原型对象
 *  默认情况下,原型对象默认拥有contructor属性,此属性指向prototype所在的函数
 * 
 *  当读取对象的某个属性时,首先从对象本身开始查找是否含有该属性,如果没有,就从原型中找,
 * 
 *  hasOwnProperty()判断对象是否拥有某属性,不会从原型链中查找
 *  in 操作符判断能否读取某属性,即会从对象实例中查找也会从对象原型中查找该属性
 *  
 *  通过配合 hasOwnProperty和 in操作符,就可以判断原型是否拥有该属性(没有该属性可能在实例中也有可能实例也没有)
 *  function prototypeHasOwnProperty(object, name){
 *      return !object.hasOwnproperty(name) && (name in object);
 *  }
 * 
 * 
 *  缺点:
 *      原型中所有属性都是共享的,引用类型也共享导致违背初衷
 */


function Person(){

}

Person.prototype = {
    constructor: Person, // 因为是重写 prototype,因此需要重新指定contructor,否则消失
    name: 'Nicolas',
    age: 29,
    job : 'SoftwareEngineer',
    friends: ['Shelby','Court'],
    sayName: function(){
        alert(this.name);
    }
}

var person1 = new Person();
var person2 = new Person();

person1.friends.push('Van');
alert(person2.friends); //['Shelby','Court','Van']
alert(person1.sayName === person2.sayName) //true
