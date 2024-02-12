document.forms[0].elements.Email.onblur = function(){
    try{
        emailValidation(this.value);
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
    }catch(e){
        this.classList.remove("is-valid");
        this.classList.add("is-invalid");
        this.nextElementSibling.innerText = e.message;
    }
}

document.forms[0].elements.Password.onblur = function(){
    try{
        passwordValidation(this.value);
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
    }catch(e){
        this.classList.remove("is-valid");
        this.classList.add("is-invalid");
        this.nextElementSibling.innerText = e.message;
    }
}

document.forms[0].onsubmit = function(event){
    try{
        emailValidation(this.elements.Email.value);
        passwordValidation(this.elements.Password.value);
        var xhr = new XMLHttpRequest();
        xhr.open("get","http://127.0.0.1:5500/js/User.json",true);
        xhr.onloadend = function(){
            var data = JSON.parse(xhr.responseText);
            var found = false;
            var targetUser;
            for(user of data){
                if(user.Email == this.elements.Email.value && user.Password == this.elements.Password.value){
                    found = true;
                    targetUser = user;
                }
            }

            if(!found)
                event.preventDefault();
        }

    }catch{
        event.preventDefault();
        alert("Information is missing");
    }
}