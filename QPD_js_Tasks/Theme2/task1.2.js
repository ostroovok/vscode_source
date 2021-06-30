function Calculator(startValue){

    this.value = startValue

    let valuesArr = [startValue]
    let operationsArr = []

    if(!new.target){
        throw new Error('Функция-конструктор \'Calculator\' не может быть вызвана без \'new\'')
    }

    this.plus = function (value){
        valuesArr.push(value)
        operationsArr.push('+')
        return this;
    }

    this.multiply = function (value){
        valuesArr.push(value)
        operationsArr.push('*')
        return this;
    }

    this.minus = function (value){
        valuesArr.push(value)
        operationsArr.push('-')
        return this;
    }

    this.divide = function (value){
        valuesArr.push(value)
        operationsArr.push('/')
        return this;
    }

    this.calculate = function(){

        for (let index = 0; index < operationsArr.length; index++) {
            if(operationsArr[index] === '*'){
                valuesArr[index] *= valuesArr[index + 1]
                valuesArr.splice(index + 1, 1)
                operationsArr.splice(index, 1)
                index--;
            }
            if(operationsArr[index] === '/'){
                valuesArr[index] /= valuesArr[index + 1]
                valuesArr.splice(index + 1, 1)
                operationsArr.splice(index, 1)
                index--;
            }
        }
        
        for (let index = 0; index < operationsArr.length; index++) {
            if(operationsArr[index] === '+'){
                this.value += valuesArr[index + 1]
            }
            if(operationsArr[index] === '-'){
                this.value -= valuesArr[index + 1]
            }
        }
        return this.value;
    }
}

// Пример из задания
console.log(new Calculator(2)
                .plus(2)
                .multiply(2)
                .minus(1)
                .calculate());

//Собственный пример
console.log(new Calculator(2)
                .plus(2)
                .multiply(2)
                .minus(1)
                .divide(3)
                .plus(10)
                .calculate());

// Сочетание/повторение одной функции
console.log(new Calculator(2)
                .plus(2)
                .plus(10)
                .plus(11)
                .plus(12)
                .multiply(2)
                .multiply(6)
                .divide(10)
                .minus(1.67)
                .calculate());