const toggleTag = document.querySelector("a.toggle-nav");
const mainTag = document.querySelector("main");
const navTag = document.querySelector("nav");

// when I click the toggle tag, toggle class of open on main tag
// and if it's open make the toggle tag say closed
// and if it's shut, make the tag say open

toggleTag.addEventListener('click', function() {
    mainTag.classList.toggle("open")
    navTag.classList.toggle("open") 

    if (mainTag.classList.contains("open")) {
        toggleTag.innerHTML = `<img src="assets/close.svg"> Close`
    
    } else {
        toggleTag.innerHTML = `<img src="assets/menu.svg"> Menu`
    } 


})