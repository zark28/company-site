"use strict";

var menu = document.querySelector('#mobile-menu');
var menuLinks = document.querySelector('.navbar-menu');
var navLogo = document.querySelector('#navbar-logo');
var modeToggle = document.querySelector('#mode1');
var modeToggle1 = document.querySelector('#mode2'); //Toggle mobile menu

var mobileMenu = function mobileMenu() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu); //show active menu when scrolling

var highlightMenu = function highlightMenu() {
  var elem = document.querySelector('.highlight');
  var homeMenu = document.querySelector('#home-page');
  var aboutMenu = document.querySelector('#about-page');
  var servicesMenu = document.querySelector('#services-page');
  var scrollPos = window.scrollY; //adds highlight class to menu items

  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos > 2345) {
    servicesMenu.classList.remove('highlight');
    return;
  }

  if (elem && window.innerWidth < 960 && scrollPos < 2345) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu); // closs mobile menue

var hideMobileMenu = function hideMobileMenu() {
  var menuBars = document.querySelector('.is-active');

  if (window.innerWidth <= 960 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu); // Swithing dark and light modes

var switchMode = function switchMode(e) {
  e.preventDefault();
  var bodyCss = document.querySelector('body');
  bodyCss.classList.toggle('light');
};

modeToggle.addEventListener('click', switchMode);
modeToggle1.addEventListener('click', switchMode);