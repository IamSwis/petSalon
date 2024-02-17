var services=[];
//similar to window.load
$(document).ready(function(){
    console.log("Services page");

    //add the hook events
    $("#btnService").click(addService);

    //loading data
    displayItems(services);
});

 function Service(description,price){ //This is a constructor , I'm using this to create and manage bookings for the service 
    this.description=description;
    this.price=price;
    
}

function addService(){
    let inputService = $("#txtService").val();
    let inputPrice =$("#txtPrice").val();
    let newService = new Service(inputService,inputPrice); //This is where we need to have price be delivered 
    services.push(newService);
    saveItem(newService); //Sending from the local storage
    displayItems(services);

}

function displayItems(itens){ //The function that is to choose the services
    let htmlList=$("#services");
    htmlList.html("");//clears the division (content)
    let li;
    for(let i=0;i< items.length; i++){
        let item=items[i];
        li=`<li>${item.description}</li>`;
        htmlList.append(li);// This sends the new data 
    }
}