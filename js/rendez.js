 
const nam =document.getElementById('nom');
const emails =document.getElementById('email');
const medecins =document.getElementById('medecin');
const dates =document.getElementById('date');
const rendez =document.getElementById('btn-rendez');

let mood = 'add';
let tmp;






let arryre;
if(localStorage.detels != null){
    arryre = JSON.parse(localStorage.detels)
}else{ 
arryre = [];
}

rendez.onclick=function(){
    let rendezVous ={
        name: nam.value,
        email:emails.value,
        medecine: medecins.value,
        date: dates.value

    }
    if(mood=='add'){
    arryre.push(rendezVous)
    localStorage.setItem('detels', JSON.stringify(arryre))
    console.log(arryre)
    showdata() }
    else{
        arryre[tmp] =rendezVous
        mood = 'add'
        showdata() 
    }
}

function showdata(){
    let data = document.querySelector('.data');
    data.innerHTML = ""
    for(let i = 0 ; i < arryre.length;i++){ 
        console.log(arryre[i])
        data.innerHTML += `
         <div class="bg-blue-100 rounded-lg w-4/5 h-fit p-3 flex justify-between items-center shadow-lg doctor-card m-2 flex-">
                <div class=" flex flex-col gap-4 ">
                <h3>name: ${arryre[i].name} </h3>
                <h4>email: ${arryre[i].email}</h4>
                <h5>Médecin: ${arryre[i].medecine} </h5>
                <h6>date: ${arryre[i].date}</h6>
                </div>
                <div class="flex gap-3 flex-wrap">
                    <button onclick="modifeData(${i})" id="btn-modifi" class=" mt-5 text-white bg-blue-500 font-semibold rounded-xl px-2 py-2  cursor-pointer hover:bg-blue-600 transition">✏️ Modifier</button>
                     <button onclick="SupprimerData(${i})" id="btn-suppr" class=" mt-5 text-white bg-blue-500 font-semibold rounded-xl px-2 py-2  cursor-pointer hover:bg-blue-600 transition">🗑️ Supprimer</button>
                      
                </div>
            </div>`
            console.log(data)

}
}
showdata()

function SupprimerData(i){
   arryre.splice(i,1);
   localStorage.detels=JSON.stringify(arryre);
   showdata()
}
function modifeData(i){
    nam.value =arryre[i].name;
    emails.value=arryre[i].email;
    medecins.value=arryre[i].medecine;
    dates.value=arryre[i].date;
    mood = 'update';
    tmp = i;
    scroll({
        top:0
    })
    
}

