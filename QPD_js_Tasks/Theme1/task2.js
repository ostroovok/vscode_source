console.log('Example: ' + _.isEqual( '11', '11' ))

console.log('Simple Test: ' + isEqual('11', '11'))

console.log('Objects tests: ')
console.log(isEqual(NaN, {foo: {obj1 : 'boo'}}))
console.log(isEqual({obj1 : 'boo'}, {obj1 : 'boo'}))
console.log(isEqual({foo: {obj1 : 'boo'}}, {foo: {obj1 : 'boo'}}))
console.log(isEqual({foo: {obj1 : 'to'}}, {foo: {obj1 : 'boo'}}))

console.log('Array tests: ')
console.log(isEqual([1,2,3],[1,2,3]))
console.log(isEqual(NaN,[1,2,3]))
console.log(isEqual({x:1},[1,2,3]))
console.log(isEqual([1,2,3],[1,2,3,4]))

function isEqual(value, other){
    
    if(checkOnNaN(value) && checkOnNaN(other)){
        return true;
    }
    else if(checkOnNaN(value) || checkOnNaN(other)){
        return false;
    }

    if(typeof value !== 'object' && typeof other !== 'object'){
        return value === other;
    }
    else if(Array.isArray(value) && Array.isArray(other)){
        if(value.length !== other.length){
            return false;
        }
        for (let index = 0; index < value.length; index++) {
            if(value[index] !== other[index]){
                return false;
            }
        }
        return true;
    }
    else{
        for(let prop in value){

            if(!value.hasOwnProperty(prop)){
                return false;
            }
            if(!other.hasOwnProperty(prop)){
                return false;
            }
            if(typeof value[prop] == 'object'){
                return isEqual(value[prop], other[prop])
            }
            
            if(value[prop] !== other[prop]){
                return false
            }
        }
    }
    return true;
}

function checkOnNaN(value){
    return typeof value === 'number' && isNaN(value);
}


        