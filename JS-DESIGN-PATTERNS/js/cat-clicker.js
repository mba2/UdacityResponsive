function Cat(catName,catPicture) {
    this.name = catName || "kitty";
    this.sourceImg = catPicture || "./img/kitty.jpg";
    this.counter = 0;
};

Cat.prototype = {
    domContainer : function() {
            var div = document.createElement("div");
                div.classList.add("kitty");
                div.setAttribute("id",this.name);
            return div;
    },
    domPicture : function() {
        var picture =  document.createElement("picture");
        var img = document.createElement("img");
            
        img.setAttribute("src", this.sourceImg);
        picture.appendChild(img);

        return picture;
    }, 
    domCounter : function() {
        var wrapper =  document.createElement("div");
        var counter =  document.createElement("p");
            counter.classList.add("kitty__counter");
            counter.textContent = this.counter;
            wrapper.appendChild(counter);
        return wrapper;
    },
    domName : function() {
        var p = document.createElement("p");
            p.setAttribute("class","kitty__name");
            p.textContent = this.name;
        return p;
    },

    clickBehavior : function() {

    },
    mount : function() {
        var ct = this.domContainer();
            ct.appendChild(this.domName());
            ct.appendChild(this.domPicture());
            ct.appendChild(this.domCounter());

        document.querySelector("body").appendChild(ct);
    },
};

window.onload = function() {
    console.log("Starting 'Cat Clicker' project...");
 
    var cat1 =  new Cat("Kitty 1");
        cat1.mount();
        
    var cat2 =  new Cat("Kitty 2","./img/kitty_2.jpg");
        cat2.mount();
    
};  