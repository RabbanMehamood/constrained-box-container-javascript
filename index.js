const detailsG = document.getElementById("gcontainer");
const detailsW = document.getElementById("wcontainer");

const GcontainerBounds = document
  .getElementById("gcontainer")
  .getBoundingClientRect();
console.log(GcontainerBounds);
const topBorder = GcontainerBounds.top;
const leftBorder = GcontainerBounds.left;
const rightBorder = GcontainerBounds.right;
const downBorder = GcontainerBounds.bottom;
console.log(topBorder, leftBorder, rightBorder, downBorder);

document.addEventListener("keydown", (event) => {
  const WcontainerBound = document
    .getElementById("wcontainer")
    .getBoundingClientRect();
  console.log(WcontainerBound.top);

  const wBoxTop = Math.abs(
    detailsG.getBoundingClientRect().top - detailsW.getBoundingClientRect().top
  );
  const wBoxLeft = Math.abs(
    detailsG.getBoundingClientRect().left -
      detailsW.getBoundingClientRect().left
  );
  console.log(1, wBoxTop);
  console.log(2, wBoxLeft);

  switch (event.key) {
    case "ArrowUp":
      detailsW.style.top = `${wBoxTop - 5}px`;
      console.log(detailsW.style.top);

      break;
    case "ArrowDown":
      if (wBoxTop < downBorder) {
        detailsW.style.top = `${wBoxTop + 5}px`;
        console.log(detailsW.style.bottom);
      }
      break;
    case "ArrowRight":
      if (wBoxLeft < rightBorder) {
        detailsW.style.left = `${wBoxLeft + 5}px`;
      }
      break;
    case "ArrowLeft":
      detailsW.style.left = `${wBoxLeft - 5}px`;

      break;
  }
});

window.addEventListener("click", (event) => {
  document.getElementById("clX").textContent = `${event.clientX}`;
  document.getElementById("clY").textContent = `${event.clientY}`;
  document.getElementById("offX").textContent = `${event.offsetX}`;
  document.getElementById("offY").textContent = `${event.offsetY}`;
  document.getElementById("screenX").textContent = `${event.screenX}`;
  document.getElementById("screenY").textContent = `${event.screenY}`;
  document.getElementById("pageX").textContent = `${event.pageX}`;
  document.getElementById("pageY").textContent = `${event.pageY}`;
});

window.addEventListener("wheel", (event) => {
  document.getElementById("deltaX").textContent = `${event.deltaX}`;
  document.getElementById("deltaY").textContent = `${event.deltaY}`;
  document.getElementById("deltaZ").textContent = `${event.deltaZ}`;
});
