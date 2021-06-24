
let arr = [1,1,2,3,4,5,5,5]

arr = sortedUniq(arr)
console.log(arr)

function sortedUniq(array){
    let outList = []
    for (let index = 0; index < array.length; index++) {
        if(array[index] !== array[index - 1]){
            outList.push(array[index])
        }
    }
    return outList;
}