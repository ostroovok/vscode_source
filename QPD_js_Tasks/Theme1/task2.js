console.log('Example: ' + _.isEqual( '11', '11' ))

console.log('Simple Test: ' + isEqual('11', '11'))

console.log('Objects tests: ')
console.log(isEqual(NaN, {foo: {obj1 : 'boo'}}))
console.log(isEqual({foo: {obj1 : 'boo'}}, {foo: {obj1 : 'boo'}}))
console.log(isEqual({foo: {obj1 : 'to'}}, {foo: {obj1 : 'boo'}}))


function isEqual(value, other){
    
    if(valueIsNaN(value) && valueIsNaN(other)){
        return true;
    }
    else if(valueIsNaN(value) || valueIsNaN(other)){
        return false;
    }

    if(typeof value == 'object' && typeof other == 'object'){
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
    else if(value !== other){
        return false;
    }

    return true;
}


function valueIsNaN(value){
    return value != value;
}