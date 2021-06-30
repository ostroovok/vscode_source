function createClass(obj){
    return function(...properties){    
        obj.construct(...properties)
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                Object.defineProperty(this, key,
                {
                    value: obj[key],
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            }
        }
    }
}

const Cat = createClass({
    construct(name, age, voice){
        this.name = name;
        this.age = age;
        this.voice = voice;
    },
    meow(){
        console.log(`Meow i'm ${this.name} :3`);
    },
    sayHi(){
        console.log('Hi!')
    },
    showVoice(){
        if(confirm()){
            alert('BARITONE voice: '
            + 'meow :\`c')
        }
    },
    getProperties(){
        console.group('Properties')
        for (const key in this) {
            console.log(key)
        }
        console.groupEnd()
    }
});

const barsik = new Cat("Barsik", 20, 'BARITONE');
barsik.meow();
barsik.sayHi();
barsik.getProperties();
console.log(barsik.name)
console.log(barsik.age)
console.log(barsik.voice)

