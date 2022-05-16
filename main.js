document.addEventListener("DOMContentLoaded", function () {
  PopulateAll();
});

function PopulateAll() {
  fetch("./goodCosmetics.json")
    .then((response) => response.json())
    .then((data) => Populate(data, "goodList"));

  fetch("./avarageCosmetics.json")
    .then((response2) => response2.json())
    .then((data2) => Populate(data2, "avarageList"));

  fetch("./badCosmetics.json")
    .then((response3) => response3.json())
    .then((data3) => Populate(data3, "badList"));
}

function Populate(good, listName) {
  console.log(good);
  var listDiv = document.getElementById(listName);
  var ol = document.createElement("ol");
  listDiv.appendChild(ol);
  for (var i = 0; i < good.ingredients.length; i++) {
    var li = document.createElement("li");
    var textnode = document.createTextNode(good.ingredients[i].name);
    li.appendChild(textnode);
    ol.appendChild(li);
  }
}
