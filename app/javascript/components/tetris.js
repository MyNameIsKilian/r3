const itemMovingRight = () => {
  const item = document.querySelector('.active');
  const rightTile = item.nextElementSibling;
  if (rightTile) {
    item.classList.remove('active');
    rightTile.classList.add('active');
  }
};

const itemMovingLeft = () => {
  const item = document.querySelector('.active');
  const leftTile = item.previousElementSibling;
  if (leftTile) {
    item.classList.remove('active');
    leftTile.classList.add('active');
  }
};

const itemFalling = () => {
  const item = document.querySelector('.active');
  const activeIndex = item.cellIndex;
  const nextTile = item.parentElement.nextElementSibling.children[`${activeIndex}`];
  if (nextTile) {
    item.classList.remove('active');
    nextTile.classList.add('active');
  }
};

const deplaceItem = (event) => {
  if (event.key == "ArrowRight") {
    itemMovingRight();
  } else if (event.key == "ArrowLeft") {
    itemMovingLeft();
  }
};

document.addEventListener("keyup", (deplaceItem));

setInterval(itemFalling, 800);





export { deplaceItem, itemFalling, itemMovingLeft, itemMovingRight };



