// parallax animation
const bannerList = document.querySelectorAll(".banner");
const banner0 = document.querySelector(".banner-0");
const heading = document.querySelector(".heading");

window.addEventListener("scroll", () => {
  let top = this.scrollY;

  bannerList.forEach((value, index) => {
    value.style.translate = `0 ${(top * (index + 1)) / 3}px`;
  });

  banner0.style.translate = `0 ${top / 3}px`;
  heading.style.translate = `0 ${top * 2}px`;
});

// show animation
const tabs = document.querySelectorAll(".tab");

window.addEventListener("scroll", () => {
  let top = this.scrollY;

  tabs.forEach((tab) => {
    if (tab.offsetTop - top < window.innerHeight - 300) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
});
