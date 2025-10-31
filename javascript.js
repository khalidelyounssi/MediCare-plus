
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

  const track = document.getElementById('carouselTrack');
  const slides = document.getElementsByTagName('article');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  let current = 0; 
  let total = slides.length; 

 
  function showSlide() {
    track.style.transform = "translateX(-" + (current * 100) + "%)";
  }

  function nextSlide() {
    current = current + 1;
    if (current >= total) {
      current = 0; 
    }
    showSlide();
  }

 
  function prevSlide() {
    current = current - 1;
    if (current < 0) {
      current = total - 1; 
    }
    showSlide();
  }

  
  setInterval(function() {
    nextSlide();
  }, 3000);

  
  nextBtn.onclick = function() {
    nextSlide();
  };
  prevBtn.onclick = function() {
    prevSlide();
  };


  showSlide();



 
  const searchInput = document.getElementById('searchInput');
  const articles = document.querySelectorAll('#articles > div');

  
  searchInput.addEventListener('keyup', () => {
    const query = searchInput.value.toLowerCase().trim(); 

    
    articles.forEach(article => {
      const text = article.textContent.toLowerCase(); 

     
      if (text.includes(query)) {
        article.style.display = 'block'; 
      } else {
        article.style.display = 'none'; 
      }
    });
  });


