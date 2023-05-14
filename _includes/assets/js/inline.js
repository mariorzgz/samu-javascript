window.onscroll = function() {
  let main = document.querySelector('main');

  if ((main.classList.contains("home"))){
    let hero = document.querySelector('#hero');
    let heroHeight = hero.offsetHeight;
    let navElements = document.querySelectorAll('header nav ul li a');
    color(main, heroHeight, navElements)
  }
};

function color(main, heroHeight, navElements) {
  if ((document.body.scrollTop >  heroHeight || document.documentElement.scrollTop > heroHeight) && (main.classList.contains("home"))){
    document.querySelector('#logo').classList.remove("light");
    document.querySelector('#logo').classList.add("dark");
    navElements.forEach(navElement => {
      navElement.classList.remove("light");
      navElement.classList.add("dark");
    });
  } else {
    document.querySelector('#logo').classList.add("light");
    document.querySelector('#logo').classList.remove("dark");
    navElements.forEach(navElement => {
      navElement.classList.add("light");
      navElement.classList.remove("dark");
    });

  }
}
