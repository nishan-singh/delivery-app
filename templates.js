const ourItems = [
  {
    name: "Saag",
    price: 7.9,
    quantity: 1,
  },
  {
    name: "Allu Matar",
    price: 7.9,
    quantity: 1,
  },
  {
    name: "Vegetable Biryani",
    price: 6.9,
    quantity: 1,
  },
  {
    name: "Mix Sabzi",
    price: 8.9,
    quantity: 1,
  },
  {
    name: "Paneer Makhani",
    price: 9.9,
    quantity: 1,
  },
  {
    name: "Mushroom Matar",
    price: 7.9,
    quantity: 1,
  },
];

function foodItemsTemplate(i) {
  return /*html*/ `
    <div class="each-item" onclick="addToBasket(${i})">
  <div>
    <h3 id="item${i}">${ourItems[i]["name"]}</h3>
    <h3 id="price${i}">${ourItems[i]["price"]}0 €</h3>
  </div>
  <div class="btn-wrapper">
    <span>+</span>
  </div>
</div>
   `;
}

function basketItemsTemplate(i) {
  return /*html*/ `
              
  <div id="add-items-wrapper${i}">
    <div class="filled-basket-wrapper">
          <div class="item-name-quan-wrapper">
                <div class="item-quantity">
                  <span id="total-items${i}">${ourItems[i]["quantity"]}</span>
                </div>
                <div class="item-name" id="item-name${i}">${ourItems[i]["name"]}</div>
            </div>
              <div class="item-price">
                <span id="each-item-price${i}">${ourItems[i]["price"]}</span>0 €
              </div>
            </div>
            <div class="plus-minus-btns">
              <div onclick=" decreaseItem(${i})">
                <img src="./img/icons/minus-sign.png" alt="">
              </div>
              <div onclick="increaseItem(${i})">
                <img src="./img/icons/plus.png" alt="">
              </div>
            </div>
      </div>
  </div>
`;
}
