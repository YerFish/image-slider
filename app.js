const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container")
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length; //! получаем все div потому что в div находятся все наши слайды

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`; //! обратные кавычки (Ё); вычитаем из кол-ва дивов 1 т.к. один уже итак имеем

upBtn.addEventListener("click", () => {
    changeSlide("up");
});

downBtn.addEventListener("click", () => {
    changeSlide("down");
});
// при нажатии кнопки на клавиатуре происходит дейтвие. с помощью "console.log(event.key)" на 21 строчке можно глянуть ключи кнопок
document.addEventListener('keydown', event => {
  if (event.key === 'ArrowUp') {
    changeSlide('up')
  } else if (event.key === 'ArrowDown') {
    changeSlide('down')
  }
})


function changeSlide(direction) {
    if (direction === "up") {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === "down") {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
