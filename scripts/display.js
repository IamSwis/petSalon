function displayPetNames(){
    getE('pets').innerHTML=""
    for(let i=0;i<salon.pets.length;i++){
        getE('pets').innerHTML+=`<p>${salon.pets[i].length}</p>`
    }
    getE(`totalPets`)
.innerHTML=`Total=${salon.pets.length}`
}

function displayPetCards(){
    getE(`pets`).innerHTML="";
    letcard="";
    for(let i=0;i<salon.pets.length;i++){
        let pet = salon.pets[i];
        card+=`
            <div id="${pet.id}" class="petCard">
                <p> Name: ${pet.name}</p>
                <p> Name: ${pet.age}</p>
                <p> Name: ${pet.gender}</p>
                <p> Name: ${pet.service}</p>
                <button oneclick="deletePet(${pet.id})">Delete</button>
        </div>
        `;
    }
    getE(`pets`).innerHTML=card;
}
function displayPetTable(){

}