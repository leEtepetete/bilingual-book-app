
const book = {
  page1: {
    german: "Heute geht Fini im Wald spazieren.",
    english: "Today Fini is going for a walk in the forest.",
    greek: "Σήμερα η Φίνι θα πάει βόλτα στο δάσος.",
    russian:"Сегодня Фини отправится на прогулку в лес.",
    turkish:"Bugün Fini ormanda yürüyüşe çıkıyor.",
  }
};

const language1 = document.getElementById("language1");
const language2 = document.getElementById("language2");

const preview = document.querySelector(".illustration-module");

function updatePage() {

  const lang1 = language1.value.toLowerCase();
  const lang2 = language2.value.toLowerCase();

  document.getElementById("text-lang1").textContent =
    book.page1[lang1];

  document.getElementById("text-lang2").textContent =
    book.page1[lang2];

     preview.classList.remove("glow"); 
  void preview.offsetWidth; // restart animation
  preview.classList.add("glow");
}

language1.addEventListener("change", updatePage);
language2.addEventListener("change", updatePage);

updatePage();

function printBook() {
  window.print();
}