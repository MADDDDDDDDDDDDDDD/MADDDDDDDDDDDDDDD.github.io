// 스크롤 이벤트 감지
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const title = document.querySelector(".title-container");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled"); // Navbar 배경 변경
        title.classList.add("scrolled"); // DUDEOJI 텍스트 사라짐
    } else {
        navbar.classList.remove("scrolled");
        title.classList.remove("scrolled");
    }
});
