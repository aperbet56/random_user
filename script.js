// Récupération des différents éléments
const card = document.querySelector(".card");
const generateBtn = document.querySelector(".generate__btn");

// Création de la variable data qui va stocker les données renvoyées par l'API
let data = [];

// Déclaration de la fonction asynchrone fetchUsers qui va permettre de générere les données d'un utilisateur
const fetchUsers = async () => {
  await fetch("https://randomuser.me/api?nat=fr")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      data = value;
      console.log(data);
      // Appel de la fonction displayUser()
      displayUser();
    })
    .catch(function (error) {
      // Affichage d'un message d'erreur dans la console
      console.log("Désolé, une erreur est survenue sur le serveur.");
    });
};
// Appel de la fonction fetchUsers()
fetchUsers();

// Déclaration de la fonction displayUser() qui va permettre d'afficher l'utilisateur
const displayUser = () => {
  // Création de la variable user
  let user = data.results[0];
  // Création et ajout des éléments HTML dans le DOM
  card.innerHTML = `
  <div class = "card__header">
    <div class = "user__image">
      <img src = "${user.picture.large}" alt = "Photo de ${user.name.first} ${user.name.last}">
    </div>
    <div class = "user__name">
      <span class = "user__name__full">${user.name.first} ${user.name.last}</span>
      <span class = "user__age">${user.dob.age} ans</span>
    </div>
  </div>

  <div class = "card__body">
    <span>${user.location.city}</span>
  </div>

  <div class = "card__footer">
  
    <span>
      <i class = "fas fa-phone"></i> 
      ${user.phone}
    </span>
    <span>
      <i class = "fa-solid fa-mobile-button"></i> 
      ${user.cell}
    </span>
    <a href = "mailto:${user.email}">
      <i class = "fas fa-envelope"></i>
      ${user.email}
    </a>
  </div
  `;
};

// Ecoute de l'événement "click" sur le bouton et appel de la fonction fetchUsers
generateBtn.addEventListener("click", fetchUsers);
