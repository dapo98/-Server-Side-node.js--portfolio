Vue.directive("swipeleft", {
 bind: function (el, binding) {
     if (typeof binding.value === "function") {
   const mc = new Hammer(el);
   mc.get("swipe").set({ direction: Hammer.DIRECTION_LEFT });
   mc.on("swipe", binding.value);
    }
  } });
 Vue.directive("swiperight", {
    bind: function (el, binding) {
                if (typeof binding.value === "function") {
                  const mc = new Hammer(el);
                  mc.get("swipe").set({ direction: Hammer.DIRECTION_RIGHT });
 mc.on("swipe", binding.value);
                }
              } });

      
  var app = new Vue(
                {
  el: '#myApp', 
  data: {
  message1:"My Portfolio",
  message2:"Check it out!",
  people:null
  
   },
  methods: { 
  onSwipeLeft(e) {
  console.log('left');
  $('.holder ul').css('left','+=300px');
                        },
  onSwipeRight(e) {
  console.log('right');
  $('.holder ul').css('left','-=300px');
                        }
                    }
                }
            );
  console.log(app);
        
  $.getJSON('data.json', function(jsonFromJquery) {
                    
                    app.people = jsonFromJquery;
                }
            );