const images = ['v1622560515/spinach.png', 'v1622560509/plastic-bottle-2.png', 'v1622560504/plastic-bottle-1.png', 'v1622560494/orange.png', 'v1622560490/news-paper.png', 'v1622560486/meat.png', 'v1622560482/glass-bottle-3.png', 'v1622560478/glass-bottle-2.png', 'v1622560473/glass-botle-1.png', 'v1622560463/fish.png', 'v1622560457/chicken.png', 'v1622560453/cheese.png', 'v1622560447/book.png', 'v1622560441/beans.png', 'v1622560428/aspargus.png'];
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
    nTile.style.backgroundImage = `url("https://res.cloudinary.com/dke9sx7vr/image/upload/${image}")`;
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

const itemMovingDown = () => {
  const item = document.querySelector('.active');
  const activeIndex = item.cellIndex;
  const downTile = item.parentElement.nextElementSibling.children;
  if (downTile.length == 12) {
    changeActive(item, downTile[`${activeIndex}`]);
  }
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
  const yellowTrash = document.querySelector(".yellow-trash");
  yellowTrash.addEventListener("click", (event) => {
    itemMovingDown();
  })
  const greenTrash = document.querySelector(".green-trash");
  greenTrash.addEventListener("click", (event) => {
    itemMovingDown();
  })
  const blueTrash = document.querySelector(".blue-trash");
  blueTrash.addEventListener("click", (event) => {
    itemMovingDown();
  })
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
          score.innerText = `${parseInt(score.innerText) - 5}`;
        }
      } else if (activeIndex >= 4 && activeIndex <= 7) {
        if (regexGlass.test(d)) {
          score.innerText = `${parseInt(score.innerText) + 15}`;
        } else {
          score.innerText = `${parseInt(score.innerText) - 0}`;
        }
      } else if (activeIndex >= 8 && activeIndex <= 11) {
        if (regex6.test(d) || regex7.test(d) || regex8.test(d) || regex9.test(d) || regex10.test(d) || regex11.test(d) || regex12.test(d) || regex13.test(d)) {
          score.innerText = `${parseInt(score.innerText) + 15}`;
        } else {
          score.innerText = `${parseInt(score.innerText) - 5}`;
        }
      };
      const newImage = images[Math.floor(Math.random() * images.length)];
      changeActive(item, start, newImage);
  };
};

const timeFalling = () => {
  let time = document.querySelector("#timer");
  time.innerText = `${parseInt(time.innerText) - 1}`;
}


export { timeFalling, movingItem, itemFalling, itemMovingLeft, itemMovingRight };
