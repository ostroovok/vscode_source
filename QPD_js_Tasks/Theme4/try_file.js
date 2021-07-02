function delay(ms, mes = 'done'){
    return new Promise((resolve, reject) => {
        if(Math.random() > 0.5){
            setTimeout(() => resolve(mes), ms)
        }
        else{
            setTimeout(() => reject(new Error('erorr message example')), ms)
        }
    }).then((result) => {
        console.log(result)
    }).catch(err => console.log(err))
}

let promise = delay(100)
    // .then(delay(300, 'dd'))
    // .then(delay(500, 'ddo'))
    // .then(delay(700, 'ddoo'))
    // .then(delay(900, 'ddoon'))
    // .then(delay(1100, 'ddoonn'))
    // .then(delay(1300, 'ddoonne'))
    // .then(delay(1500, 'ddoonnee'))
