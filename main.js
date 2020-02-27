const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Apr 25, 2020 09:30:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)

    var counter=1;

    function lockScroll() {
        if (counter%2==1) {
            
            document.body.style.overflow='hidden';
            
            ++counter;
        }
        else{
            document.body.style.overflow='auto';
            ++counter;
        }
        
  }

  (function() {

  
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  
  })();

  const track1elements=document.getElementsByClassName("track1")[0];
  const track2elements=document.getElementsByClassName("track2")[0];
  const track3elements=document.getElementsByClassName("track3")[0];

  function track1btnclick(){
    console.log("hello1");
    track1elements.style.display="block"; 
    track2elements.style.display="none";
    track3elements.style.display="none";
  }

  function track2btnclick(){
    console.log("hello2");
    track2elements.style.display="block";
    track1elements.style.display="none";
    track3elements.style.display="none";
  }

  function track3btnclick(){
    console.log("hello3");
    track3elements.style.display="block";
    track1elements.style.display="none";
    track2elements.style.display="none";
  }

  /*speakers-details display*/
  function off(classname){
    const speaker= document.getElementById(classname.parentNode.parentNode.getAttribute('id').toString());
    console.log();
    var indexval=(speaker.getAttribute('id').toString()).indexOf('-');
        speaker.style.display='none';
    
        document.getElementsByClassName("info-"+(speaker.getAttribute('id').toString().slice(0,indexval)))[0].parentNode.classList.toggle("active");
    
    }
    
    function on(speakerinfoclassname){
        var strlength=(speakerinfoclassname.parentNode.getAttribute('class').toString()).length;
        const speaker= document.getElementById((speakerinfoclassname.parentNode.getAttribute('class').toString()).slice(5,strlength)+"-main")
        speaker.style.display='block';
        speakerinfoclassname.parentNode.parentNode.classList.toggle("active");
    }