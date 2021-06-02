const images = ['aspargus.png', 'book.png', 'beans.png', 'box.png', 'cheese.png', 'chicken.png', 'fish.png', 'glass-bottle-1.png', 'glass-bottle-2.png', 'glass-bottle-3.png', 'meat.png', 'news-paper.png', 'orange.png', 'plastic-bottle-1.png', 'plastic-bottle-2.png', 'spinach.png'];
const aliments = ['aspargus.png', 'beans.png', 'cheese.png', 'chicken.png', 'fish.png', 'meat.png', 'orange.png', 'spinach.png'];
const glass = ['glass-bottle-1.png', 'glass-bottle-2.png', 'glass-bottle-3.png'];
const paper = ['book.png', 'box.png', 'news-paper.png', 'plastic-bottle-1.png', 'plastic-bottle-2.png'];
const regex1 = new RegExp('box');
const regex2 = new RegExp('book');
const regex3 = new RegExp('paper');
const regex4 = new RegExp('plastic');
const regexGlass = new RegExp('glass');
const regex6 = new RegExp('aspargus');
const regex7 = new RegExp('beans');
const regex8 = new RegExp('cheese');
const regex9 = new RegExp('chicken');
const regex10 = new RegExp('meat');
const regex11 = new RegExp('orange');
const regex12 = new RegExp('spinach');
const regex13 = new RegExp('fish');
/*const changeBackground = (element, url) => {
  return element.style.backgroundImage = `url(${url})`;
}
*/

const changeActive = (item, nTile, newImage='') => {
  let image = ""
  if (newImage === '') {

    image = window.getComputedStyle(item).backgroundImage;
    item.classList.remove('active');
    item.style.backgroundImage = "";

    nTile.classList.add('active');
    nTile.style.backgroundImage = `${image}`;
  } else {
    image = newImage;
    item.classList.remove('active');
    item.style.backgroundImage = "";

    nTile.classList.add('active');
    nTile.style.backgroundImage = `url(/assets/${image})`;
  };
};


const itemMovingRight = () => {
  const item = document.querySelector('.active');
  const rightTile = item.nextElementSibling;
  if (rightTile) {
    changeActive(item, rightTile)
  }
};

const itemMovingLeft = () => {
  const item = document.querySelector('.active');
  const leftTile = item.previousElementSibling;
  if (leftTile) {
    changeActive(item, leftTile)
  }
};

const itemFalling = () => {
  const item = document.querySelector('.active');
  const activeIndex = item.cellIndex;
  const nextTile = item.parentElement.nextElementSibling.children;

  if (nextTile.length == 12) {
    changeActive(item, nextTile[`${activeIndex}`])
  } else if (nextTile.length == 3) {
      const score = document.querySelector('#score');
      const d = window.getComputedStyle(item).backgroundImage;
      if (activeIndex >= 0 && activeIndex <= 3) {
        if (regex1.test(d) || regex2.test(d) || regex3.test(d) || regex4.test(d)) {
          score.innerText = `${parseInt(score.innerText) + 20}`;
        } else {
          score.innerText = `${parseInt(score.innerText) - 10}`;
        }
      } else if (activeIndex >= 4 && activeIndex <= 7) {
        if (regexGlass.test(d)) {
          score.innerText = `${parseInt(score.innerText) + 25}`;
        } else {
          score.innerText = `${parseInt(score.innerText) - 20}`;
        }
      } else if (activeIndex >= 8 && activeIndex <= 11) {
        if (regex6.test(d) || regex7.test(d) || regex8.test(d) || regex9.test(d) || regex10.test(d) || regex11.test(d) || regex12.test(d) || regex13.test(d)) {
          score.innerText = `${parseInt(score.innerText) + 15}`;
        } else {
          score.innerText = `${parseInt(score.innerText) - 10}`;
        }
      };
      const newImage = images[Math.floor(Math.random() * images.length)];
      changeActive(item, start, newImage);
  };
};

const movingItem = () => {
  const leftPart = document.querySelectorAll(".left-part");
  leftPart.forEach((leftpart) => {
    leftpart.addEventListener("click", (event) => {
      itemMovingLeft();
    });
  })
  const rightPart = document.querySelectorAll(".right-part");
    rightPart.forEach((rightpart) => {
    rightpart.addEventListener("click", (event) => {
      itemMovingRight();
    });
  })
};





export { movingItem, itemFalling, itemMovingLeft, itemMovingRight };




/*const newItem = () => {
  const lastTr = document.getElementById('last-tr');
  lastTr.addEventListener("", (event) => {*/
    // si un td contient la classe active, lui enlever
    // ajouter la classe active à start
/*  });
};*/


  /*const start = document.getElementById('start');
  start.classList.add('active');*/
