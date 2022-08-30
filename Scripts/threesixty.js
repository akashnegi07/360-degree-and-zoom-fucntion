(function ($) {
    $(document).ready(function() {
  
    const containerdiv = document.querySelector(".field--name-field-360view")
    const listItems = containerdiv.querySelectorAll('img')
    console.log(listItems.length)
  
    const urlArray = [];
    for (let j = 0; j < listItems.length; j++) {
      urlArray.push(listItems[j].getAttribute('src') )
    }
  
    var num = listItems.length; // the total number of images
    // Control swipes using jquery.touchSwipe.min.js
    // http://labs.rampinteractive.co.uk/touchSwipe/
    var swipeOptions=
    {
        triggerOnTouchEnd : true,	
        swipeStatus : swipeStatus,
        allowPageScroll:"vertical",
        threshold:75			
    }
    
    $(function()
    {	
         $(".three-sixty-degree").click(function () {
      
          $('body').toggleClass("three-sixty-active")
          imgs = $(".three-sixty-active #slide-0-field_product_image-391"); // the element that will be swipeable
          imgs.swipe( swipeOptions );
  
      });
              
    });
    
    function swipeStatus(event, phase, direction, distance) {
        var duration = 0;
        if(direction == "left") {
          changeImg(distance);
        }
        else if (direction == "right") {
          changeImgR(-distance);
        }
    }
    
    function changeImg (imgNum) {
    
        // divide by 8 (or any number) to spread 
        // it out so it doesn't load new img 
        // every single px of swipe distance
        imgNum = Math.floor(imgNum/8); 
    
        if (imgNum < 1) {
          imgNum += num;
        }
        if (imgNum > num) {
          imgNum -= num;
        }
        console.log(imgNum)
        // change the image src
        $("#slide-0-field_product_image-391 img").attr('src', urlArray[imgNum - 1]);
    }
    
    function changeImgR (imgNum) {
    
        // divide by 8 (or any number) to spread 
        // it out so it doesn't load new img 
        // every single px of swipe distance
        imgNum = Math.floor(imgNum/8); 
    
        var num2 = -Math.abs(num); 
        if (imgNum > num2) {
          imgNum += num;
        }
        if (imgNum <= num2) {
          imgNum += num*2;
        }
        console.log(imgNum)
        // change the image src
        $("#slide-0-field_product_image-391 img").attr('src', urlArray[imgNum - 1]);
    }
    })
  })(jQuery);