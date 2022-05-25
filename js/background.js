const images = ["back01.jpg", "back02.jpg", "back03.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `./images/${chosenImages}`;

document.body.appendChild(bgImage);
