// Custom Cursor
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

// About Tabs
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    // console.log(e.target);
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        // console.log(target);
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
})
