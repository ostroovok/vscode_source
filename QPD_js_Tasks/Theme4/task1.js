function delay(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('done'), ms);
    });
}

let promise = delay(1000).then(console.log);

