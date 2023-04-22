const card = document.getElementsbyClassName(".card");

const onClick = (event) => {
  console.log(event.srcElement.id);
};

card.addEventListener("click", onClick);
