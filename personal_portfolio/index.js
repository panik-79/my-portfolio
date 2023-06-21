const boxContainer = document.querySelector(".boxContainer")
const saluteTextContainer = document.querySelector(".salute-text")
const saluteImgContainer = document.querySelector(".salute-img")
const Name = document.querySelector(".name")
const jobTitleContainers = document.querySelector(".job-title-page")
const jobTitle = document.querySelector(".job-title")
const projectsTitle = document.querySelector(".projects-title")
const phone = document.querySelector(".phone")
const laptop = document.querySelectorAll(".laptop")


window.addEventListener("scroll", () => {
    let offsetY = window.scrollY;
    saluteTextContainer.style.transform = `translateX(${-offsetY * 0.3}px)`
    saluteImgContainer.style.transform = `translateX(${-offsetY * 0.5}px)`
    Name.style.transform = `translate(${offsetY * 0.1}px)`

    jobTitleContainers.style.backgroundPositionY = `${offsetY * 0.5}px`
    jobTitle.style.transform = `translateX(calc(200vh - ${offsetY}px))`

    phone.style.transform = `translateX(calc(480vh - ${offsetY}px))`
    laptop[0].style.transform = `translateX(calc(-620vh + ${offsetY}px))`
    laptop[1].style.transform = `translateX(calc(750vh - ${offsetY}px))`
})