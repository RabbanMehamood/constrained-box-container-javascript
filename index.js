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
  // Get the bounding box of the green container
  const GcontainerBounds = detailsG.getBoundingClientRect();

  // Get the bounding box of the white container (the element to move)
  const WcontainerBounds = detailsW.getBoundingClientRect();

  // Calculate the relative position of the white box to the green box
  const wBoxTop = WcontainerBounds.top - GcontainerBounds.top;
  const wBoxLeft = WcontainerBounds.left - GcontainerBounds.left;

  // Log the current position for debugging
  console.log("White box top:", wBoxTop);
  console.log("White box left:", wBoxLeft);

  switch (event.key) {
    case "ArrowUp":
      // Check if the white box top is within the green box's top limit
      if (wBoxTop > 0) {
        detailsW.style.top = `${wBoxTop - 5}px`;
      }
      break;

    case "ArrowDown":
      // Check if the white box bottom is within the green box's bottom limit
      if (wBoxTop + WcontainerBounds.height < GcontainerBounds.height) {
        detailsW.style.top = `${wBoxTop + 5}px`;
      }
      break;

    case "ArrowRight":
      // Check if the white box right side is within the green box's right limit
      if (wBoxLeft + WcontainerBounds.width < GcontainerBounds.width) {
        detailsW.style.left = `${wBoxLeft + 5}px`;
      }
      break;

    case "ArrowLeft":
      // Check if the white box left side is within the green box's left limit
      if (wBoxLeft > 0) {
        detailsW.style.left = `${wBoxLeft - 5}px`;
      }
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
