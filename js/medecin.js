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