



let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  
  .fromTo(".blue", { x: -1000}, { x: 0, duration:1 })
.fromTo(".i-left", { opacity: 1 }, { opacity: 0, duration:1 })

 

let scene = new ScrollMagic.Scene({
  triggerElement: "#home",
  duration: "120%",
  triggerHook: 0,
})
  .setTween(timeline)
  
  .addTo(controller);



  let controlle = new ScrollMagic.Controller();
  let timelin = new TimelineMax();
  
  timelin
    

  .fromTo(".red", { x: -1000}, { x: 0, duration:1 })
  .fromTo(".i-right2", { x: 1000, opacity:0 }, { x: 0, opacity:1, duration:1 })
   
  
  let scen = new ScrollMagic.Scene({
    triggerElement: ".services",
    duration: "30%",
    triggerHook: 0,
  })
    .setTween(timelin)
   
    .addTo(controlle);



    let controll = new ScrollMagic.Controller();
    let timeli = new TimelineMax();
    
    timeli
      
  
    .fromTo(".yellow", { x: -1000}, { x: 0, duration:1 })
    .fromTo(".yellow2", { x: 1000}, { x: 0, duration:1 })
     
    
    let sce = new ScrollMagic.Scene({
      triggerElement: ".about",
      duration: "30%",
      triggerHook: 0,
    })
      .setTween(timeli)
     
      .addTo(controll);


   



  















  gsap.registerPlugin(Flip);

  const links = document.querySelectorAll(".nav-item a");
  const activeNav = document.querySelector(".active-nav");
  
  links.forEach(link => {
      //alternatywny zapis  link.addEventListener('click', ()=>{
      link.addEventListener('click', (e)=>{
          gsap.to(links, {color: "#FFFF"});
  
          
          // alternatywny zapis if(document.activeElement === link) {
          if(document.activeElement === e.target) {
              gsap.to(link, {color: "#0da34e"});
          }
  
          //move the line
  
          const state = Flip.getState(activeNav);
          link.appendChild(activeNav);
          Flip.from(state, {
              duration: 1.25,
              absolute: true,
              ease: "elastic.out(1,0.5)",
  
          })
      
      });
  
  });
  
  
  
  //Cards


  
  const cards= document.querySelectorAll(".card");
  
  cards.forEach((card, index)=>{
      card.addEventListener("click", ()=>{
          const state = Flip.getState(cards);
          
          //add active click
  
          const isCardActive = card.classList.contains("active");
          cards.forEach((otherCard, otherIdx)=>{
              otherCard.classList.remove('active');
              otherCard.classList.remove('is-inactive');
              if(!isCardActive && index !== otherIdx){
                  otherCard.classList.add("is-inactive")
              }
          });
  
          if(!isCardActive) card.classList.add("active");
          
  
          Flip.from(state,{
              duration: 0,
              ease: "expo.out",
              absolute: true,
          })
          
      
      })
  })



















  const herop = document.querySelector('.i-name');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.i-title-item');
const h1 = document.querySelector('.p1');
const h2 = document.querySelector('.p2');
const h3 = document.querySelector('.p3');
const h4 = document.querySelector('.h4');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(h1,  0.5, {opacity: 0, y: -300}, {opacity: 1, y:0})
.fromTo(h2,  0.5, {opacity: 0, y: -300}, {opacity: 1, y:0} )
.fromTo(h3,  0.5, {opacity: 0, y: -300}, {opacity: 1, y:0})
.fromTo(h4, 0.5, {opacity: 0, y: -300}, {opacity: 1, y:0},  )

.fromTo(herop, 1, {opacity: 0, x: 300}, {opacity: 1, x:0, ease: Power2.easeInOu}, "-=1");