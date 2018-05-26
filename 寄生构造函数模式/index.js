// 比如可以在不修改数组原型的情况下,创建数组子类型,拥有数组全部属性和方法同时添加自己的属性和方法

// 实在看不出和工厂模式有什么区别。。。

function SpecialArray(){
    var values = new Array();
    values.push.apply(values,arguments);
    values.toPipedString = function(){
        return this.join('|');
    };
    return values;
}

var colors = new SpecialArray('red', 'blue', 'green');
alert(colos.toPipedString()); // red|blue|green
