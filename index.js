let ourGalery = Array.from(document.querySelectorAll(".pro-img img"));
let mainImg = document.querySelector(".main-img img");
let rightForMobile = document.querySelector("#for-mobile-right");
let leftForMobile = document.querySelector("#for-mobile-left");
let bigImgForMobile = document.querySelector(".mainimg-mobile img");
let currentImg = 0;

ourGalery.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    ourGalery.forEach((img) => {
      if (img.parentElement.classList.contains("active")) {
        img.parentElement.classList.remove("active");
      }
    });

    currentImg = index;
    img.parentElement.classList.add("active");

    //create layout Element and append it
    let layout = document.createElement("div");
    layout.className = "layout";
    document.body.appendChild(layout);
    // Create popub
    let popup = document.createElement("div");
    let imgEle = document.createElement("img");

    // create icons and append them
    let rightIcon = document.createElement("i");
    let leftIcon = document.createElement("i");
    rightIcon.className = "fas fa-angle-right";
    leftIcon.className = "fas fa-angle-left";
    rightIcon.setAttribute("id", "right-mobile");
    leftIcon.setAttribute("id", "left-mobile");
    popup.appendChild(rightIcon);
    popup.appendChild(leftIcon);

    imgEle.className = "active";
    imgEle.src = img.src;
    mainImg.src = img.src;

    // Move slide to right
    rightIcon.onclick = function () {
      if (currentImg < 3) {
        currentImg++;
        imgEle.src = ourGalery[currentImg].src;
      }
    };

    // Move slide to left
    leftIcon.onclick = function () {
      if (currentImg > 0) {
        currentImg--;
        imgEle.src = ourGalery[currentImg].src;
      }
    };

    //append img in popup
    popup.appendChild(imgEle);
    popup.className = "popup";

    //create cansel button
    let canselButton = document.createElement("span");
    let canselText = document.createTextNode("X");
    canselButton.appendChild(canselText);
    canselButton.className = "cansel";
    popup.appendChild(canselButton);

    // append all to body
    document.body.appendChild(popup);

    canselButton.onclick = function (e) {
      popup.remove();
      layout.remove();
    };
  });
});

// Get Elements for cart actions
let bage = document.querySelector(".store-icon");
let personAvatar = document.querySelector(".avatar img");
let addToCart = document.querySelector(".add");
let minus = document.querySelector(".minus");
let increase = document.querySelector(".increase");
let cartCheck = document.querySelector(".cart");
let storyIcon = document.querySelector(".store-icon");
let trash = document.querySelector(".cart-informiton i");
let cartContent = document.querySelector(".cart-informiton");
let result = document.querySelector(".result");
let numberOfProduct = document.querySelector(".product-num");
let priceInCart = document.querySelector(".price-cart");
let procuctsSpan = document.querySelector(".number-products");
//cart functions

personAvatar.onclick = function () {
  personAvatar.parentElement.classList.toggle("active");
  if (personAvatar.parentElement.classList.contains("active")) {
    cartCheck.style.display = "block";
  } else {
    cartCheck.style.display = "none";
  }
};

storyIcon.onclick = function () {
  storyIcon.classList.toggle("active");
  if (storyIcon.classList.contains("active")) {
    cartCheck.style.display = "block";
  } else {
    cartCheck.style.display = "none";
  }
};

trash.onclick = function () {
  cartContent.innerHTML = "No Products";
  procuctsSpan.style.display = "none";
};

increase.onclick = function () {
  result.innerHTML++;
};
minus.onclick = function () {
  if (result.innerHTML === "0") {
    return false;
  } else {
    result.innerHTML--;
  }
};
addToCart.onclick = function () {
  cartContent.style.display = "flex";
  numberOfProduct.innerHTML = result.innerHTML;
  let theCount = priceInCart.innerHTML * result.innerHTML;
  priceInCart.innerHTML = theCount + ".00";
  procuctsSpan.style.display = "block";
  procuctsSpan.innerHTML = result.innerHTML;
};

// Mobile logic

let photos = [
  "/the-new-website/images/image-product-1.jpg",
  "/the-new-website/images/image-product-2.jpg",
  "/the-new-website/images/image-product-3.jpg",
  "/the-new-website/images/image-product-4.jpg",
];

let currentImgForMobile = 0;
rightForMobile.onclick = function () {
  if (currentImgForMobile === 3) {
    return false;
  } else {
    currentImgForMobile++;
  }
  bigImgForMobile.src = photos[currentImgForMobile];
};

leftForMobile.onclick = function () {
  if (currentImgForMobile === 0) {
    return false;
  } else {
    currentImgForMobile--;
  }
  bigImgForMobile.src = photos[currentImgForMobile];
};

// Mobile Menu
let closeIcon = document.querySelector(".menu .close");
let menu = document.querySelector(".menu");
let burgerIcon = document.querySelector(".logo-content > i");

// Function
burgerIcon.onclick = function () {
  menu.style.transform = "translateX(0px)";
  let layout = document.createElement("div");
  layout.className = "layout";
  document.body.appendChild(layout);
  document.body.appendChild(layout);
};
closeIcon.onclick = function () {
  menu.style.transform = "translateX(-264px)";
  document.querySelector(".layout").remove();
};
