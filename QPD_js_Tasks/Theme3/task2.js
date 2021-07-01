
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
    },
    mrr(){
        console.log('mrrr...')
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
    BigBoy.prototype.threaten = function(){
        console.log('i\'ll hit YOU meow');
    }

    return BigBoy;
})(Cat);

function extend(o1, o2){
    o1.prototype = Object.create(o2.prototype);
    return o1;
}


const barsik = new Cat("Barsik");
const bigB = new BigBoy('BARSIK')

bigB.showVoice()
bigB.meow()
bigB.threaten();
bigB.mrr();

barsik.meow();
barsik.mrr();