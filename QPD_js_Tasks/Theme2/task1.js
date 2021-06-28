function Calculator(startValue){

    this.value = startValue
    let arr = [[],[],[],[]]

    if(!new.target){
        throw new Error('Функция-конструктор \'Calculator\' не может быть вызвана без \'new\'')
    }

    this.plus = function (value){
        arr[2].push(function(){
            return this.value + value;
        });
        return this;
    }

    this.multiply = function (value){
        arr[0].push(function(){
            return this.value * value;
        });
        return this;
    }

    this.minus = function (value){
        arr[3].push(function(){
            return this.value - value;
        });
        return this;
    }

    this.divide = function (value){
        arr[1].push(function(){
            return this.value / value;
        });
        return this;
    }

    this.calculate = function(){

        for (let index = 0; index < arr.length; index++) {
            for (let j = 0; j < arr[index].length; j++) {
                if(arr[index].length > 0){
                    this.value = arr[index][j].call(this);
                }
                
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

// Собственный пример
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

// Тест проверки на использование 'new'
let ee = Calculator(3);