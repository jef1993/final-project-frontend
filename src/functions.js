export const toggleOverlay = () => {
  document.querySelector(".overlay").classList.toggle("hidden");
};

export const toggleClass = (classSelect, classToggle) => {
  document.querySelector(`.${classSelect}`).classList.toggle(`${classToggle}`);
};

export const toggleClassAll = (classSelect, classToggle) => {
  document
    .querySelectorAll(`.${classSelect}`)
    .forEach((el) => el.classList.toggle(`${classToggle}`));
};
