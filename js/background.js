const imgs = [
  { src: "01.jpg", text_color: "rgb(204, 204, 204)" },
  { src: "02.jpg", text_color: "rgb(255, 179, 128)" },
  { src: "03.jpg", text_color: "rgb(230, 255, 255)" },
  { src: "04.jpg", text_color: "rgb(255, 255, 255)" },
  { src: "05.jpg", text_color: "rgb(230, 255, 255)" },
  { src: "06.jpg", text_color: "rgb(255, 229, 204)" },
  { src: "07.jpg", text_color: "rgb(191, 191, 191)" },
  { src: "08.jpg", text_color: "rgb(204, 204, 204)" },
  { src: "09.jpg", text_color: "rgb(230, 230, 230)" },
];
const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];
document.body.style.color = chosenImg.text_color;
img = `url(img/${chosenImg.src})`;
document.body.style.backgroundImage = img;
