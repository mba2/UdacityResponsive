var CatClicker = {
    clickCounter : 0,

    setClickBehavior : function() {
        var _this = this;
        var counterDisplay = document.querySelector("#js_counter");
        var catImage = document.querySelector("#js_kitty");
            catImage.addEventListener("click", function() {
                _this.clickCounter++;
                counterDisplay.innerHTML = _this.clickCounter;
            }, false);
    },
    
    init : function() {
        this.setClickBehavior();
    }
};

window.onload = function() {
    console.log("Starting 'Cat Clicker' project...");
    CatClicker.init();
};