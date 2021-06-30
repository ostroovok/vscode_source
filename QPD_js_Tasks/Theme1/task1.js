
let arr = [1,1,1,2,2,2,3,3,3,4,4,5,6]

arr = sortedUniq(arr)
console.log(arr)

function sortedUniq(array){
    let outList = [array[0]]
    for (let index = 1; index < array.length; index++) {
        if(array[index- 1] !== array[index]){
            outList.push(array[index])
        }
    }
    return outList;
}