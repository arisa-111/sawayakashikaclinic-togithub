// トップページのメインビジュアル（スライドショー）

const images = $('#slide div');

let counter = 0;
let index = 0;

const playSlide = () => {

  images.eq(index)
    .fadeIn(1500)
    .delay(5000)
    .fadeOut(1500, () => {

      counter++;

      index = counter % images.length;

      playSlide();

    });

};

playSlide();