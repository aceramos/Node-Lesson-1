var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);
var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var people = [james, mary, ryu];
people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: ' + mssg);
    });
});


james.emit('speak','hey dude.');
mary.emit('speak','she wants to be married.');
ryu.emit('speak','he wants to add `k` into his name.');




//var myEmitter = new events.EventEmitter();
//
//myEmitter.on('someEvent', function(mssg, from){
//    console.log(mssg + 'from: ' + from);
//});
//
//myEmitter.emit('someEvent', 'This is the message ', 'Ace');