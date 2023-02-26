//menu
const modal = document.querySelector(".modal");
const inicioList = document.querySelectorAll('.inicio');
const pause = (miliseconds) => new Promise((resolve, reject) => setTimeout(() => resolve("terminado"), miliseconds));
function collapse() {
    document.getElementById("Linklist-6").classList.toggle("is-open");
    document.querySelector(".icon").classList.toggle("icon-chevron-down");
}
async function modalMenu(evt) {
    const target = evt.target;
    console.log(target.nodeName);
    if ((target.nodeName == "DIV" && !target.classList.contains("modal"))
        || target.nodeName == 'SPAN' || target.nodeName == 'LI' ||
        target.nodeName == 'UL' || (target.nodeName == 'svg' && target.classList.contains("icon"))) return null;

    const list = document.querySelectorAll(".appear-animation");
    modal.classList.toggle("active");
    document.querySelector("body").classList.toggle("noscroll");
    console.log(modal.classList.contains("active") ? 'se abre' : 'se cierra');
    await pause(100);
    document.querySelector(".menu-panel").classList.toggle("show");
    if (modal.classList.contains("active")) {//Se abre

        await pause(10);
        for (let index = 0; index < list.length; index++) {
            const i = list[index];
            const delay = i.dataset.classAppear;
            // i.style.animation = `reveal-y 1s ${delay} ease forwards`;
            if (!i.classList.contains(delay)) i.classList.add(delay);
            i.classList.add("show");
        }
    } else {
        //Se cierra
        list.forEach(i => i.classList.remove("show"));
        document.getElementById("Linklist-6").classList.remove("is-open");
        document.querySelector(".icon").classList.remove("icon-chevron-down");
    }



}
modal.addEventListener("click", modalMenu);
document.getElementById("menu-bar").addEventListener("click", modalMenu);
document.getElementById("collapse").addEventListener("click", collapse);
const nav = document.querySelector(".nav");

window.addEventListener('scroll', function (e) {
    const scrollTop = document.documentElement.scrollTop;
    const alturaAnimada = nav.offsetTop;
    const target = document.querySelectorAll('.scroll');
    var index = 0, length = target.length;
    // for (index; index < length; index++) {
    //     var pos = window.pageYOffset * target[index].dataset.rate;
    //     // console.log(pos);
    //     if (target[index].dataset.direction === 'vertical') {
    //         target[index].style.transform = 'translate3d(0px,' + pos + 'px, 0px)';
    //         if (target[index].dataset.opacity == 0) {
    //             const op = (((window.pageYOffset) / 100) - .8);
    //             target[index].style.opacity = op;
    //         }
    //     } else if (target[index].dataset.direction === 'horizontal') {
    //         var posX = window.pageYOffset * target[index].dataset.ratex;
    //         var posY = window.pageYOffset * target[index].dataset.ratey;
    //         target[index].style.transform = 'translate3d(' + posX + 'px, ' + posY + 'px, 0px)';
    //     } else {
    //         if (target[index].dataset.opacity == 0) {
    //             const op = (((window.pageYOffset) / 100) - 1);
    //             // console.log(-op);
    //             target[index].style.opacity = -op;
    //         }

    //     }
    // }
    // const heigth = document.querySelector("#mainblock").clientHeight;
    if (alturaAnimada < scrollTop) nav.classList.add("nav-animated");
    else nav.classList.remove("nav-animated");
});





inicioList.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#mainblock').scrollIntoView({ behavior: 'smooth' });
    });
});
// // document.querySelector('#btninicio').addEventListener('click', function(e) {
// //   e.preventDefault();
// //    document.querySelector('#mainblock').scrollIntoView({ behavior: 'smooth' });
// //   });
// document.querySelector('#inicio').addEventListener('click', function(e) {
//   e.preventDefault();
//    document.querySelector('#mainblock').scrollIntoView({ behavior: 'smooth' });
//   });
//   document.querySelector('#tipos').addEventListener('click', function(e) {
//     e.preventDefault();
//      document.querySelector('#tiposblock').scrollIntoView({ behavior: 'smooth' });
//     });

//     document.querySelector('#destacado').addEventListener('click', function(e) {
//       e.preventDefault();
//        document.querySelector('#destacadoblock').scrollIntoView({ behavior: 'smooth' });
//       });
// var swiper = new Swiper(".mySwiper", {
//     loop: false,
//     effect: "cube",
//     grabCursor: true,
//     // autoplay: {
//     //     delay: 4500,
//     //     disableOnInteraction: true,
//     // },
//     cubeEffect: {
//         shadow: true,
//         slideShadows: true,
//         shadowOffset: 20,
//         shadowScale: 0.94,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
// });

