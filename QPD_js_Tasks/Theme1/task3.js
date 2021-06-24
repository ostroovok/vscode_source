console.log(difference([2,3,4,5,6,7,8,9,1], [1,3,5,7,9]))
console.log(difference([2,3,4,5,6,7,8,9,1], [1,'3',5,'7',9]))


function difference(array, values){
    let outList = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(!values.includes(element)){
            outList.push(element)
        }
    }
    return outList;
}