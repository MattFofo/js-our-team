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
        img: 'img\walter-gordon-office-manager.jpg'

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
console.log('arrUsersData', arrUsersData)


for (const key in arrUsersData) {
    console.log(key, arrUsersData[key])

    let ele = document.createElement('div')
    ele.innerHTML = `          
    <div class="team-card">
        <div class="card-image">
            <img
                src="img/wayne-barnett-founder-ceo.jpg"
                alt="Wayne Barnett"
            />
        </div>
        <div class="card-text">
            <h3>Wayne Barnett</h3>
            <p>Founder & CEO</p>
        </div>
    </div>`
    
    eleTeamContainer.append(ele);

}