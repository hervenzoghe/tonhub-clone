// Fonction pour vérifier la résolution et mettre à jour l'image
function updateImageSrc() {
    const image = document.getElementById('myImage'); // Remplacez par l'ID de votre image
    const newSrc = 'assets/images/sent_receive_1440.png'; // Remplacez par le nouveau chemin
  
    if (window.matchMedia("(min-width: 1440px)").matches) {
      image.src = newSrc;
    }
  }
  
  // Appeler la fonction au chargement de la page
  window.onload = updateImageSrc;
  
  // Appeler la fonction à chaque changement de taille de fenêtre
  window.addEventListener('resize', updateImageSrc);