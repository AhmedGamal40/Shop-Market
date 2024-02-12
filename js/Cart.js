if(localStorage.getItem("Cart")){
    var cart = JSON.parse(localStorage.getItem("Cart"));
    for(item in cart){ //accossiative array we use for ... in
        var product = `
        <div class="row" style="padding-left: 20%; padding-right: 20%;width: 100%;">
            <div class="col-md-3">
                <img src="${cart[item].img}" width="60%">
            </div>
            <div class="col-md-8 align-self-center">
                <h4>${item}</h4>
                <br>
                <p class="card-subtitle text-muted">${cart[item].price}</p>
            </div>
            <div class="col-md-1 align-self-center">
                <input type="number" class="form-control" style="width:100%" min="0" value=${cart[item].count} onchange="ValueChanged(this,'${item}')">
            </div>
        </div>`;
        document.getElementById("CartProducts").innerHTML += product;
        document.getElementById("CartProducts").innerHTML += "<hr style='margin-left:15%; margin-right:15%'>";
    }
    document.getElementById("CartProducts").innerHTML +=`<div class="row" style="padding-left: 20%; padding-right: 20%;width: 100%;"></div>`;
    var checkOut = document.createElement("button");
    checkOut.innerText = "Check Out";
    checkOut.classList.add("btn");
    checkOut.classList.add("btn-warning");
    document.querySelector("#CartProducts>.row:last-child").appendChild(checkOut);
}

function ValueChanged(numberBox,pTitle){
    // console.log(numberBox.value);
    // console.log(pTitle);
    cart = JSON.parse(localStorage.getItem("Cart"));
    if(numberBox.value>0)
        cart[pTitle].count = numberBox.value;
    else{
        var sure = confirm("Are you sure you wan to delete "+pTitle);
        if(sure){
            delete cart[pTitle];
            var tobedeleted = numberBox.parentElement.parentElement;
            var hr = tobedeleted.nextElementSibling;
            document.getElementById("CartProducts").removeChild(hr);
            document.getElementById("CartProducts").removeChild(tobedeleted);
            // console.log(tobedeleted);
            // console.log(hr);
        }
        else{
            numberBox.value = 1;
        }
    }
    localStorage.setItem("Cart",JSON.stringify(cart));
}