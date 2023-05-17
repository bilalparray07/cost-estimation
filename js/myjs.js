let dollars = 0;
// let value = 0;
let getSlidePrice1 = 0;
let getSlidePrice2 = 0;
let getSlidePrice3 = 0;
let getSlidePrice4 = 0;
let getSlidePrice5 = 0;
let getSlidePrice6 = 0;
let getSlidePrice7 = 0;
let getSlidePrice8 = 0;
let getSlidePrice9 = 0;
let slidePrice6= 0;
let slide6elem = 0;
let slidePrice7= 0;
let slide7elem = 0;
let slidePrice8= 0;
let slide8elem = 0;
let slidePrice9= 0;
let slide9elem = 0;
let sum  = 0;
// slide one alll 
let slidePrice= 0;
let ios = document.getElementById("ios");
let andriod = document.getElementById("andriod");
let cross = document.getElementById("cross");
let slide1 = [ios, andriod, cross];


// slide 2 all
let uialready = document.getElementById("uialready");
let mvp = document.getElementById("mvp");
let basic = document.getElementById("basic");
let polished = document.getElementById("polished");
let slide2= [mvp, basic, polished,uialready];
// slide 3
let email = document.getElementById("email");
let sociallogin = document.getElementById("sociallogin");
let github = document.getElementById("github");
let nologinreq = document.getElementById("nologinreq");
let slide3= [sociallogin,nologinreq,github, email];

// slide 4
let noneloc = document.getElementById("noneloc");
let geoloc = document.getElementById("geoloc");
let calender = document.getElementById("calender");
let booking = document.getElementById("booking");
let slide4 = [geoloc,calender,booking,noneloc];


// slide 5
let ecom = document.getElementById('ecom');
let iot = document.getElementById('iot');
let socialnetworking = document.getElementById('socialnetworking');
let education = document.getElementById('education');
let healthcare = document.getElementById('healthcare');
let maps = document.getElementById('maps');
let events = document.getElementById('events');
let ai = document.getElementById('ai');
let others = document.getElementById('others');
let slide5 = [ecom,iot,socialnetworking,education,healthcare,maps,events,ai,others];

// slide 6
let userprofile = document.getElementById('userprofile');
let dashboard = document.getElementById('dashboard');
let photos = document.getElementById('photos');
let audio = document.getElementById('audio');
let activityfeed = document.getElementById('activityfeed');
let ratings = document.getElementById('ratings');
let fileupload = document.getElementById('fileupload');
let chat = document.getElementById('chat');
let search = document.getElementById('search');
let slide6 = [userprofile,dashboard,photos,audio,activityfeed,ratings,fileupload,chat,search];

// slide 7
let emailssocial = document.getElementById('emailssocial');
let sharing = document.getElementById('sharing');
let pushnotification = document.getElementById('push-notification');
let smsintegration = document.getElementById('smsintegration');
let slide7 = [sharing,emailssocial,pushnotification,smsintegration];

// slide 8
let paymentprocessing = document.getElementById('paymentprocessing');
let shoppingcart = document.getElementById('shoppingcart');
let subscription = document.getElementById('subscription');
let inapppurse = document.getElementById('inapppurse');
let slide8 = [paymentprocessing,shoppingcart,subscription,inapppurse];
// sldie 9
let cms = document.getElementById('cms');
let moderation = document.getElementById('moderation');
let reporting = document.getElementById('reporting');
let inapppurchases = document.getElementById('inapppurchases');
let slide9 = [cms,moderation,reporting,inapppurchases];

// loop for ist slide which makes green on click and moves to next slide and also gives the value
slide1.forEach((element) => {
  element.addEventListener("click", () => {
    slide1.forEach((thisItem) => {
      if (thisItem == element) {
        let slidePrice1 = parseInt(element.getAttribute("data-num"));
           localStorage.setItem('slidePrice1',slidePrice1);
        getSlidePrice1  = parseInt(localStorage.getItem('slidePrice1'));
       
                 $(".slider").slick("slickNext");
                     thisItem.classList.add("green");
      } else {
        thisItem.classList.remove("green");
              
      }
    });
  });
});

// loop for second slide
slide2.forEach((element) => {
    element.addEventListener("click", () => {
      slide2.forEach((thisItem) => {
        if (thisItem == element) {
          let slidePrice2 = parseInt(element.getAttribute("data-num"));
           localStorage.setItem('slidePrice2',slidePrice2)
            getSlidePrice2  = parseInt(localStorage.getItem('slidePrice2'));
           
                   $(".slider").slick("slickNext");
                       thisItem.classList.add("green");
        } else {
          thisItem.classList.remove("green");
          
        }
      });
    });
  });

// loop for third slide
slide3.forEach((element) => {
    element.addEventListener("click", () => {
      slide3.forEach((thisItem) => {
        if (thisItem == element) {
          let slidePrice3 = parseInt(element.getAttribute("data-num"));
           localStorage.setItem('slidePrice3',slidePrice3)
            getSlidePrice3  = parseInt(localStorage.getItem('slidePrice3'));
           
                   $(".slider").slick("slickNext");
                       thisItem.classList.add("green");
        } else {
          thisItem.classList.remove("green");
          
        }
      });
    });
  });

