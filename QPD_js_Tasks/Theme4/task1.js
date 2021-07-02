function delay(ms, mes = 'done'){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(mes), ms);
    });
}

let promise = delay(100).then(console.log);

