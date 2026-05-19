const menu = document.getElementById("menu");
const burger = document.querySelector(".burger");

burger.addEventListener("click", (e) => {
  e.stopPropagation();

  menu.classList.toggle("active");
  burger.classList.toggle("active");
});

menu.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("click", (e) => {

  // Nur schließen wenn außerhalb geklickt wurde
  if (
    !menu.contains(e.target) &&
    !burger.contains(e.target)
  ) {
    menu.classList.remove("active");
    burger.classList.remove("active");
  }
});

function scrollToSection() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
}
const farben = [
      { 
        name: "Rot", 
        img: "pictures/btn-rot.png",
        eigenschaften: `Ich würde sagen, man könnte deine Lebensart generell als aktiv und energiegeladen bezeichnen. Du bist ausdrucksstark, charismatisch und leidenschaftlich und brennst für das Abenteuer, für welches du mitunter auch andere einfach  begeistern und motivieren kannst. :)`,
        assoziationen: "Feuer, Liebe, Leidenschaft, Gefahr, Aufbruch"
      },
      { 
        name: "Gelb", 
        img: "pictures/btn-gelp.png",
        eigenschaften: `Ähnlich wie die Sonne wirkst du auf mich optimistisch am Strahlen und steckst damit auch dein Umfeld an. Dein helles Gemüt ist gerne unbeschwert und frei, du liebst den Sommer und die Wärme und versuchst diese auch zu verbreiten. Du magst das freudige Durcheinander und bist am liebsten unter Menschen.`,
        assoziationen: "Freude, Sommer, Sonne, Wärme, Kommunikation, Warnung"
      },
      { 
        name: "Grün", 
        img: "pictures/btn-gruen.png",
        eigenschaften: `Ich denke du bist eine ruhige Seele, die stetig versucht Harmonie und Ausgleich in ihrem und dem Leben ihrer Liebsten herzustellen. 
Du hast eine genaue Vorstellung von bestimmten Abläufen und kannst auch mit Finanzen gut umgehen. 
Dein Umfeld schätzt deine beruhigende Lebendigkeit. ;)`,
        assoziationen: "Natur, Wachstum, Hoffnung, Gesundheit, Erlaubnis"
      },
      { 
        name: "Blau", 
        img: "pictures/btn-blau.png",
        eigenschaften: `Ich denke deine analytische und sachliche Art wirkt beruhigend und konzentrationsfördernd auf dein Umfeld. Deinem tiefgründigen Blick bleibt nicht viel verborgen, was dich zu einer vertrauensvollen und eloquenten Ansprechpartner:in macht. Sowohl deine Hobbies als auch dein Zuhause zeugen von einer kühlen Verlässlichkeit.`,
        assoziationen: "Kühl, Tiefe, Himmel, Meer, Vertrauen, Technik, Treue"
      },
      { 
        name: "Lila", 
        img: "pictures/btn-lila.png",
        eigenschaften: `Ich nehme dich als eine mystische Verbindung aus kühlem Edelmut und warmer Kreativität wahr.
Du füllst dein Leben mit Spiritualität und fantasievollem  Luxus und wirkst magisch auf dein Umfeld. `,
        assoziationen: "Magie, Spiritualität, Luxus, Andenken"
      },
      { 
        name: "Orange", 
        img: "pictures/btn-orange.png",
        eigenschaften: `Ich glaube deine vitalisierende und warme Ausstrahlung macht dich zu einer geselligen Persönlichkeit, die andere einfach begeistern kann.
Auch dein großes Mitgefühl spielt hierbei eine entscheidende Rolle.
Du liebst den Herbst und bist meist neugierig und energiegeladen.
Bücher und Natur könnten ebenso wie das Kochen oder Backen zu deinen Hobbies zählen. `,
        assoziationen: "Herbst, Süden, Früchte, Wärme, Veränderung"
      },
      { 
        name: "Braun", 
        img: "pictures/btn-braun.png",
        eigenschaften: `Ich empfinde dich als einen bodenständigen und verlässlichen Charakter, der ohne Hast durchs Leben geht.
Deine Stabilität wirkt beruhigend auf dein Umfeld und dein Zuhause lädt jederzeit zum gemütlichen Verweilen ein.`,
        assoziationen: "Erde, Holz, Schokolade, Herbst, Komfort"
      }
    ];

    const container = document.getElementById("farbenContainer");
    const textfenster = document.getElementById("textfenster");
    const farbName = document.getElementById("farbName");
    const eigenschaften = document.getElementById("eigenschaften");
    const assoziationen = document.getElementById("assoziationen");

    let aktiverButton = null;

    farben.forEach(farbe => {
      const btn = document.createElement("button");
      btn.className = "farb-btn";
        const img = document.createElement("img");
  img.src = farbe.img;
  img.alt = farbe.name;

  btn.appendChild(img);
      btn.setAttribute("aria-label", farbe.name);

btn.addEventListener("click", () => {
        // Alten aktiven Button zurücksetzen
        if (aktiverButton) aktiverButton.classList.remove("aktiv");
        
        // Neuen Button markieren
        btn.classList.add("aktiv");
        aktiverButton = btn;

        // Text anzeigen
        farbName.textContent = farbe.name;

        farbName.style.color = "blau" // Farbe des Buttons eintragen !!

        eigenschaften.textContent = farbe.eigenschaften;
        assoziationen.textContent = farbe.assoziationen;
        textfenster.style.display = "block";
      });

      container.appendChild(btn);
    });

document.querySelectorAll(".phone-link").forEach(link => {

  link.addEventListener("click", (e) => {
    e.preventDefault();

    const number =
      ["+49", "155", "674", "045", "79"].join("");

    window.location.href = "tel:" + number;
  });

});

const user = "lichtblick_hilfe";
const domain = "web.de";

const email = user + "@" + domain;

const mailLink = document.getElementById("email");

mailLink.href = "mailto:" + email;
mailLink.textContent = email;
