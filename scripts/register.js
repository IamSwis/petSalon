let salon={
    name:"The fasion pet",
    phone:"999-999-9999",
    address:{
        street:"Palm",
        number:"262-k",
        zip:"20001"
    },

    pets:[
        {
            name:"Zeus",
            age:"25",
            gender:"male",
            Service:"Ear flush",
            Breed:"Pitbull",
            
        
        },
        {
            name:"micro",
            age:"20",
            gender:"male",
            Service:"haircut",
            Breed:"doodle",
            
        
        },       
        {
            name:"kayla",
            age:"21",
            gender:"female",
            Service:"Nails cut",
            Breed:"poodle"
        
        }] //pet array
}
function displayPetNames() {
    let content = ""; // Initialize an empty string to accumulate pet names
    for (let i = 0; i < salon.pets.length; i++) {
        content += `<p>${salon.pets[i].name}</p>`; // This area isss used rto Append each pet's name within a paragraph tag
    }
    document.getElementById('pets').innerHTML = content; // Set the content once after accumulating all pet names
    document.getElementById('totalPets').innerHTML = `Total=${salon.pets.length}`; // Corrected typo in length
}

function displayFooterInfo() {
    document.getElementById("info").innerHTML = `
    <p>Welcome to ${salon.name} located at ${salon.address.street} ${salon.address.number}, ZIP: ${salon.address.zip}</p>
    `;
}

// Remember to call displayPetNames somewhere in your code if you need to display the pet names on page load or on a specific event.
displayPetNames();
displayFooterInfo();

