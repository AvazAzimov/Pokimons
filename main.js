var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input")
var elList = document.querySelector(".list");
var elSelect = document.querySelector(".js-select");

function pokeFunc(info){ 
  elList.innerHTML = null;
  for (const poke of info) {
    
    var pokeItem = document.createElement("li");
    var pokeTitle = document.createElement("h3");
    var pokeNum = document.createElement("span");
    var pokeImg = document.createElement("img");
    var pokeWeight = document.createElement("span");
    var pokeTime = document.createElement("time");
    var pokeText = document.createElement("p");
    
    pokeItem.classList.add("poke-itme");
    pokeTitle.classList.add("poke-title");
    pokeNum.classList.add("poke-num");
    pokeImg.classList.add("poke-img");
    pokeWeight.classList.add("poke-weight");
    pokeTime.classList.add("poke-time");
    pokeText.classList.add("poke-info");
    
    
    pokeTitle.textContent = poke.name;
    pokeNum.textContent = poke.num;
    pokeImg.src = poke.img;
    pokeImg.alt = poke.name;
    pokeWeight.textContent = poke.weight;
    pokeTime.textContent = poke.spawn_time;
    pokeText.textContent = poke.weaknesses;
    
    
    pokeItem.append(pokeTitle,pokeNum,pokeImg,pokeWeight,pokeTime,pokeText);
    elList.appendChild(pokeItem);
    
    
  }
}

function selectArr() {
  var optionArr = []
  pokemons.forEach(itemes => {
      itemes.weaknesses.forEach(function (cate){
          if(!optionArr.includes(cate)){
              optionArr.push(cate)
          }
      })
      
    })
    console.log(optionArr);

  
  optionArr.forEach(ganre => {
      var elOption = document.createElement("option");
      elOption.textContent = ganre;
      elOption.value = ganre
      elSelect.appendChild(elOption);
  })
}

selectArr()

elForm.addEventListener("keyup", function (evt) {
  evt.preventDefault(); 
  var inputValue = elInput.value;
  var selectVal = elSelect.value;
  var newPoke = new RegExp(inputValue , "gi")
  console.log(newPoke);
  
  var pokeArr = pokemons.filter(item => {
    return item.name.match(newPoke)&& (item.weaknesses.includes(selectVal) || selectVal ==("all") );
  });

  console.log(pokeArr);
  if(pokeArr.length > 0){ 
    pokeFunc(pokeArr);
  }else {
    elList.textContent = "There is no such thing";
  }
});
pokeFunc(pokemons); 
