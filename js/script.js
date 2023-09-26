var allproducts = document.querySelectorAll(".parent  .product")
var div = document.querySelector("#cart")
var btn = document.querySelector("#btn")
var totalprice = 0


allproducts.forEach(function (item){
    item.onclick =function (){        
        div.innerHTML += item.textContent +"/ "   

        totalprice += +(item.getAttribute("price"))
        
        if(div.innerHTML !=""){
            btn.style.display="block";
            btn.style.width="180px";
            btn.style.height="60px";
            btn.style.borderRadius="30px";
            btn.style.cursor="pointer";

            

        }

    }
})

btn.onclick = function(){
    div.innerHTML=(totalprice)
    console.log(totalprice)
}



confirm("Are you sure to buy?")
