// HEADER IMG ANIMATION
{
  addEventListener("DOMContentLoaded", () => {
    const headerOfferImg = document.querySelector(`.header__img_wrapper`);

    let headerImgNum = 1;

    setInterval(() => {
      headerImgNum++;
      headerOfferImg.innerHTML = ` <img src="img/header__offer_img${headerImgNum}.png" class="header__img" />`;
      if (headerImgNum === 3) {
        headerImgNum = 0;
      }
    }, 3000);
  });
}
// BESTSELLER FILTER
{
  const bestsellerBtnArray = document.querySelectorAll(
    ".bestseller__menu_item"
  );
  const bestsellerMenu = document.querySelector(".bestseller__menu");

  class Bestseller {
    checked() {
      const bestsellerChecked = bestsellerMenu.querySelector(
        ".bestseller__menu_checked"
      );
      if (bestsellerChecked) {
        bestsellerChecked.classList.remove("bestseller__menu_checked");
      }
    }
    filter() {
      const bestsellerItemArray =
        document.querySelectorAll(`.bestseller__item`);

      bestsellerItemArray.forEach((el) => {
        let navItemData = event.target.dataset["btn"];
        if (!el.classList.contains(navItemData) && navItemData !== "all") {
          el.classList.add("disabled");
        } else {
          el.classList.remove("disabled");
        }
      });
    }
  }

  const bestsellerPage = new Bestseller();

  bestsellerBtnArray.forEach((el) => {
    el.addEventListener("click", () => {
      bestsellerPage.checked();
      el.classList.add("bestseller__menu_checked");
      bestsellerPage.filter();
    });
  });
}
