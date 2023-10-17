// HEADER IMG ANIMATION
{
  const headerOfferImg = document.querySelector(`.header__img_wrapper`);

  let headerImgNum = 1;

  setInterval(() => {
    headerImgNum++;
    headerOfferImg.innerHTML = ` <img src="img/header__offer_img${headerImgNum}.png" class="header__img" />`;
    if (headerImgNum === 3) {
      headerImgNum = 0;
    }
  }, 3000);
}
