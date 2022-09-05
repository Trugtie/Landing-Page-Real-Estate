const navItem = document.getElementsByClassName("nav-link");
for (const item of navItem) {
  item.addEventListener("click", changeActive);
}

function changeActive(e) {
  const activedEl = document.getElementsByClassName("nav-active");
  activedEl[0].classList.remove("nav-active");
  e.target.classList.add("nav-active");
}
