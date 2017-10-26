
// var cats = $(".cat");
// var buttons = $("button");

// function hideAllCats(){
// 	for (var i=0; i<cats.length; i++){
// 		$(cats[i]).hide();
// 	}
// }

// function bindButtonToCat(idNumber){
// 	$("#button"+idNumber).click(function(){
// 		hideAllCats();
// 		$("#cat"+idNumber).show();
// 	})
// }

// function bindCounterToCat(idNumber){
// 	var cat = "#cat"+idNumber
// 	$(cat).click(function(){
// 		var count = $(cat+" > .counter").text();
// 		count = parseInt(count) + 1;
// 		$(cat+" > .counter").text(count);
// 	})
// }

// for (var i=1; i<=buttons.length; i++){
// 	bindButtonToCat(i);
// }

// for (var i=1; i<=cats.length; i++){
// 	bindCounterToCat(i);
// }

// hideAllCats();
// $("#cat1").show();

// $(function(){

// 	var model = {
// 		activeCat : {},
// 		catInfo : [
// 			{ 
// 				id 		: 1,
// 				name	: 'Marcos',
// 				image	: 'Marcos_img',
// 				counter	: 0,
// 			},
// 			{ 
// 				id 		: 2,
// 				name	: 'Rivaldo',
// 				image	: 'Rivaldo_img',
// 				counter	: 0,
// 			},
// 			{ 
// 				id 		: 3,
// 				name	: 'Ronaldo',
// 				image	: 'Ronaldo_img',
// 				counter	: 0,
// 			},
// 			{ 
// 				id 		: 4,
// 				name	: 'Roberto Carlos',
// 				image 	: 'Roberto _img',
// 				counter	: 0,
// 			},
// 			{ 
// 				id 		: 5,
// 				name	: 'Ronaldinho',
// 				image	: 'Ronaldinho_img',
// 				counter	: 0,
// 			},
// 		],
// 		init : function() {
// 			this.activeCat = this.catInfo[0];
// 		}
// 	};

// 	var controller = {
// 		selectCat : function() {
// 			view.$listContainer.on('click','.btn-show-cat',function() {
// 				var _this = this;
// 				model.catInfo.forEach(function(cat,i) {
// 					if( $(_this).attr('cat-id') == cat.id ) model.activeCat = cat;	
// 				})
// 				view.render();			
// 			});
// 		},

// 		updateCatCounter : function() {
// 			$('body').on('click','.cat-img',function() {
// 				var target = model.activeCat.id;

// 				model.catInfo.forEach(function(cat,i) {
// 					if( target == cat.id ) { cat.counter++; }
// 				});

// 				view.render();			
// 			});
// 		},

// 		init : function() {
// 			model.init();
// 			view.init();

// 			this.selectCat();
// 			this.updateCatCounter();
// 		}
// 	};
	
// 	var view = {
// 		mountNavigation : function () {
// 			// console.log('this.mountNavigation()');
// 			var allCats 		= model.catInfo,
// 				$listContainer 	= $('.cat-list > nav');
// 				markup 			= '';

// 			$listContainer.empty();
// 			allCats.forEach( function(currentCat) {
// 				$listContainer.append(
// 					'<button cat-id="'+ currentCat.id  + '" class="btn btn-show-cat">' + currentCat.name + '</button>'
// 				)  
// 			});

// 			view.$listContainer = $listContainer;
// 		},

// 		displayCat : function() {
// 			// console.log('this.displayCat()');
// 			var $displayArea = $('.cat-view-area');
// 				   activeCat = model.activeCat;
			
// 			$displayArea.empty();
			
// 			markup = "<div>" + activeCat.name + "</div>" +
// 					"<div class='cat-img'>" + activeCat.image + "</div>" +
// 					"<div>" + activeCat.counter + "</div>";
			
// 			$displayArea.append(markup);

// 			view.$displayArea = $displayArea;
// 		},

// 		render : function() {
// 			this.mountNavigation();
// 			this.displayCat();
// 		},
		
// 		init : function() {
// 			this.mountNavigation();
// 			this.displayCat();

// 		}
// 	};


// 	controller.init();

// });



var model = {
	activeCat : {},
	catInfo : [
		{ 
			id 		: 1,
			name	: 'Marcos',
			image	: 'Marcos_img',
			counter	: 0,
		},
		{ 
			id 		: 2,
			name	: 'Rivaldo',
			image	: 'Rivaldo_img',
			counter	: 0,
		},
		{ 
			id 		: 3,
			name	: 'Ronaldo',
			image	: 'Ronaldo_img',
			counter	: 0,
		},
		{ 
			id 		: 4,
			name	: 'Roberto Carlos',
			image 	: 'Roberto _img',
			counter	: 0,
		},
		{ 
			id 		: 5,
			name	: 'Ronaldinho',
			image	: 'Ronaldinho_img',
			counter	: 0,
		},
	],

	init : function() {
		// INITIAL ACTIONS PERFORMED ON THIS MODEL
		this.activeCat = this.catInfo[0];
	}
};

