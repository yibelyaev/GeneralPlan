import {CONFIGS} from "../sliders-configs.js";

(() => {
  const sliders = document.querySelectorAll('.swiper');

  if (!sliders.length) return;

  const initSlider = (slider) => {
    const configName = slider.dataset.config;
    const config = CONFIGS[configName];

    if (!config) throw new Error(`no config provided`)
    const sliderInstance = new Swiper(slider, config)
  }

  sliders.forEach(slider => initSlider(slider));
})();

