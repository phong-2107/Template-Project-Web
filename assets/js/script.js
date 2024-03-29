
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-cloudy-fill';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-cloudy-fill';

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
}
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})


/*======================= ANIMATION SEARCH BAR ==========================*/
const icon = document.querySelector(".icon");
const search = document.querySelector(".search");

icon.onclick = () => {
        search.classList.toggle('active');
}
const clear = document.querySelector(".clear");
const valueTruyen = document.getElementById('search-truyen');
clear.onclick = () => {
    if(valueTruyen.value == ''){
        search.classList.remove('active');
    }
    else{
        valueTruyen.value = '';
    }
} 

/* ======================== active rank ================================ */
var header = document.getElementById("rank__type");
var btns = header.getElementsByClassName("nav__item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-rank");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active-rank", "");
  }
  this.className += " active-rank";
  });
}

/*======================== FUNCTION UI ĐÁNH GIÁ ============================*/
const stars = document.querySelectorAll(".rating i");
stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});
