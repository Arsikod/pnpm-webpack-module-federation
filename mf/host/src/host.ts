import { NavBar } from "../components/nav-bar";

const navItems = [
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/dashboard",
    title: "Dashboard",
  },
];

const navigationBar = new NavBar();

navigationBar.render(navItems);

const url = window.location.pathname;

if (url === "/about") {
  import("aboutApp/About").then((About) => {
    const HWButton = About.default;
    const button = new HWButton();
    button.render();
  });
}

if (url === "/dashboard") {
  import("dashboardApp/Dashboard").then((Dashboard) => {
    const ImgMf = Dashboard.default;
    const imageDash = new ImgMf();
    imageDash.render();
  });
}

console.log("Host is here");
