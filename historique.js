// const etudiants = [
//   { ID: 1, Nom: "Amine", Prenom: "Sakhri", Group: "IDOSR201" },
//   { ID: 2, Nom: "Sara", Prenom: "Elalami", Group: "IDOSR201" },
//   { ID: 3, Nom: "Yassine", Prenom: "Benali", Group: "IDOSR202" },
//   { ID: 4, Nom: "Hajar", Prenom: "AitAli", Group: "IDOSR202" },
//   { ID: 5, Nom: "Omar", Prenom: "Chakir", Group: "IDOSR203" },
//   { ID: 6, Nom: "Imane", Prenom: "Zahra", Group: "IDOSR203" },
// ];

// localStorage.setItem("etudiants", JSON.stringify(etudiants));

// const presences = [
//   {
//     nomComplet: "Amine Sakhri",
//     presences: "oui",
//     absences: "non",
//     heureArrivee: "08:45",
//     description: "Embouteillage",
//   },
//   {
//     nomComplet: "Sara Elalami",
//     presences: "oui",
//     absences: "non",
//     heureArrivee: null,
//     description: null,
//   },
//   {
//     nomComplet: "Yassine Benali",
//     presences: "non",
//     absences: "oui",
//     heureArrivee: null,
//     description: "Absent toute la journée",
//   },
//   {
//     nomComplet: "Hajar AitAli",
//     presences: "oui",
//     absences: "non",
//     heureArrivee: "09:05",
//     description: "Problème de transport",
//   },
//   {
//     nomComplet: "Omar Chakir",
//     presences: "oui",
//     absences: "non",
//     heureArrivee: null,
//     description: null,
//   },
//   {
//     nomComplet: "Imane Zahra",
//     presences: "non",
//     absences: "oui",
//     heureArrivee: null,
//     description: "Maladie",
//   },
// ];

// localStorage.setItem("presences", JSON.stringify(presences));
// let datt = JSON.parse(localStorage.getItem("presences")) || [];

// const historique = [
//   {
//     date: "2025-12-18",
//     presences: JSON.parse(localStorage.getItem("presences")),
//   },
// ];
// localStorage.setItem("historique", JSON.stringify(historique));

// // function CompterAbsents(presences) {
// //   return presences.filter((p) => p.absences === "oui").length;
// // }

// // function CompterRetards(presences) {
// //   return presences.filter(
// //     (p) => p.presences === "oui" && presences.heureArrivee != nulll
// //   ).length;
// // }

// function compterAbsentsParDate(date) {
//   const historique = JSON.parse(localStorage.getItem("historique")) || [];
//   const jour = historique.find((h) => h.date === date);
//   if (!jour) return 0;

//   return jour.presences.filter((p) => p.absences === "oui").length;
// }

// function compterRetardsParDate(date) {
//   const historique = JSON.parse(localStorage.getItem("historique")) || [];
//   const jour = historique.find((h) => h.date === date);
//   if (!jour) return 0;

//   return jour.presences.filter(
//     (p) => p.presences === "oui" && p.heureArrivee && p.heureArrivee > "08:30"
//   ).length;
// }

// function afficherAbsents() {
//   const nombre = compterAbsentsParDate("2025-12-18");
//   document.getElementById("absents").textContent =
//     "Nombre d’absents : " + nombre;
// }

// function afficherRetards() {
//   const nombre = compterRetardsParDate("2025-12-18");
//   document.getElementById("retards").textContent =
//     "Nombre de retardataires : " + nombre;
// }

// --- Données de base ---
const etudiants = [
  { ID: 1, Nom: "Amine", Prenom: "Sakhri", Group: "IDOSR201" },
  { ID: 2, Nom: "Sara", Prenom: "Elalami", Group: "IDOSR201" },
  { ID: 3, Nom: "Yassine", Prenom: "Benali", Group: "IDOSR202" },
  { ID: 4, Nom: "Hajar", Prenom: "AitAli", Group: "IDOSR202" },
  { ID: 5, Nom: "Omar", Prenom: "Chakir", Group: "IDOSR203" },
  { ID: 6, Nom: "Imane", Prenom: "Zahra", Group: "IDOSR203" },
];
localStorage.setItem("etudiants", JSON.stringify(etudiants));

const presences = [
  {
    nomComplet: "Amine Sakhri",
    presences: "oui",
    absences: "non",
    heureArrivee: "08:45",
    description: "Embouteillage",
  },
  {
    nomComplet: "Sara Elalami",
    presences: "oui",
    absences: "non",
    heureArrivee: null,
    description: null,
  },
  {
    nomComplet: "Yassine Benali",
    presences: "non",
    absences: "oui",
    heureArrivee: null,
    description: "Absent toute la journée",
  },
  {
    nomComplet: "Hajar AitAli",
    presences: "oui",
    absences: "non",
    heureArrivee: "09:05",
    description: "Problème de transport",
  },
  {
    nomComplet: "Omar Chakir",
    presences: "oui",
    absences: "non",
    heureArrivee: null,
    description: null,
  },
  {
    nomComplet: "Imane Zahra",
    presences: "non",
    absences: "oui",
    heureArrivee: null,
    description: "Maladie",
  },
];
localStorage.setItem("presences", JSON.stringify(presences));

const historique = [
  {
    date: "2025-12-18",
    presences: JSON.parse(localStorage.getItem("presences")),
  },
];
localStorage.setItem("historique", JSON.stringify(historique));

function estEnRetard(heure) {
  if (!heure) return false;
  const [h, m] = heure.split(":").map(Number);
  return h * 60 + m > 8 * 60 + 30; 
}

function compterAbsentsParDate(date) {
  const historique = JSON.parse(localStorage.getItem("historique")) || [];
  const jour = historique.find((h) => h.date === date);
  if (!jour) return 0;
  return jour.presences.filter((p) => p.absences === "oui").length;
}

function compterRetardsParDate(date) {
  const historique = JSON.parse(localStorage.getItem("historique")) || [];
  const jour = historique.find((h) => h.date === date);
  if (!jour) return 0;
  return jour.presences.filter(
    (p) => p.presences === "oui" && estEnRetard(p.heureArrivee)
  ).length;
}

function afficherAbsents() {
  const nombre = compterAbsentsParDate("2025-12-18");
  document.getElementById("absents").textContent =
    "Nombre d’absents : " + nombre;
}

function afficherRetards() {
  const nombre = compterRetardsParDate("2025-12-18");
  document.getElementById("retards").textContent =
    "Nombre de retardataires : " + nombre;
}

// function afficherHistorique() {
//   const historique = JSON.parse(localStorage.getItem("historique")) || [];
//   const container = document.getElementById("historique");
//   container.innerHTML = ""; // reset

//   historique.forEach((jour) => {
//     const absents = jour.presences.filter((p) => p.absences === "oui").length;
//     const retards = jour.presences.filter(
//       (p) => p.presences === "oui" && estEnRetard(p.heureArrivee)
//     ).length;

//     const div = document.createElement("div");
//     div.textContent = ` Jour:${jour.date}
//      Absents: ${absents}
//      Retards: ${retards}`;
//     container.appendChild(div);
//   });
// }

window.onload = () => {
  afficherAbsents();
  afficherRetards();
  // afficherHistorique();
};
