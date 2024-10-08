const febHolidays = [
    "Estrellita linda,",
    "Antes de todo, Te Amo❤️",
    "Sos mi todo",
    "Mi hermosa Novia",
    "Y por supuesto...",
    "Mi futura esposa",
    "Siempre estare para ti",
    "Sin importar la distancia",
    "Sos la niña mas hermosa,",
    "divertina,tierna, chiquitititita,",
    "y dulce que puede existir.",
    "Quiero que sepas mi amor.",
    "Que soy el hombre mas ",
    "feliz en la existencia",
    "Estoy tan agradecido ",
    "de haberte conocido❤️",
    "Siempre dare lo mejor de mi ",
    "para hacerte feliz",
    "Sos la personita ",
    "mas importante de mi vida",
    "Te amo demasiado",
    "Creeme que te amo demasiado",
    "Cada que te veo ",
    "me convenzo mas❤️",
    "que sos lo mejor de lo mejor,",
    "bien pio!!",
    "Te amo mucho mi niña bonita",
    "Que rapido pasa el tiempo cielo ",
    "ya 13 meses juntitos",
    "y no podria estar mas ",
    "agradecido con la vida,",
    "Gracias por hacer de mis dias malos ",
    "algo bonito",
    "Me hace darme cuenta lo importante ",
    "que sos en mi vida❤️",
    "Y lo importante que siempre seras",
    "Felices 13 meses ",
    "mi amorcito chiquito",
    "TEEE AMOOO MUCHOOO❤️",
    
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  