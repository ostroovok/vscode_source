
let arr = [
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('done1'), 500);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('done2'), 100);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('done3'), 800);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('done4'), 1000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('done5'), 250);
    }),
    // new Promise((resolve, reject) => {
    //     setTimeout(() => reject('errrrrrrr'), 1200);
    // }),
];



function PromiseAll(args){
    
    return new Promise((resolve, reject) => {
        let counter = 0;
        let fullFilled = [];

        for (let index = 0; index < args.length; index++) {
            Promise.resolve(args[index]).then((result) => {
                
                fullFilled.push(result);
                counter++;

                if(counter == args.length){
                    resolve(fullFilled);
                }

            }).catch((error) => reject(error));
        }
    });
}

function PromiseRace(args){
    return new Promise((resolve, reject) => {
        for (let index = 0; index < args.length; index++) {
            Promise.resolve(args[index]).then((result) => {
                resolve(result);
            }).catch((error) => reject(error));
        }
    });
}


let resJSAll = Promise.all(arr);

let resJSRace = Promise.race(arr);

let resMyAll = PromiseAll(arr);

let resMyRace = PromiseRace(arr);

console.group('Task #2')
console.log('done2 - faster')

console.group('JS')
console.log(resJSAll);
console.log(resJSRace);
console.groupEnd();
console.group('My')
console.log(resMyAll);
console.log(resMyRace);
console.groupEnd();

console.groupEnd();
