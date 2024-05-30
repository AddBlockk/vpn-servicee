document
  .querySelector(".header__container-wrapper_but")
  .addEventListener("click", function () {
    const modal = document.querySelector(".header__container-wrapper_modal");
    let body = document.querySelector("body");

    setTimeout(() => {
      modal.style.transform =
        modal.style.transform === "translate(0px, -100%)"
          ? "translate(0, 0%)"
          : "translate(0px, -100%)";
    }, 100);

    modal.style.display = "block";
    body.style.overflowY = "hidden";
  });

document.querySelector(".cross").addEventListener("click", function () {
  const modal = document.querySelector(".header__container-wrapper_modal");
  modal.style.transform = "translate(0px, -100%)";
  setTimeout(() => {
    modal.style.display = "none";
  }, 1000); // задержк
});

window.addEventListener(
  "resize",
  function (event) {
    if (event.target.innerWidth > 500) {
      let modal = document.querySelector(".header__container-wrapper_modal");
      let body = document.querySelector("body");

      body.style.overflowY = "auto";

      modal.style.display = "none";

      modal.style.transform = "translate(0px, -100%)";
    }
  },
  true
);

function init() {
  new ymaps.Map("map", {
    center: [46.35513944139531, 48.073751633088044],
    zoom: 17,
  });

  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
}

ymaps.ready(init);
