let petID=0;
//constructor
function Pet(n,a,g,s){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.services=s;
    this.id=petID++;
}

function getE(id){
    return document.getElementById(id);
}
//get elements from html
let inputName= getE("txtName");
let inputAge= getE("txtAge");
let inputGender= getE("txtGender");
let inputService= getE("txtService");

function isValid(aPet){
    let validation=true;
    //clears the  elements if its the text ia not proper

getE("txtName").classList.remove("alert-error");
getE("txtAge").classList.remove("alert-error")
if(aPet.name==""){
    //if the pet is not valid function (no name or age not proper)
    validation=false;
    getE("txtName").classList.add("alert-error");
}
if(aPet.age==""){
    validation=false;
    getE("txtAge").classList.add("alert-error");
}
return validation;
}

//contstructor
function showNotifications(msg,type){
    getE("notifications").classList.remove("hidden");
    getE("notifications").innerHTML= `<p class="${type}">${msg} </p>`;

setTimeout(function(){
    getE("notifications").classList.add("hidden");
},3000);
}
function register(){
    //1)getting value
    //2) create the newPet using the constructor
    let newPet = new Pet (inputName. value, inputAge. value, inputGender. value, inputService. value)
    console.log(newPet);
    
    if(isValid(newPet)==true){
        //3 push the newPet to the array
        salon.pets.push(newPet);
        //4) call the display function
        displayPetCards();
        //5 clears the input
        inputName.value="";
        inputAge.value="";
        inputGender.value="";
        inputService.value="";
        showNotifications("Successful registration","alert-error");
        }else{
        showNotifications ("Not Proper Please fill out all the required fields","alert-error");
        }
}


function deletePet(petID){
    let deleteIndex;// to get the index of the array (position of the obj)
    for(let i=0;i<salon.pets.length; i++){
        let pet = salon.pets [i];
        if(pet.id==petID){
            deleteIndex=i; 
            break;
        }
    }
    getE(petID).remove();//remove from the HMTL
    salon-pets.splice(deleteIndex,1);// remove the pet from the array
}
function init(){
    //creating predefined obj

let pet1=new Pet ("Zeus", 70, "Male", "Grooming"); 
let pet2=new Pet ("Titus", 60, "Male", "Vaccine"); 
let pet3=new Pet ("Kyro", 50, "Male", "Nails"); 
let pet4=new Pet ("Lola" , 70, "Female", "Grooming"); 
salon.pets.push(pet1, pet2, pet3, pet4);

// execution for the function
displayPetCards ();
displayPetNames();
displayFooterInfo();
};

window.onload=init;// wait to render the HTML
