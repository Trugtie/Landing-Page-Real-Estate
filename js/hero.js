const listImg = [
  "https://r4.wallpaperflare.com/wallpaper/537/207/609/architecture-bridge-river-aerial-view-wallpaper-f6c635a751af434ae6072e3ee345802c.jpg",
  "https://c1.wallpaperflare.com/path/734/16/925/river-sky-landscape-urban-aa71d7919cf5c6938474ba1d78a797a2.jpg",
  "https://r4.wallpaperflare.com/wallpaper/790/573/237/cities-ho-chi-minh-city-saigon-river-vietnam-wallpaper-147e32f3b5fe0553c10bab9562b941d9.jpg",
];

const hero = document.getElementsByClassName("hero-container");

let index = 1;

setInterval(() => {
  if (index === listImg.length) index = 0;
  console.log(index);
  const background = listImg[index];
  index++;
  hero[0].style.background = `url(${background}) center no-repeat`;
}, 5000);
