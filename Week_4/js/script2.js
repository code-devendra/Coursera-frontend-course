(function(window) {

    var jhonGreeter = {};
    jhonGreeter.name = "Jhon";
    var greeting = "Hi ";
    jhonGreeter.sayHi = function (){
        console.log(greeting + jhonGreeter.name);
    }
    window.jhonGreeter = jhonGreeter;
    
})(window);