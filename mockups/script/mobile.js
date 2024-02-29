const home_bar_menubuttons = document.querySelectorAll(".home_bar_menubutton");
const menu_bar_menubutton = document.getElementById("menu_bar_menubutton");
const menu_homebutton = document.getElementById("menu_homebutton");

const con_button = document.getElementById("con_button");

const sectionmenu = document.getElementById("sectionmenu");
const sectionhome = document.getElementById("sectionhome");
const footer = document.getElementById("footer");

const sectioncon = document.getElementById("sectioncon");

home_bar_menubuttons.forEach((button) => {
  button.addEventListener("click", () => {
    sectionmenu.style.display = "block";
    sectionmenu.style.position = "absolute";
    footer.style.display = "none";
  });
});

menu_bar_menubutton.addEventListener("click", () => {
  sectionmenu.style.display = "none";
  footer.style.display = "block";
});

menu_homebutton.addEventListener("click", () => {
  sectionmenu.style.display = "none";
  sectionhome.style.display = "block";
  footer.style.display = "block";
  sectioncon.style.display = "none";
});

con_button.addEventListener("click", () => {
  sectionmenu.style.display = "none";
  sectionhome.style.display = "none";
  footer.style.display = "block";

  sectionresource.style.display = "none";
  sectionbandb.style.display = "none";
  sectiontalk.style.display = "none";
  sections4yt.style.display = "none";
  sectioncon.style.display = "block";
});

const onebutton = document.getElementById("1button");
const twobutton = document.getElementById("2button");
const threebutton = document.getElementById("3button");

const con_firstpage = document.getElementById("con_firstpage");
const con_infopage = document.getElementById("con_infopage");
const con_conpage = document.getElementById("con_conpage");
const con_merchpage = document.getElementById("con_merchpage");

const con_back = document.querySelectorAll(".con_back");

onebutton.addEventListener("click", () => {
  con_firstpage.style.display = "none";
  con_infopage.style.display = "block";
  con_conpage.style.display = "none";
  con_merchpage.style.display = "none";
});

twobutton.addEventListener("click", () => {
  con_firstpage.style.display = "none";
  con_infopage.style.display = "none";
  con_conpage.style.display = "block";
  con_merchpage.style.display = "none";
});

threebutton.addEventListener("click", () => {
  con_firstpage.style.display = "none";
  con_infopage.style.display = "none";
  con_conpage.style.display = "none";
  con_merchpage.style.display = "block";
});

con_back.forEach((button) => {
  button.addEventListener("click", () => {
    con_firstpage.style.display = "flex";
    con_infopage.style.display = "none";
    con_conpage.style.display = "none";
    con_merchpage.style.display = "none";
  });
});