// CONTROLLER
var controller = {
	
	getAllCats : function() {
		return model.catInfo;
	},

	getActiveCat : function() {
		return model.activeCat;
	}, 

	setCounterClick : function() {
		view_Display.catImage.addEventListener("click", function() {
			model.activeCat.counter++;
			view_Display.render();
		});
	},

	setCurrentCat : function(cat) {
		model.activeCat = cat;
	},

	onCatClick : function() {
		// ON CLICK, THIS BUTTON WILL SET THE CAT IT REPRESENTS
		// AS THE CURRENT CAT...
		view_List.buttons.forEach(function(btn) {
			btn.addEventListener("click", function() {
				controller.setCurrentCat(btn.objRef);
				view_Display.render();
			});
		})
	},

	init : function() {
		console.log("starting cat clicker");

		// INITIALIZES THE MODEL 
		model.init();
		
		// INITIALIZES ALL VIEWS 
		view_List.init();		// START THE VIEW LIST
		view_Display.init();	// START THE DISPLAY LIST

		// INITIALIZES CONTROLLER`S METHODS 
		this.setCounterClick();
		this.setCurrentCat();
		this.onCatClick();
	}
}

var view_Display = {
	
	// VIEW ELEMENTS
	cacheElements : function() {
		this.catImage		= document.querySelector('.cat-image'),	
		this.catCounter		= document.querySelector('.cat-counter'),	
		this.catName 		= document.querySelector('.cat-name');	
	},
	
	//	VIEW PROPERTIES
	status : {
		intitialized : false,
	},
	
	//	VIEW METHODS
	mountCatDisplay : function() {
		console.log("mount");
		var activeCat = controller.getActiveCat();
		// CAT`S NAME
		var el_catName = document.createElement('div');
		el_catName.classList.add('cat-name');
		el_catName.textContent = activeCat.name;
		// CAT`S IMAGE
		var el_catImage = document.createElement('div');
		el_catImage.classList.add('cat-image');
		el_catImage.textContent = activeCat.image;
		// CAT`S COUNTER
		var el_catCounter = document.createElement('div');
		el_catCounter.classList.add('cat-counter');
		el_catCounter.textContent = activeCat.counter;
		
		// INSERT ALL NODES
		this.catDisplay = document.querySelector('.cat-view-area'),
		this.catDisplay.appendChild(el_catName);
		this.catDisplay.appendChild(el_catImage);
		this.catDisplay.appendChild(el_catCounter);
		
		// SET THIS VIEW AS INITIALIZED
		this.status.intitialized = true;
	},
	
	updateCatDisplay : function() {
		var activeCat = controller.getActiveCat();

		this.catName.textContent = activeCat.name;
		this.catImage.textContent = activeCat.image;
		this.catCounter.textContent = activeCat.counter;
	},
	
	render : function() {
		// IF THE VIEW IS NOT INITIALIZED ... MOUNT THE DISPLAY...
		// IF IT IS JUST UPDATE THE DISPLAY 
		(!this.status.intitialized) ? this.mountCatDisplay() : this.updateCatDisplay();
	},

	init : function() {
		this.render(); 			// RENDERS THIS VIEW FOR THE FIRST TIME
		this.cacheElements();
	},
};

var view_List = {
	// VIEW ELEMENTS
	catList : document.querySelector('.cat-list'),
	buttons : [],
	
	init : function() {
		
		//	VIEW METHODS CALLED ONCE, ON THE INITIALIZATION
		
		// FIRST RENDERIZATION
		this.render(); 			
	},
	
	//	VIEW METHODS
	mountCatList : function() {
		var _this = this,		
		allCats = controller.getAllCats();	// STORE ALL CATS 
		
		allCats.forEach( function(cat,index) {	// ITERATES OVER ALL CATS
			// CREATES A BUTTON ELEMENT
			var btn = document.createElement("button");
			btn.setAttribute('data-id',cat.id);
			btn.objRef = cat;
			btn.classList.add("btn-select")
			btn.textContent = cat.name;
			// CREATES A BUTTON ELEMENT
			_this.catList.appendChild(btn);
			// STORE THIS BUTTON INTO THE VIEW 
			_this.buttons.push(btn);
		});
	},
	
	render : function() {
		this.mountCatList(); 	

	}
}

window.addEventListener("DOMContentLoaded", function() {
	controller.init();
});