// loop for fourth slide
slide4.forEach((element) => {
    element.addEventListener("click", () => {
      slide4.forEach((thisItem) => {
        if (thisItem == element) {
          let slidePrice4 = parseInt(element.getAttribute("data-num"));
           localStorage.setItem('slidePrice4',slidePrice4)
            getSlidePrice4  = parseInt(localStorage.getItem('slidePrice4'));
           
                   $(".slider").slick("slickNext");
                       thisItem.classList.add("green");
        } else {
          thisItem.classList.remove("green");
          
        }
      });
    });
  });
// loop for 5th slide
slide5.forEach((element) => {
    element.addEventListener("click", () => {
      slide5.forEach((thisItem) => {
        if (thisItem == element) {
          let slidePrice5 = parseInt(element.getAttribute("data-num"));
           localStorage.setItem('slidePrice5',slidePrice5)
            getSlidePrice5  = parseInt(localStorage.getItem('slidePrice5'));
           
                   $(".slider").slick("slickNext");
                       thisItem.classList.add("green");
        } else {
          thisItem.classList.remove("green");
          
        }
      });
    });
  });
// loop for 6th slide

slide6.forEach((element) => {
  element.addEventListener("click", () => {
      $(".slider-next").removeClass("null");
      let slidePrice6 = 0;
      slide6.forEach((selectedElement) => {
          if (selectedElement.classList.contains('green')) {
              slidePrice6 += parseInt(selectedElement.getAttribute('data-num'));
            
          }
      });
      if (!element.classList.contains('green')) {
          element.classList.add('green');
          slidePrice6 += parseInt(element.getAttribute('data-num'));
         
      } else {
          element.classList.remove('green');
          slidePrice6 -= parseInt(element.getAttribute('data-num'));
      }
      localStorage.setItem('slidePrice6', slidePrice6);
       getSlidePrice6 = parseInt(localStorage.getItem('slidePrice6'));
      if (getSlidePrice6 == 0) {
          $(".slider-next").addClass("null");
      }
      console.log(slidePrice6);
  });
});

// slide 7th

  slide7.forEach((element) => {
    element.addEventListener("click", () => {
        $(".slider-next").removeClass("null");
        let slidePrice7 = 0;
        slide7.forEach((selectedElement) => {
            if (selectedElement.classList.contains('green')) {
                slidePrice7 += parseInt(selectedElement.getAttribute('data-num'));
            }
        });
        if (!element.classList.contains('green')) {
            element.classList.add('green');
            slidePrice7 += parseInt(element.getAttribute('data-num'));
        } else {
            element.classList.remove('green');
            slidePrice7 -= parseInt(element.getAttribute('data-num'));
        }
        localStorage.setItem('slidePrice7', slidePrice7);
      getSlidePrice7 = parseInt(localStorage.getItem('slidePrice7'));
        if (getSlidePrice7 == 0) {
            $(".slider-next").addClass("null");
        }
    });
});

// slide 8th

slide8.forEach((element) => {
  element.addEventListener("click", () => {
      $(".slider-next").removeClass("null");
      let slidePrice8 = 0;
      slide8.forEach((selectedElement) => {
          if (selectedElement.classList.contains('green')) {
              slidePrice8 += parseInt(selectedElement.getAttribute('data-num'));
             
          }
      });
      if (!element.classList.contains('green')) {
          element.classList.add('green');
          slidePrice8 += parseInt(element.getAttribute('data-num'));
         
      } else {
          element.classList.remove('green');
          slidePrice8 -= parseInt(element.getAttribute('data-num'));
      }
      localStorage.setItem('slidePrice8', slidePrice8);
      getSlidePrice8 = parseInt(localStorage.getItem('slidePrice8'));
      if (getSlidePrice8 == 0) {
          $(".slider-next").addClass("null");
      }
  });
});

// slide 9th

slide9.forEach((element) => {
  element.addEventListener("click", () => {
      $(".slider-next").removeClass("null");
      let slidePrice9 = 0;
      slide9.forEach((selectedElement) => {
          if (selectedElement.classList.contains('green')) {
              slidePrice9 += parseInt(selectedElement.getAttribute('data-num'));
          }
      });
      if (!element.classList.contains('green')) {
          element.classList.add('green');
          slidePrice9 += parseInt(element.getAttribute('data-num'));
      } else {
          element.classList.remove('green');
          slidePrice9 -= parseInt(element.getAttribute('data-num'));
          
      }
      localStorage.setItem('slidePrice9', slidePrice9);
     getSlidePrice9 = parseInt(localStorage.getItem('slidePrice9'));
     
      if (getSlidePrice9 == 0) {
          $(".slider-next").addClass("null");
      }

  });
});



// form name displaying in thankyou page and adding value 
let formbtn = document
  .getElementById("formbtn")
  .addEventListener("click", () => {
    sum = getSlidePrice1+getSlidePrice2+getSlidePrice3+getSlidePrice4+getSlidePrice5+getSlidePrice6+getSlidePrice7+getSlidePrice8+getSlidePrice9;
    localStorage.setItem('sum',sum);
    let formname = document.getElementById("form3Example1").value;
    localStorage.setItem("formname", formname);
  });


