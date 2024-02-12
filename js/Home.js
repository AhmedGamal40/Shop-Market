// cookies

if (location.search) {
  var result = new URLSearchParams(unescape(location.search));
  console.log(result);
  var date = new Date();
  date.setDate(date.getDate() + 1);
  addCookie("FullName", result.get("FullName"), date);
  addCookie("Email", result.get("Email"), date);
}

if (!(getCookie("Email") && getCookie("FullName"))) {
  location.replace("Register.html");
} else {
  document.getElementById("login-btn").innerText =
    "Welcome, " + getCookie("FullName");
}

// search
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  // remove
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};


let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  // remove
  shoppingCart.classList.remove("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  // remove
  shoppingCart.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  // shoppingCart.classList.remove("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
  // loginForm.classList.remove("active");
};

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,

  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlids: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

// API
function getProducts() {
  var XHR = new XMLHttpRequest();
  XHR.open("get", "http://127.0.0.1:5500/js/prod.json", true);
  XHR.onloadend = () => {
    displayProducts(JSON.parse(XHR.responseText));
  };
  XHR.send();
}

getProducts();

function displayProducts(products) {
  for (product of products) {
    var card = document.createElement("div");
    card.setAttribute("class", "pro");
    card.innerHTML = ` <img src="${product.image}"  alt="">
     <h3>${product.title}</h3>
            <div class="price"> ${product.price} $</div>
             <div class="stars">
                    <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                     <i class="fas fa-star-half-alt"></i>
                  </div>
                 <button type="button" class="btn" onclick="AddToCart(${product.id},'${product.title}','${product.image}','${product.price}')">Add to Cart</button>`;

    document.getElementById("pro-container").append(card);
  }
}

// AddToCart

function AddToCart(pID, pTitle, pImage, pPrice) {
  //accossiative array
  var Cart = {};

  //if there is cart already
  if (localStorage.getItem("Cart")) {
    Cart = JSON.parse(localStorage.getItem("Cart"));

    //product already exists or not
    if (Cart[pTitle]) {
      Cart[pTitle].count++;
    } else {
      Cart[pTitle] = { id: pID, img: pImage, price: pPrice, count: 1 };
    }
  }
  //if no cart
  else {
    Cart[pTitle] = { id: pID, img: pImage, price: pPrice, count: 1 };
  }

  localStorage.setItem("Cart", JSON.stringify(Cart));
}

function OpenCartWindow() {
  var cartWindow = open("./Cart.html", "_blank", "width=1500px,height=700px");
}

document.getElementById("logout").onclick = function () {
  removeCookie("Email");
  removeCookie("FullName");
  location.assign("./Register.html");
};
