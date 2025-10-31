

const darkModeToggle = document.getElementById('check');    

if (darkModeToggle) {
    
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
    
    darkModeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', this.checked);
    });
}

document.addEventListener('DOMContentLoaded', function() {
 
    const tousBtn = document.getElementById('tous');
    const cardiologueBtn = document.getElementById('cardiologue');
    const dermatologueBtn = document.getElementById('dermatologue');
    const pediatreBtn = document.getElementById('pediatre');
    const doctorCards = document.querySelectorAll('.doctor-card');

    let currentCategory = 'Tous';

   
    function filterDoctors() {
        doctorCards.forEach(card => {
            const doctorSpecialty = card.querySelector('h3').textContent.toLowerCase();
            
            const categoryMatch = currentCategory === 'Tous' || 
                                 doctorSpecialty.includes(currentCategory.toLowerCase());
            
           
            if (categoryMatch) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

   
    tousBtn.addEventListener('click', () => {
        currentCategory = 'Tous';
        filterDoctors();
    });

    cardiologueBtn.addEventListener('click', () => {
        currentCategory = 'Cardiologue';
        filterDoctors();
    });

    dermatologueBtn.addEventListener('click', () => {
        currentCategory = 'Dermatologue';
        filterDoctors();
    });

    pediatreBtn.addEventListener('click', () => {
        currentCategory = 'Pédiatre';
        filterDoctors();
    });
});












let table = [ 
    {
        img: '/images/Scientist Analyzing Specimens.jpg',
        nom : 'Dr. Ahmed Bennani',
        specialite: '⚕️ Cardiologue',
        deponibilite: '✓ Disponible'
    },
    {
        img: '/images/Scientist Analyzing Specimens.jpg',
        nom : 'Dr. Sara Alami',
        specialite: '💊 Dermatologue',
        deponibilite: '✓ Disponible'
    },
    {
        img: '/images/Scientist Analyzing Specimens.jpg',
        nom : 'Dr. Karim Idrissi',
        specialite: '👶 Pédiatre',
        deponibilite: '✓ No Disponible'
    },
    {
        img: '/images/Scientist Analyzing Specimens.jpg',
        nom : 'Dr. Fatima Zahrae',
        specialite: '⚕️ Cardiologue',
        deponibilite: '✓ Disponible'

    },
    {
        img: '/images/Scientist Analyzing Specimens.jpg',
        nom : 'Dr. Youssef Hakim',
        specialite: '💊 Dermatologue',
        deponibilite: '✓ Disponible'

    },
    {
        img: '/images/Scientist Analyzing Specimens.jpg',
        nom : 'Dr. Nadia Benkirane',
        specialite: '👶 Pédiatre',
        deponibilite: '✓ Disponible'

    },
    {
        img: '/images/Scientist Analyzing Specimens.jpg',
        nom : 'Dr. Omar Tazi',
        specialite: '⚕️ Cardiologue',
        deponibilite: '✓ Disponible'

    },
    {
        img: '/images/Scientist Analyzing Specimens.jpg',
        nom : 'Dr. Leila Fassi',
        specialite: '💊 Dermatologue',
        deponibilite: '✓ Disponible'

    },
];

const doctors=document.getElementById('med');
table.map((value)=>{
    doctors.innerHTML+= 
    `<div class="bg-blue-100 rounded-lg w-60 h-[20em] p-3 flex flex-col gap-5 shadow-lg doctor-card">
        <img src="${value.img} " alt="Dr. Ahmed Bennani" class="rounded-lg h-32 object-cover">
        
         <h2 class="font-bold text-xl">${value.nom} </h2>
        <h3 class="font-semibold text-blue-600">${value.specialite} </h3>
        ${value.deponibilite === '✓ Disponible' ?
            `
             <span class="text-green-600 w-fit rounded-3xl font-semibold px-3 py-1 bg-green-50"> ${value.deponibilite}</span>
        <button data-id="doc-1" class="favorite-btn bg-orange-400 rounded-2xl text-2xl font-bold shadow-lg hover:shadow-xl transition"> ♡ </button>`
        : 
        
        `<span class="text-red-600 w-fit rounded-3xl font-semibold px-3 py-1 bg-green-50"> ${value.deponibilite}</span>
        <button data-id="doc-1" class="favorite-btn bg-orange-400 rounded-2xl text-2xl font-bold shadow-lg hover:shadow-xl transition"> ♡ </button>`
        }
       
      </div>
    `
})

const searchInput = document.getElementById('searchInput');
const medecin = document.querySelectorAll('#med > div');

searchInput.addEventListener('keyup', () => {
    const query = searchInput.value.toLowerCase().trim(); 

    medecin.forEach(card => {
        const text = card.textContent.toLowerCase(); 
        
        if (text.includes(query)) {
            card.style.display = 'flex'; 
        } else {
            card.style.display = 'none';
        }
    });
});