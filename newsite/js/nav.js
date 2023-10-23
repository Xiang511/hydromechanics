const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click",() => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

var sliderIndex = 0; // 初始索引

var sliderNav = function (index) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[index].classList.add("active");
    slides[index].classList.add("active");
    contents[index].classList.add("active");
};

var autoSlide = setInterval(function () {
    // 增加索引，循环滑动到第一个元素
    sliderIndex = (sliderIndex + 1) % btns.length;
    sliderNav(sliderIndex);
}, 6000); //  毫秒

btns.forEach((btn, i) => {
    btn.addEventListener("click", function () {
        sliderIndex=i;
        // clearInterval(autoSlide); // 清除自动滑动定时器
        sliderNav(i);
    });
});