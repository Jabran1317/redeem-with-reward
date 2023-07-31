var box = document.getElementsByClassName("reward-1");
var ActiveBox = document.getElementsByClassName("active");

var myArray = [
  {
    id: 1,
    image: "/popup and redeem task/svip.png",
    count: 100,
  },
  {
    id: 2,
    image: "/popup and redeem task/vip.png",
    count: 100,
  },
  {
    id: 3,
    image: "/popup and redeem task/loveFrame.png",
    count: 100,
  },
  {
    id: 4,
    image: "/popup and redeem task/svip.png",
    count: 100,
  },
  {
    id: 5,
    image: "/popup and redeem task/svip.png",
    count: 100,
  },
  {
    id: 6,
    image: "/popup and redeem task/svip.png",
    count: 100,
  },
  {
    id: 7,
    image: "/popup and redeem task/svip.png",
    count: 100,
  },
  {
    id: 8,
    image: "/popup and redeem task/partyGliter.png",
    count: 100,
  },
];

var tempArray = [];

function handleCick(index) {
  box[index - 1].classList.toggle("active");
}
var btn = document.getElementById("btn-id");
var popupId = document.getElementById("popup-id");
var closeId = document.getElementById("Close-id");

function buttonFun() {
  popupId.style.display = "flex";
  makeArray();
  display();
  console.log(tempArray);
}
function closeBtn() {
  popupId.style.display = "none";
}
function makeArray() {
  tempArray = [];
  for (let i = 0; i < ActiveBox.length; i++) {
    tempArray.push({
      count: ActiveBox[i].children[0].children[0].innerHTML,
      name: ActiveBox[i].children[1].src,
    });
  }
}
function display() {
  const DataDisp = document.getElementById("popData");
  DataDisp.innerHTML = " ";
  for (let i = 0; i < tempArray.length; i++) {
    DataDisp.innerHTML += `<div class="popup-single">
<img
  class="score-img"
  src="${tempArray[i].name}"
  alt=""
/>
<div class="score">${tempArray[i].count}</div>
</div>`;
  }
}
