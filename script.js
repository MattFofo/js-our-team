/*
Viene fornito un layout di base. Come prima cosa nel file js definitevi un array di oggetti che rappresentano i membro del team (prendete i dati dallo screen fornito). Ogni membro deve avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell'html, stampiamo dinamicamente una card per ogni membro del team.
*/



const eleTeamContainer = document.querySelector(".team-container");

// arrey di oggetti che rappresentano i membri del team
const arrUsersData = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'img/wayne-barnett-founder-ceo.jpg'

    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'img/angela-caroll-chief-editor.jpg'

    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'img/walter-gordon-office-manager.jpg'

    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'img/angela-lopez-social-media-manager.jpg'

    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'img/scott-estrada-developer.jpg'

    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'img/barbara-ramos-graphic-designer.jpg'

    },
    
];


createEleCard();




function createEleCard() {

    //ciclo per scorrere gli oggetti dell'arrey
    for (const userID in arrUsersData) {

        //creo un elemento per ogni oggetto dell'arrey e inserisco i dati membri
        let eleCard = document.createElement("div")
        eleCard.classList.add("team-card")
        eleCard.innerHTML = `          
        
            <div class="card-image">
                <img
                    src= ${arrUsersData[userID]["img"]}
                    alt= ${arrUsersData[userID]["name"]}
                />
            </div>
            <div class="card-text">
                <h3>${arrUsersData[userID]["name"]}</h3>
                <p>${arrUsersData[userID]["role"]}</p>
            </div>
            `
        
        eleTeamContainer.append(eleCard);
    }  
}





/////////////////////////////////////////////////////////////////////////

// BONUS

const eleButtonAddMember = document.getElementById("addMemberButton");
const eleInputName = document.getElementById("name");
const eleInputRole = document.getElementById("role");
const eleInputImage = document.getElementById("image");

eleButtonAddMember.addEventListener('click', createNewCard);


//funzione per dimensionare tutte le immagini delle card
function imagesDimension() {
    const eleImges = document.getElementsByTagName("img");

    //ciclo per ridimensionare immagini
    for (let i = 0; i < eleImges.length; i++) {
        
        eleImges[i].style.width = "370px";
        eleImges[i].style.height = "400px";       
    }    
}



function createNewCard() {

    //creo una nuova card con i valori ricevuti dagli input
    let eleCard = document.createElement("div")
    eleCard.classList.add("team-card")

    eleCard.innerHTML = `          
    <div class="card-image">
        <img
            src= ${eleInputImage.value}
            alt= ${eleInputName.value}
        />
    </div>
    <div class="card-text">
        <h3>${eleInputName.value}</h3>
        <p>${eleInputRole.value}</p>
    </div>
    `
    
    eleTeamContainer.append(eleCard);

    imagesDimension(); 

    //trasformo la nuova card in un oggetto e lo aggiungo all'arrUsersData
    let UserData = {
        name: eleInputName.value,
        role: eleInputRole.value,
        img:  eleInputImage.value  
    }

    arrUsersData.push(UserData)

    resetForm();

}

function resetForm() {
    eleInputName.value = ''
    eleInputRole.value = ''
    eleInputImage.value = ''
    
}