export const navigationController = (() => {
   const navMenuToggle = document.querySelector("#nav-menu-toggle");
   const arrow = document.querySelector("#down-arrow");
   const nav = document.querySelector("header nav");
   const navLinksContainer = document.querySelector("header nav ul");
   const navLinks = navLinksContainer.children;
   const darkBg = document.querySelector("#dark-bg");

   const toggleNavMenu = () => {
      arrow.classList.toggle("flip");
      navLinksContainer.classList.toggle("show");
   };

   const changeLink = (evt) => {
      navMenuToggle.childNodes[0].nodeValue = evt.currentTarget.innerText;
      for (const link of navLinks) {
         link.classList.remove("remove");
         if (link.innerText === evt.currentTarget.innerText) link.classList.add("remove");
      }
      toggleNavMenu();
   };

   const toggleNavBar = () => {
      nav.classList.toggle("slide-down");
      darkBg.classList.toggle("show");
   };

   return {
      toggleNavMenu: toggleNavMenu,
      changeLink: changeLink,
      toggleNavBar: toggleNavBar,
   };
})();
