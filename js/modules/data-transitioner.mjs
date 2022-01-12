export const dataTransitioner = (() => {
   const mainImgDesktop = document.querySelector("#main-img-desktop");
   const mainImgMobile = document.querySelector("#main-img-mobile");
   const header = document.querySelector("#cta-container h1");
   const text = document.querySelector("#cta-container p");

   let data;
   let index = 0;

   const initData  = (obj) => {
      data = obj;
   };

   const previous = () => {
      if(index === 0) index = 2;
      else index--;
      transition(data[index]);
   };

   const next = () => {
      if (index === 2) index = 0;
      else index++;
      transition(data[index]);
   };

   const transition = (data) => {
      header.innerText = data.title;
      text.innerText = data.description;
      mainImgDesktop.src = data.images.desktop;
      mainImgMobile.src = data.images.mobile;
   };

   return {
      initData: initData,
      next: next,
      previous: previous
   }
})();