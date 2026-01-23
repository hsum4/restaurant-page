import "./styles.css";
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";

//loadHome();

const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn");

homeBtn.addEventListener('click', loadHome);
menuBtn.addEventListener('click', loadMenu);
aboutBtn.addEventListener('click', loadAbout);
