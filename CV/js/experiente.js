const experiente = [
    {
        id:"1",
        name:"Practice backend",
        description: "I learned Java with Spring framework for the backend part of an application",
        startDate: "Start Date: 05/05/2022",
        realDate: "2022/05/05",
        endDate: "End Date: 05/06/2022",
    },
    {
        id:"2",
        name:"Voluntariat Festivalul Medieval",
        description: "Descriere id2",
        startDate: "Start Date: 04/08/2019",
        realDate:"2019/08/04",
        endDate: "End Date: 18/08/2019",
    },
    {
        id:"3",
        name:"Voluntariat",
        description: "Descriere test3",
        startDate:"Start Date: 04/07/2021",
        realDate:"2021/07/04",
        endDate:"End Date: 04/08/2021",
    },
    {
        id:"4",
        name:"Practice Frontend",
        description: "I am learning HTML, CSS and JavaScript for web development at Endava",
        startDate:"Start Date: 04/07/2022",
        realDate:"2022/07/04",
        endDate:"End Date: 04/08/2022",
    }


];

console.log(experiente.sort(byDate));

function byDate(a,b){
    if(a.realDate > b.realDate){
        return 1;
    }else if (b.realDate > a.realDate){
        return -1;
    }else{
        return 0;
    }
}

function generateExperiencesCard(experienta){
   const experientaCard = document.createElement("div"); //creeam acest div pentru a avea unde sa puneam in html obiectele pe care vrem sa le afisam
   experientaCard.className = "experienteChildContainer";
   
   const experientaName = document.createElement("h3"); // aici punem doar numele
   experientaName.innerText = experienta.name;
   experientaCard.appendChild(experientaName);

   const experientaDescription = document.createElement("p");
   experientaDescription.innerText = experienta.description;
   experientaCard.appendChild(experientaDescription);

   const experientaStartDate = document.createElement("p");
   experientaStartDate. innerText = experienta.startDate;
   experientaCard.appendChild(experientaStartDate);

   const experientaEndDate = document.createElement("p");
   experientaEndDate. innerText = experienta.endDate;
   experientaCard.appendChild(experientaEndDate);



    return experientaCard; // functia ne returneaza div-ul in care am pus obiectul

}

function populateExperienteContainer(experienteArray){ // experienteArray este doar un parametru nu obiectul in sine
    const mainParent = document.getElementById("experienteContainer"); // luam o referinta pentru div-ul din html in care vrem sa punem toate obicetele
    experienteArray.forEach(function(experientaObject, index){
        const card = generateExperiencesCard(experientaObject);  // pentru fiecare obiect din experiente se apeleaza functia de generate
   
        mainParent.appendChild(card); // dam append la fiecare div pe care l-am creeat in div-ul parinte pe care il avem in html
    })
 
 
}

// console.log(generateExperiencesCard(experiente[0]));
populateExperienteContainer(experiente);