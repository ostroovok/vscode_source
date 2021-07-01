
function createClass(obj){
    const constructor = obj.constructor
    constructor.prototype = obj
    return constructor
}

const Cat = createClass({
    constructor: function(name){
        this.name = name;
    },
    meow(){
        console.log(`Meow i'm ${this.name}`);
    }
});

const BigBoy = (function(parent){
    extend(BigBoy, parent);
    
    function BigBoy(...args){
        parent.call(this, ...args)
    }

    BigBoy.prototype.showVoice = function(){
        console.log('MEOW');
    }

    return BigBoy;
})(Cat);

function extend(o1, o2){

    function empty(){}

    empty.prototype = Object.create(o2.prototype);
    o1.prototype = new empty();

    return o1;
}


const barsik = new Cat("Barsik");
const bigB = new BigBoy('BARSIK')

bigB.showVoice()
bigB.meow()


barsik.meow();
