export const calcScrollValue = () => {
  let scrollProgress = document.querySelector('.scroll-to-top');
  let pos = document.documentElement.scrollTop;
  if (pos > 100) {
    scrollProgress.style.display = "flex";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
}