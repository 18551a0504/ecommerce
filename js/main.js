fetch("https://18551a0504.github.io/ecommerce/data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	displayData(data)
})
function displayData(info){
	var bodyElement=document.querySelector("body");
    var row=document.createElement("section")
    row.classList.add("row","justify-content-center");
    bodyElement.append(row)
    info.Mobiles.map(value=>{
    	var column=document.createElement("article")
    	column.classList.add("col-sm-10","col-md-6","col-lg-3");
    	row.append(column)

    	//Card
    	var card=document.createElement("div");
    	card.classList.add("card")

    	// Card-body
    	var cardBody=document.createElement("div");
    	cardBody.classList.add("card-body")

    	//Image
    	var imageElement=document.createElement("img");
    	imageElement.src=value.image;
    	imageElement.classList.add("img-responsive")
    	imageElement.alt=value.name;

    	 //Name

    	 var name=document.createElement("h3");
    	 name.textContent=value.name;
    	 name.classList.add("text-center","text-primary")

    	  //price

    	  var price=document.createElement("p");
    	  price.classList.add("text-center","text-secondary")
    	  price.innerHTML="<s>₹ "+value.price+" /-</s>";

    	  //originalprice

    	  var oPrice=document.createElement("p");
    	  oPrice.textContent=value.originalPrice;
    	  oPrice.classList.add("text-center","text-danger")

          //button
          var buttonParent=document.createElement("div");
          buttonParent.classList.add("d-grid","gap-2");

    	  var button=document.createElement("button");
    	  button.classList.add("btn","btn-block","btn-primary");
    	  button.textContent="Add To Cart"
    	  buttonParent.append(button)


    	cardBody.append(imageElement)

    	cardBody.append(name)
    	cardBody.append(price)
    	cardBody.append(oPrice)
    	cardBody.append(buttonParent)

    	card.append(cardBody);
    	column.append(card);

    })	        
}
	
