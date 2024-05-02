


//---------------------------C-U-R-S-O-R------------------------------------------------------------------------------------------------

document.addEventListener("mousemove",function(dets){
  gsap.to(".cursor",{
      left:dets.x,
      top:dets.y
  })
  
})

//---------------------------------------S-M-O-O-T-H-----S-C-R-O-L-L-I-N-G---------------------------------------------------------------
const lenis = new Lenis()

      lenis.on('scroll', (e) => {
      console.log(e)
      })
      function raf(time) {
         lenis.raf(time)
        requestAnimationFrame(raf)
          }
          requestAnimationFrame(raf)
       
//-----------------------------------------M-U-S-I-C--------------------------------------------------------------------------------------------
            
            var mysong =document.getElementById("mysong");
            var icon = document.getElementById("icon");

            icon.onclick = function() {
              if(mysong.paused){
                mysong.play();
              }else{
                mysong.pause();
              }
            }
                    //AUDIO
        var mysong = document.getElementById("mysong"); // Corrected the case
        var icon = document.getElementById("icon");
        icon.onclick = function () {
            if (mysong.paused) {
                mysong.play();
                icon.className = icon.className.replace("pause", "play"); // Assuming you want to change the class
            } else {
                mysong.pause();
                icon.src = "";
            }
        };
         // Get the audio element
            var audio = document.querySelector('audio');

        // Set the volume (0.5 means 50% volume)
        audio.volume = 0.3;

        // SMOOTH SCROLLING
        // const lenis = new Lenis()

        // lenis.on('scroll', (e) => {
        // console.log(e)
        // })

        // function raf(time) {
        // lenis.raf(time)
        // requestAnimationFrame(raf)
        //     }

        // requestAnimationFrame(raf)
            // cursor
//             let cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', (e) => {
//     cursor.style.left = e.pageX + 'px';
//     cursor.style.top = e.pageY + 'px';
// })

// --------------------------------------------------------------------------------------------------------------------------
function textAnimation(){
  let lenis;

    const text = document.querySelector('.hero_text'),
    goToTop = document.querySelector('.hero_gallary_info_action');

    const init = () => {
        lenis = new Lenis({
            lerp: 0.08,
            smoothWheel: true,
        });

        // lenis.on('scroll',({scroll}) => {
        //     text.computedStyleMap.transform = `translate3D(${-scroll}px,0,0 )`;
        // });
        lenis.on('scroll', ({ scroll }) => {
            text.style.transform = `translate3D(${-scroll}px, 0, 0)`;
        });
        

        function raf(time){
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        // addEventListener();

    };

    const addEventListener = () => {
        goToTop.addEventListener('click', () =>lenis.scrollTo(1,{lerp: 0.05}));
    }
    init();
}
textAnimation();


// gsap.to(".moon img",{
//   transform:"translateY(-100%)",
//   scrollTrigger:{
//       trigger:"body",
//       scroller:".moon img",
//       start: "top 0",
//       end: "top -5%",
//       scrub:true,
//       markers:true
//   }
// })



// --------------------------L-O-A-D-E-R-----------------------------------------------------------------
var t1 = gsap.timeline();


function time(){
    var a = 0;
    setInterval(function(){
        a= a + Math.floor( Math.random()*15);
            if(a<100){
                document.querySelector(".loader h1").innerHTML=a+"%";
            }else{
                a=100;
                document.querySelector(".loader h1").innerHTML=a+"%";
            }
        console.log(a);
    },150)
}


t1.to(".loader h1",{
    delay:0.5,
    duration:1,
    onStart:time()
});

t1.to(".loader",{
    top:"-100vh",
    delay:0.5,
    duration:2,

});
// ----------------------------------------------------------------------------------------------------------------------


var path =  "M 10 200 Q 1000 200 1990 200";
var finalPath = "M 10 200 Q 1000 200 1990 200";

var string =document.querySelector(".string");

string.addEventListener("mousemove", function(dets){
    path = `M 10 200 Q 1000 ${dets.y} 1990 200`;

    gsap.to("svg path",{
        attr:{d:path},
        durating:0.3,
        ease:"power3.out"
    })

})
string.addEventListener("mouseleave", function(dets){

    gsap.to("svg path",{
        attr:{d:finalPath},
        ease:"elastic.out(1.2,0.3)",
        duration:0.8,
    })

})