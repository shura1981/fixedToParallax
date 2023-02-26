"use strict";

class Index {

    constructor() {
        this.section = document.querySelectorAll(".row");
        this.viewportHeight = window.innerHeight;
        this.viewportWidth = window.innerWidth;
        this.parallax = document.querySelector("#parallax");
        this.container = document.querySelector("#container");
        console.log({ offset: this.container.offsetTop });
        this.loadImage();
        window.addEventListener("scroll", this.scroll.bind(this));
    }

    scroll() {
        const scrollTop = document.documentElement.scrollTop;
        this.effectParallax(scrollTop);

    }

    effectParallax(scrollTop) {
        const top = this.container.getBoundingClientRect().top;
        const ratio = -0.5;
        const transform = 'translateY(' + scrollTop * ratio + 'px)';
        this.parallax.style.backgroundPositionY = (top) * ratio + 'px';
    }

    getList(count = 20) {
        const list = [];
        for (let index = 0; index < count; index++) {
            const url = `https://picsum.photos/500/300?image=${index + 1}`
            list.push(url);
        }
        return list;
    }
    loadImage() {
        this.section.forEach((el, index) => {
            el.innerHTML += `
<article class="aspec-ratio ratio16x9 ">
<img data-src="${this.getList()[index]}" alt="prueba ${index}"  class="ratio_img">
</article>
`;
        });
        this.lazyLoadImage();
    }
    load(e) {
        e.target.classList.add("fade");
    }
    lazyLoadImage(marginBottom = "0px") {
        const options = {
            threshold: 0,
            rootMargin: `0px 0px ${marginBottom} 0px`
        }
        const targets = document.querySelectorAll('[data-src]');
        const lazyLoad = target => {
            const io = new IntersectionObserver(entries => {
                let img = entries[0].target;
                if (entries[0].isIntersecting === true) {
                    img.setAttribute("src", img.dataset.src);
                    img.addEventListener("load", this.load);
                    io.disconnect();
                }
            }, options
            );
            io.observe(target);
        }
        targets.forEach(lazyLoad);
    }


}


new Index();



