const loadImages = document.querySelectorAll("[data-src]");
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 0px 0px"
};

function loadImg(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
    img.onload = () => {
        img.removeAttribute("data-src");
    }
};

const imgObserve = new IntersectionObserver((entries, imgObserve) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            loadImg(entry.target);
            imgObserve.unobserve(entry.target);
        }
    })
}, imgOptions);

loadImages.forEach(image => {
    imgObserve.observe(image);
});