  //selectores para buscar todos los elementos html con la clase especificada
  var slides = document.querySelectorAll('.slide');
  var btns = document.querySelectorAll('.btn');
  let currentSlide = 1;

  //navegacion manual del slider
  var manualNav = function(manual){
      slides.forEach((slide) =>{
          slide.classList.remove('active');


          btns.forEach((btn) =>{
              btn.classList.remove('active');
          })
      });

      slides[manual].classList.add('active');
      btns[manual].classList.add('active')
  }

  btns.forEach((btn,i)=>{
     btn.addEventListener("click", () =>{
      manualNav(i);
      currentSlide = i;
     });
  })

  //navegacion automatica del slider
  var repeat = function(acvtiveClass){
      let active = document.getElementsByClassName('active')
      let i = 1;

      var repeater = () =>{
          setTimeout(function(){
              [...active].forEach((activeSlide) =>{
                  activeSlide.classList.remove('active')
              })

              slides[i].classList.add('active')
              btns[i].classList.add('active')
              i++
              if(slides.length == i){
                  i = 0;
              }
              if(i >= slides.length){
                  return
              }
              repeater()
          }, 5000)

      }
      repeater();
  }
  repeat();