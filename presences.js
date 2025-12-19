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
let datt = JSON.parse(localStorage.getItem("presences")) || [];

const d = document.getElementById("bodyJ");
datt.forEach((element) => {
  d.innerHTML += `
    <tr class="hover:bg-blue-200 hover:scale-105 cursor-pointer duration-300">
      <td class="border px-4 py-3 text-center text-xs font-medium text-white">
        ${element.nomComplet}
      </td>
      <td class="border px-4 py-3 text-center text-xs font-medium text-white">
        ${element.presences}
      </td>
      <td class="border px-4 py-3 text-center text-xs font-medium text-white">
        ${element.absences}
      </td>
      <td class="border px-4 py-3 text-center text-xs font-medium text-white">
        ${element.heureArrivee}
      </td>
      <td class="border px-4 py-3 text-center text-xs font-medium text-white">
        ${element.description}
      </td>
    </tr>`;
});
