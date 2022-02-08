let gridBox = document.querySelector(".gridBox");
let slider = document.querySelector("#slider");
let currValue = document.querySelector(".currValue");
let setGrid = document.querySelector(".clickSetGrid");
let reset = document.querySelector(".reset-button");


// default is set to 5 (from index.html)
let userChoice = slider.value;
makeGrid(userChoice);


// sets the grid according the slider value
setGrid.addEventListener("click", () => {
  resetTheGrid();
  makeGrid(slider.value);
  userChoice = slider.value;
});


// ready to draw
gridBox.addEventListener("mouseover", (e) => {
  e.target.classList.add("touched");
});


// ready to reset
reset.addEventListener("click", resetTheGrid);



// updates slider value as you are sliding
currValue.textContent = slider.value;
slider.addEventListener("input", function () {
  currValue.textContent = this.value;
});



function makeGrid(userChoice) {


//   to prevent compression of new divs due to previously formed grids
  removeGrid();

  // create divs
  for (let i = 1; i <= userChoice ** 2; i++) {
    let item = document.createElement("div");
    item.classList.add("item");
    item.classList.add(`item${i}`);
    gridBox.appendChild(item);
  }

// restructure the grid
  gridBox.setAttribute(
    "style",
    `grid-template: repeat(${userChoice}, 1fr) / repeat(${userChoice}, 1fr);`
    );
};
  
  function resetTheGrid() {
    let allBoxes = document.querySelectorAll(".touched");
    allBoxes.forEach(function (currentValue) {
      currentValue.classList.remove("touched");
    });
  };
  function removeGrid(){
    let childToRemove = gridBox.lastElementChild;
    while(childToRemove){
      gridBox.removeChild(childToRemove);
      childToRemove = gridBox.lastElementChild;
    }
  }