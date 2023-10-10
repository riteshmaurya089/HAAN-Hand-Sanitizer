const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width * 0.5;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

let trendingItem = [
  {
    id: 13,
    image:
      "https://cdn.shopify.com/s/files/1/0511/9066/1293/products/HandCream_WO_BOTTLE.jpg?v=1677601162",
    name: "Fast Absorbing Hand Cream Pack",
    price: 1590,
  },
  {
    id: 14,
    image:
      "https://cdn.shopify.com/s/files/1/0511/9066/1293/products/048.jpg?v=1651509981",
    name: "Hydrating Hand Sanitizer & Lanyard Pack - Citrus Noon",
    price: 1509,
  },
  {
    id: 15,
    image:
      "https://cdn.shopify.com/s/files/1/0601/3275/3663/products/DD_1024x1024_2x_4655cd2f-b0fa-49ce-a055-a1a066d09961_250x250@2x.jpg?v=1637209490",
    name: "Hand Sanitizer Dew of Dawn",
    price: 1069,
  },
  {
    id: 16,
    image:
      "https://cdn.shopify.com/s/files/1/0511/9066/1293/products/HAAN_MAYO2021_PRODUCT1988.jpg?v=1677596177",
    name: "Rich Hand Cream Pack",
    price: 1950,
  },
  {
    id: 17,
    image:
      "https://cdn.shopify.com/s/files/1/0511/9066/1293/products/63_c39641e2-de27-414f-8191-091de9f25cc0.jpg?v=1651509818",
    name: "Hydrating Hand Sanitizer - Shake it Up 5 Pack",
    price: 1550,
  },
  {
    id: 18,
    image:
      "https://cdn.shopify.com/s/files/1/0511/9066/1293/products/HAAN_MAYO2021_PRODUCT1988.jpg?v=1677596177",
    name: "Rich Hand Cream Pack",
    price: 1570,
  },
  {
    id: 19,
    image:
      "https://cdn.shopify.com/s/files/1/0511/9066/1293/products/01_3.png?v=1668526647",
    name: "Daily rescue pack - Serenity",
    price: 1509,
  },
  {
    id: 20,
    image:
      "https://cdn.shopify.com/s/files/1/0511/9066/1293/products/HAAN_MAYO2021_PRODUCT1988.jpg?v=1677596177",
    name: "Rich Hand Cream Pack",
    price: 1950,
  },
  {
    id: 21,
    image:
      "https://cdn.shopify.com/s/files/1/0511/9066/1293/products/Deodorant_FAMILY_3bottles_grey_background.jpg?v=1681722119",
    name: "Aluminum Free Sensitive Deodorant Pack",
    price: 1770,
  },
  {
    id: 22,
    image:
      "https://cdn.shopify.com/s/files/1/0511/9066/1293/products/030_73833fab-3c4f-4a85-a766-1073b8ff761c.jpg?v=1651509854",
    name: "Hydrating Hand Sanitizer & Refill Pack - Manhattan Glacé",
    price: 1670,
  },
];

