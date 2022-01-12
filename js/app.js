import { dataTransitioner } from "./modules/data-transitioner.mjs";
import { eventHandler } from "./modules/event-handler.mjs";

const init = async() => {
   await fetch("./data.json")
      .then((res) => {
         if (!res.ok) throw new Error(res.statusText);
         return res;
      })
      .then((res) => res.json())
      .then((obj) => dataTransitioner.initData(obj))
      .catch((err) => console.log(err));
   eventHandler.setupEventListeners();
};

window.onload =  init;