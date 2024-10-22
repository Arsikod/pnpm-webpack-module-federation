import classes from "./add-image.module.css";
import imagePath from "../assets/face.jpg";

export class FaceImage {
  render() {
    const img = document.createElement("img");
    img.src = imagePath;
    img.classList.add(classes.faceImage);

    document.body.appendChild(img);
  }
}