let santData = [
  {
    id: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0511/9066/1293/products/077_300x300.jpg?v=1681380477",
    name: "3 Hand Sanitizers Mystic Foliage",
    price: 1590,
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0511/9066/1293/products/Pocket_SA_MF_TalesLotus_1.jpg?v=1678356415",
    name: "Hand Sanitizer Tales of Lotus",
    price: 130,
  },
  {
    id: 3,
    image:
      "https://cdn.shopify.com/s/files/1/0511/9066/1293/products/Pocket_SA_MF_ForestGrace.jpg?v=1678356444",
    name: "Hand Sanitizer Forest Grace",
    price: 1730,
  },

  {
    id: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0511/9066/1293/products/Pocket_SA_MF_WildOrchid_5052f880-3d50-4442-82d2-e3c4eebc8159.jpg?v=1678356511",
    name: "Hand Sanitizer Wild Orchid",
    price: 170,
  },
  {
    id: 5,
    image:
      "https://haanready.com/cdn/shop/products/064_f02a0b61-cc0d-4e6d-994a-9fa368f647d8_450x.jpg?v=1651510078",
    name: "Hydrating Hand Sanitizer - Blossom Elixir 5 Pack",
    price: 1170,
  },
  {
    id: 6,
    image:"https://cdn.shopify.com/s/files/1/0511/9066/1293/products/062_736773a1-2164-4170-9ef2-925154e35d00_300x300.jpg?v=1681379756",
    name: "Hydrating Hand Sanitizer - Daily Moods 5 Pack",
    price: 1670,
  },
  {
    id: 7,
    image:
      "https://haanreadyth.com/cdn/shop/products/citrusnoon_1200x1200.jpg?v=1637146108",
    name: "Hand Sanitizer Citrus Noon",
    price: 190,
  },
  {
    id: 8,
    image:
      "https://haanreadyth.com/cdn/shop/products/manhattan_1024x1024_2x_30dcea09-2d64-4887-a044-5fb07f939def_1200x1200.jpg?v=1637662374",
    name: "Hand Sanitizer Manhattan Glacé",
    price: 198,
  },
  {
    id: 9,
    image:
      "https://cdn.shopify.com/s/files/1/0511/9066/1293/products/26.jpg?v=1651510110",
    name: "Hydrating Hand Sanitizer & Refill Pack - Bright Rose",
    price: 1730,
  },
  {
    id: 10,
    image:
      "https://cdn.shopify.com/s/files/1/0511/9066/1293/products/Pocket_SA_MF_ForestGrace.jpg?v=1678356444",
    name: "Hand Sanitizer Forest Grace",
    price: 1730,
  },
  {
    id: 11,
    image:
      "https://haanready.com/cdn/shop/files/sanitizer_bottle_MorningGlory_grey-background_7da13cdd-a8a8-475b-ab72-a23228c3e257_grande.jpg?v=1693478469",
    name: "Hand Sanitizer Morning Glory",
    price: 1170,
  },
  {
    id: 12,
    image:
      "https://haanready.com/cdn/shop/files/sanitizer_bottle_GingerAle_grey-background_70f1d444-f108-44b5-91a1-e192c3189bb7_grande.jpg?v=1693478321",
    name: "Hand Sanitizer Spicy Ginger Ale",
    price: 1670,
  },
];

document.querySelector("select").addEventListener("click", () => {
  let val = document.querySelector("select").value;

  if (val === "ascending") {
    let newarr = santData.sort((a, b) => {
      return a.price - b.price;
    });
    santDisplay(newarr);
  } else if (val === "descending") {
    let newarr = santData.sort((a, b) => {
      return b.price - a.price;
    });
    santDisplay(newarr);
  } else {
    santDisplay(santData);
  }
});

santDisplay(santData);
function santDisplay(santData) {
  document.getElementById("container").innerHTML = "";
  santData.map((elm,index) => {
    let card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.className = "img";
    img.src = elm.image;

    let detail = document.createElement("div");
    detail.className = "detail";
    let name = document.createElement("p");
    name.textContent = elm.name;

    let price = document.createElement("p");
    price.textContent = `Rs:${elm.price}`;

    let carticon = document.createElement("div");
    carticon.setAttribute("class", "cart-icon");

    carticon.innerHTML = `<i class="fas fa-shopping-bag" style="color: #E0115F;"></i>`;
    // carticon.append(i)
    carticon.addEventListener("click", ()=>{
      adding(elm);
    });
    detail.append(name, price);
    card.append(img, carticon, detail);
    document.getElementById("container").append(card);
    card.addEventListener("click", () => {
      if(elm.id ==1){
        window.location.href = "#"
      }
    });
  });
}
tredDisplay(trendingItem);
function tredDisplay(trendingItem) {
  document.querySelector(".product-container").innerHTML = "";
  trendingItem.map((elm) => {
    let card = document.createElement("div");
    card.className = "product-card";

    // card.setAttribute("class","card")

    let product_img = document.createElement("div");
    product_img.setAttribute("class", "product-image");

    let img = document.createElement("img");
    img.className = "img";
    //    img.setAttribute("id","")

    img.src = elm.image;

    let detail = document.createElement("div");

    detail.setAttribute("class", " detail product-info");
    let name = document.createElement("p");
    name.textContent = elm.name;

    let price = document.createElement("p");
    price.textContent = `Rs:${elm.price}`;

    let carticon = document.createElement("div");
    carticon.setAttribute("class", "cart-icon");
    carticon.setAttribute("id", "icon");

    carticon.innerHTML = `<i class="fas fa-shopping-bag" style="color: #E0115F;"></i>`;
    // carticon.append(i)
    product_img.append(img, carticon);
    carticon.addEventListener("click", () => {
      adding(elm);
    });
    detail.append(name, price);
    card.append(product_img, detail);
    // cards.append(card)
    document.querySelector(".product-container").append(card);
  });
}

let cartItems = JSON.parse(localStorage.getItem("cartitem")) || [];
function adding(el) {
  cartItems.push(el);
  localStorage.setItem("cartitem", JSON.stringify(cartItems));
}
