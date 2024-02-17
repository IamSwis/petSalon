function saveItem(item){//function that sends the item to the local storage
    console.log(item);//the obj
    let val=JSON.stringify(item);
    console.log(val);
    localStorage.setItem("services", val);
}

function readItems(){
    //getting items from local storage
    let data=localStorage.getItem("services");
    if(!data){//NOT data?
        return[];//creates the array        
    }else{
        //
    }
}