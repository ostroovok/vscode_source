
let arr = [1,1,1,2,2,2,3,3,3,4,4,5,6]

arr = sortedUniq(arr)
console.log(arr)

function sortedUniq(array){
    let outList = []
    for (let index = 0; index < array.length - 1; index++) {
        if(array[index] !== array[index + 1]){
            outList.push(array[index])
        }
    }
    outList.push(array[array.length-1])
    return outList;
}