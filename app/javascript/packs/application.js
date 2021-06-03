// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

import {Cloudinary} from "cloudinary-core";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';
import { timeFalling, itemFalling, movingItem, itemMovingLeft, itemMovingRight } from '../components/tetris.js'



document.addEventListener('turbolinks:load', () => {
  const tetris = document.querySelector(".tetris-grid");
  if (tetris) {
    itemMovingRight();
    itemMovingLeft();
    movingItem();

    const itemInterval = setInterval(itemFalling, 500);
    const timeInterval = setInterval(timeFalling, 1000);

    const createInterval = setInterval(() => {
      let time = document.querySelector("#timer");
      if (Number(time.innerText) === 0) {
        clearInterval(itemInterval);
        clearInterval(timeInterval);
        const scoreInput = document.getElementById("round_score");
        const myScore = document.querySelector('#score').innerText;
        scoreInput.value = myScore;
        document.getElementById("new_round").submit();
        const finalScore = document.getElementById("modal-score");
        finalScore.innerText = `Score:  ${myScore}`;
        document.getElementById("round-modal").click();
        clearInterval(createInterval);
      }
    }, 500)
  }
});
