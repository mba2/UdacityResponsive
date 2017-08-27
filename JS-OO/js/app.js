function CatClicker(id) {
    var clickCounter = 0;
    var name = ""; 
    var DOMContainer = document.querySelector("#"+id);

    setName = function(catName) {
        name = catName;
    }

    setClickBehavior = function() {
        console.log("Setting cat's click beahvior");
        var _this = this;
        var counterDisplay = document.querySelector("#js_counter");
        var catImage = document.querySelector("#js_kitty");
            catImage.addEventListener("click", function() {
                _this.clickCounter++;
                counterDisplay.innerHTML = _this.clickCounter;
            }, false);
    };

};

window.onload = function() {
    console.log("Starting 'Cat Clicker' project...");
    var kitty_1 = new CatClicker("kitty--1");
        // kitty_1.setName("Kitty One");
        console.log(kitty_1);
        
        // var kitty_2 = new CatClicker("kitty--2");
        // kitty_2.setName("Kitty Two");
        // console.log(kitty_2);
};