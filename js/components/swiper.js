import{CONFIGS}from"../sliders-configs.js";(()=>{const r=document.querySelectorAll(".swiper");if(!r.length)return;r.forEach((r=>(r=>{const o=r.dataset.config,e=CONFIGS[o];if(!e)throw new Error("no config provided");new Swiper(r,e)})(r)))})();