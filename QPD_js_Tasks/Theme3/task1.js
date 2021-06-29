arr = [1,2,3,4,5,6,7,8]

Array.prototype.random = function(){
    let index = _.random(this.length-1)
    return this[index];
}

Array.prototype.last = function(){
    return this[this.length-1];
}

Array.prototype.first = function(){
    return this[0];
}

console.log(arr.last())
console.log(arr.first())
console.log(arr.random())