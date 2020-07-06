import Linux from "./LogoLinux.png";

function addImage() {
  const img = document.createElement("img");
  img.alt = "Linux";
  img.width = 300;
  img.src = Linux;
  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;
