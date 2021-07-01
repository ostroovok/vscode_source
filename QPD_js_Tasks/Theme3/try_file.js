'use strict'

function Foo(x, y){
    this.x = x
    this.y = y;

    this.sayHi = function(){
        console.log('Hi!')
    }

    this.count = function(){
        return this.x + this.y
    }
}

function OtherObj(x, y, z){
    Foo.call(this, x, y);
    this.z = z;

    const countXY = this.count;

    this.count = function(){
        let result = countXY.call(this);
        return result + z;
    }
}



OtherObj.prototype = Object.create(Foo.prototype)

let obj1 = new OtherObj(1,2,5)

console.log()
obj1.sayHi()
console.log(obj1.count())