import { dataTransitioner } from "./data-transitioner.mjs";
import { navigationController } from "./navigation-controller.mjs";

export const eventHandler = (() => {
   const setupNavMenuToggleListener = () => {
      document.querySelector("#nav-menu-toggle").addEventListener("click", navigationController.toggleNavMenu);
      for (const link of document.querySelectorAll("header nav ul li")) {
         link.addEventListener("click", navigationController.changeLink);
      }
   };

   const setupNavBarToggleListeners = () => {
      document.querySelector("#hamburger").addEventListener("click", navigationController.toggleNavBar);
      document.querySelector("#close-btn").addEventListener("click", navigationController.toggleNavBar);
   };

   const setupTransitionBtnListeners = () => {
      document.querySelector("#back-btn").addEventListener("click", dataTransitioner.previous);
      document.querySelector("#next-btn").addEventListener("click", dataTransitioner.next);
   };

   const setupEventListeners = () => {
      setupNavMenuToggleListener();
      setupNavBarToggleListeners();
      setupTransitionBtnListeners();
   };

   return {
      setupEventListeners: setupEventListeners,
   };
})();
