let slides = document.querySelectorAll(".slide");
let current = 0 ;
function changeSlide(){
    slides[current].classList.remove("active");
    current++;
    if (current >= slides.length){
        current = 0 ;
    }
    slides[current].classList.add("active");
}
setInterval(changeSlide , 5000);
const video = document.getElementById("bgVideo");
video.addEventListener("timeupdate" , function (){
    if (video.currentTime >= 55) {
        video.currentTime = 4 ;
        video.play();
    }
});
let currentStep = 0 ;
const steps = document.querySelectorAll(".step");
const formSteps = document.querySelectorAll(".form-step");
function updateSteps() {
    steps.forEach((step,index) =>{
        step.classList.remove("active");
        step.classList.remove("completed");
        if (index < currentStep){
            step.classList.add("completed");
        }
        else if (index === currentStep) {
            step.classList.add("active");
        }
    });
    formSteps.forEach((form,index) =>{
        form.classList.remove("active");
        if (index === currentStep) {
            form.classList.add("active");
        }
    });
}
function nextStep() {
    if (currentStep < steps.length - 1){
        currentStep++;
        updateSteps();
    }
}
function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        updateSteps();
    }
}
function toggleMenu() {
    document.getElementById('menu').classList.toggle('active');
}
fetch("navbar.html")
.then(response => response.text())
.then(data => {
    document.getElementById("navbar").innerHTML = data ;
})
function toggleTheme() {
    document.body.classList.toggle("light-mode");

    let icon = document.getElementById("theme-icon");

    if(document.body.classList.contains("light-mode")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}

"use strict";

var plans = {
  cairo: {
    name: "Cairo",
    time: "October to April. The city is genuinely brutal in summer — 38°C+ with no shade near the monuments. Winter days are warm and sunny, evenings cool. Ramadan is interesting culturally but many restaurants close during the day.",
    transport: "The metro is clean, cheap (~5 EGP), and covers the main areas. Uber works reliably everywhere. Avoid negotiating with street taxis unless you know the going rate. Walking in Downtown is fine; near the pyramids, only use official transport from the ticket gate.",
    places: [
      "The Egyptian Museum, Tahrir Square — thousands of artifacts, including Tutankhamun's gold funeral mask.",
      "Khan el-Khalili — the old Islamic bazaar quarter, great for spices, silver, and strong tea.",
      "The Giza Plateau — arrive right when gates open at 8 AM. The panoramic hill south of the site gives the best photograph."
    ],
    tips: "Carry small EGP bills — baksheesh (small tips) is normal for almost everything. Dress modestly near mosques. The traffic is genuinely wild; build in extra time for any journey across the city."
  },
  alexandria: {
    name: "Alexandria",
    time: "March to May and September to November. The city has a Mediterranean climate so summers are hot but bearable near the sea. Winters can be rainy — a real rarity in Egypt. Not a great beach destination in winter, but culturally still worthwhile.",
    transport: "The old tram is slow but fun to ride at least once. Uber and Careem are reliable for everywhere else. The city center — Corniche, Bibliotheca, Qaitbay — is walkable if you have comfortable shoes and patience.",
    places: [
      "Bibliotheca Alexandrina — the modern Library of Alexandria. Stunning architecture, multiple museums inside.",
      "Qaitbay Citadel — 15th century fort built on the ruins of the ancient Pharos lighthouse. Great sea views.",
      "Anfushi fish market and the seafront restaurants — eat here, not at the tourist-facing spots on the Corniche."
    ],
    tips: "The Corniche is best in the evening when locals come out. Head east toward Montazah for cleaner swimming beaches. Don't miss ful and ta'meya breakfast at a local place — far better than any hotel buffet."
  },
  luxor: {
    name: "Luxor",
    time: "November to February. Summer temperatures regularly hit 45°C — it's not safe for outdoor sightseeing. December and January are peak season but the weather is genuinely perfect. Sunrise at the Valley of the Kings before the crowds arrive is worth planning around.",
    transport: "The city divides into East Bank (Luxor Temple, Karnak) and West Bank (Valley of the Kings, Hatshepsut). East Bank is walkable or by horse carriage. For the West Bank hire a driver for the day, or rent a bicycle in winter. The Luxor-Aswan Nile cruise starts here.",
    places: [
      "Valley of the Kings — 63 pharaonic tombs. Go early, hire a guide from the ticket office (not outside the gates).",
      "Karnak Temple — the largest religious complex ever built. The Hypostyle Hall is overwhelming in scale.",
      "Temple of Hatshepsut — colonnaded temple cut into the desert cliffs. Extraordinary even by Luxor standards."
    ],
    tips: "Drink more water than you think you need — the dry heat is deceptive. Hot air balloon rides at sunrise over the West Bank are genuinely special (around $80-120). Budget at least two full days here — rushing it is a shame."
  },
  aswan: {
    name: "Aswan",
    time: "October through March. Aswan has almost zero rainfall year-round but summer temperatures exceed 45°C. Winter days are warm and the light on the Nile at sunset is extraordinary — one of the most beautiful things you can see in Egypt.",
    transport: "Smaller and calmer than Luxor. Taxis and tuk-tuks for local trips. A felucca (traditional Nile sailboat) is the right way to reach Elephantine Island and the Nubian villages across the river. Many visitors arrive by Nile cruise from Luxor or overnight train from Cairo.",
    places: [
      "Abu Simbel — 280km south but absolutely worth the trip. Go by morning convoy minibus or by flight from Aswan airport.",
      "Philae Temple — moved to Agilkia Island when the dam was built. Take the short motorboat to reach it.",
      "Nubian villages — cross the Nile by felucca to the colorful villages. The architecture and food are unlike anywhere else in Egypt."
    ],
    tips: "The pace here is slower and the people are noticeably warmer. Buy Nubian crafts — baskets, spices, colorful scarves — directly from workshops in the villages for better prices and authenticity. Sunset from the Aga Khan Mausoleum hill is stunning."
  },
  giza: {
    name: "Giza",
    time: "October to April. The plateau is completely exposed — no shade anywhere. Go first thing in the morning (gates open 8 AM) regardless of season. Early morning in winter is near-perfect. Summer mornings are also manageable if you're there by 8 and leave by 11.",
    transport: "Technically part of Cairo — accessible by metro to Giza station, then a short Uber or taxi to the plateau. Many Cairo hotels offer shuttle services. Do not accept rides from anyone outside the official ticket area.",
    places: [
      "The Great Pyramid of Khufu — you can enter the interior (extra ticket). The passage is narrow and steep but worth it.",
      "The Great Sphinx — best seen from the valley temple viewing area. Surprisingly smaller than photos suggest.",
      "The Solar Boat Museum — an actual 4,500-year-old cedar boat found buried beside the pyramid. Remarkably preserved."
    ],
    tips: "The panorama hill (south of the plateau, beyond the ticket gates) gives the famous shot of all three pyramids lined up. Go there for your photos. Ignore everyone offering camel rides until you've already seen everything and you know what you want to pay."
  },
  fayoum: {
    name: "Fayoum",
    time: "October through March. Fayoum is a year-round oasis but summer days are hot. Wadi el-Hitan requires a long walk in the desert and is miserable in heat. The lake is lush and green compared to the surrounding desert — it feels like Egypt took a detour into another landscape.",
    transport: "About 100km southwest of Cairo — around 1.5 to 2 hours by car. Microbuses from Giza station are available but slow. A rental car or day tour from Cairo is the practical choice, especially for Wadi el-Hitan which has no reliable public transport.",
    places: [
      "Wadi el-Hitan (Valley of the Whales) — UNESCO site with 37-million-year-old whale fossils lying exposed in the desert. Strange and genuinely moving.",
      "Lake Qarun — ancient saltwater lake with excellent winter birdwatching. Flamingos and migratory species.",
      "Wadi Rayan Waterfalls — Egypt's largest natural waterfalls, a surreal sight in the middle of desert terrain."
    ],
    tips: "Stay at one of the kershef eco-lodges near the lake for a quiet night away from Cairo. Local Fayoum honey, pomegranates, and mangoes are famous — buy some at the market in town. Bring solid shoes and sunscreen for Wadi el-Hitan."
  },
  dahab: {
    name: "Dahab",
    time: "Year-round but avoid July to August heat if you're not primarily there to dive. March to May and October to November are ideal — warm sea, manageable air temperature, fewer package tourists. Dahab stays open and active all year.",
    transport: "About 85km north of Sharm el-Sheikh. East Delta buses from Cairo take around 8-9 hours. From Sharm a minibus or taxi takes about 1 hour. Within Dahab, everything is walkable — the town is essentially one long seafront strip you can cover on foot.",
    places: [
      "The Blue Hole — world-famous snorkel and dive site. Don't attempt the arch at depth without technical training. The entry lagoon is beautiful and safe for snorkeling.",
      "The Canyon dive site — about 2km from the Blue Hole. A narrow coral channel, great for all levels.",
      "Mount Sinai — 2 hours away. Most people hike up at 2 AM to catch sunrise from the summit. Around 3 hours to the top."
    ],
    tips: "Dahab has a slow, easygoing atmosphere that Sharm doesn't. The lagoon at the north end of town is the main kitesurfing spot — lessons are available and affordable. Don't let dive shops rush you — ask other travelers who's currently reputable for safety."
  },
  hurghada: {
    name: "Hurghada",
    time: "October to April for the most comfortable weather. The Red Sea is warm enough to swim in all year (minimum 22°C in February). July and August are very hot but manageable if you're mostly in the water or indoors. Hurghada never fully shuts down.",
    transport: "Direct international flights from many European cities. Buses from Cairo take about 6 hours (Super Jet is the most comfortable). Within Hurghada the main resort strip and Dahar (the old town) are separate — taxis between them are cheap. Most resorts are self-contained.",
    places: [
      "Giftun Islands National Park — the best reef snorkeling near Hurghada. Clear water, sea turtles, good coral coverage.",
      "Dolphin House — spinner dolphins live at this reef year-round. Morning boat trips regularly encounter them.",
      "Dahar — the old part of town, far cheaper and more local than the resort strip. Good for real food and less tourist pricing."
    ],
    tips: "Head to Dahar for local restaurants — prices on the resort strip are two to three times higher for lower quality. If doing a liveaboard dive trip, Hurghada is a major departure hub for Elphinstone Reef and the Brothers Islands — world-class sites."
  },
  siwa: {
    name: "Siwa",
    time: "October to April. Summer in Siwa is extremely hot and the journey there is long. Spring (March-April) is beautiful — the date palms are green and the salt lakes catch the light perfectly. The oasis has a quality that's difficult to describe until you experience it.",
    transport: "560km west of Cairo near the Libyan border — 9 to 10 hour bus journey (West Delta Bus Company runs the route). The oasis is small and best explored by bicycle or the local donkey carts. No tuk-tuks, no traffic noise. It feels completely removed from the rest of Egypt.",
    places: [
      "The Oracle Temple of Amun — where Alexander the Great was declared a god in 331 BC. Small ruins but historically significant beyond their appearance.",
      "Shali Fortress — the mud-brick old town, partially dissolved by rare rainfall over centuries. Atmospheric at sunset.",
      "The salt lakes and Bir Wahed hot spring — float in the shallow salt lake or soak in the hot desert spring. Stars here at night are extraordinary."
    ],
    tips: "Rent a bicycle from the main square — it's exactly the right pace for Siwa. The Great Sand Sea starts just outside the oasis — arrange a 4WD afternoon trip into the dunes. Try local Siwan dates, olive oil, and herbal tea. The community is Berber — culturally distinct from the Nile Valley."
  },
  marsaalam: {
    name: "Marsa Alam",
    time: "Year-round. Less extreme than Hurghada in summer, and the diving is good in all months. Dugong sightings at Abu Dabab are most reliable in the warmer months when seagrass growth peaks. The town stays quiet in all seasons — that's most of the appeal.",
    transport: "Small international airport with charter flights from Europe. From Hurghada by road is around 3 hours on the coastal highway. From Cairo it's a long drive — 8 to 9 hours. Public transport is sparse; most visitors fly direct or rent a car.",
    places: [
      "Elphinstone Reef — one of the top 10 dive sites in the world. Wall diving with oceanic whitetip sharks and hammerheads seasonally.",
      "Abu Dabab Bay — snorkel directly off the beach to find dugongs grazing on seagrass. One of the most reliable dugong spots on Earth.",
      "Wadi el-Gemal National Park — coastal park with mangroves, desert, and the ancient Roman port of Berenice."
    ],
    tips: "Marsa Alam is for people who want something quieter and more nature-focused than the northern Red Sea resorts. The snorkeling off the beach at many spots is better than day trips from Hurghada. Bring an underwater camera — you will use it."
  },
  sharm: {
    name: "Sharm El Sheikh",
    time: "October to May is ideal. Summer is very hot but the infrastructure handles it well — you spend most of the time in the water or air-conditioned spaces. The sea is warm and clear year-round. March to May offers good visibility and comfortable temperatures.",
    transport: "Sharm el-Sheikh has an international airport with direct flights from many countries. Within the city, the main areas (Naama Bay, Hadaba, Old Market) are spread out — taxis are the norm. Many resorts run shuttles. Renting a quad or scooter is possible but the roads are rough.",
    places: [
      "Ras Mohammed National Park — Egypt's first protected marine area. Arguably the best reef diving in the entire Red Sea.",
      "Naama Bay — the central strip for restaurants, shops, and nightlife. Crowded but lively.",
      "Tiran Island — excellent day-trip dive destination with four named reef sites and strong currents that bring big pelagic fish."
    ],
    tips: "Don't limit yourself to your hotel's beach — day trips to Ras Mohammed or Tiran are significantly better diving. The old market is worth a visit for local prices on souvenirs and spices. Sharm is very tourist-facing; use Uber for fairer taxi prices than negotiating on the street."
  },
  minya: {
    name: "Minya",
    time: "November to February. Middle Egypt gets very hot in summer. Winter is pleasant and the natural light for visiting open rock-cut tombs is good. The area sees very few foreign tourists year-round — which is a large part of why it's interesting.",
    transport: "4 to 5 hours from Cairo by train (comfortable second class). Within the area you'll need to hire a local driver to reach Tel el-Amarna and the cliff tomb sites — there's no reliable public transport. Some travelers have required a police escort; check current travel advisories before visiting.",
    places: [
      "Tel el-Amarna — ruins of Akhenaten's short-lived capital city, built and abandoned in the 14th century BC. Rock-cut nobles' tombs with vivid painted reliefs.",
      "Beni Hassan Tombs — 39 Middle Kingdom rock-cut tombs with unusually detailed painted scenes of wrestling, hunting, and daily life.",
      "Tuna el-Gebel — necropolis with Greco-Egyptian tomb paintings from the Roman period. Rarely visited and genuinely strange."
    ],
    tips: "Minya is genuinely off the tourist track. People are curious and often warm toward visitors who almost never come through. Bring a translation app — English is not widely spoken. The local street bread in the morning is excellent. Budget accommodation is basic but functional."
  }
};

var CITY_KEY = "ww_selected_city";

function initGenerator() {
  var select = document.getElementById("city-select");
  var btn = document.getElementById("generate-btn");
  var output = document.getElementById("plan-output");
  if (!select || !btn || !output) return;

  // Restore saved city
  var saved = localStorage.getItem(CITY_KEY);
  if (saved && select.querySelector('option[value="' + saved + '"]')) {
    select.value = saved;
  }

  select.addEventListener("change", function () {
    localStorage.setItem(CITY_KEY, select.value);
  });

  btn.addEventListener("click", function () {
    var city = select.value;
    if (!city) {
      select.style.borderColor = "#b83a1f";
      setTimeout(function () { select.style.borderColor = ""; }, 1800);
      return;
    }
    localStorage.setItem(CITY_KEY, city);
    renderPlan(city, output);
  });
}

function renderPlan(key, container) {
  var d = plans[key];
  if (!d) return;

  var html =
    '<p class="plan-city-heading">' + d.name + '</p>' +

    '<div class="plan-block">' +
      '<h4>Best Time to Visit</h4>' +
      '<p>' + d.time + '</p>' +
    '</div>' +

    '<div class="plan-block">' +
      '<h4>Getting Around</h4>' +
      '<p>' + d.transport + '</p>' +
    '</div>' +

    '<div class="plan-block">' +
      '<h4>3 Places to Visit</h4>' +
      '<ul>' +
        d.places.map(function (p) { return '<li>' + p + '</li>'; }).join('') +
      '</ul>' +
    '</div>' +

    '<div class="plan-block">' +
      '<h4>Travel Tips</h4>' +
      '<p>' + d.tips + '</p>' +
    '</div>';

  container.innerHTML = html;
  container.classList.add("show");
  container.scrollIntoView({ behavior: "smooth", block: "start" });
}

function initForm() {
  var form = document.getElementById("contact-form");
  if (!form) return;

  var nameInput  = document.getElementById("f-name");
  var emailInput = document.getElementById("f-email");
  var errName    = document.getElementById("err-name");
  var errEmail   = document.getElementById("err-email");
  var okMsg      = document.getElementById("form-ok");

  function setErr(input, errEl, msg) {
    input.classList.add("has-error");
    errEl.textContent = msg;
  }

  function clearErr(input, errEl) {
    input.classList.remove("has-error");
    errEl.textContent = "";
  }

  nameInput.addEventListener("input", function () { clearErr(nameInput, errName); });
  emailInput.addEventListener("input", function () { clearErr(emailInput, errEmail); });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    okMsg.textContent = "";
    var valid = true;

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();

    if (name.length <= 3) {
      setErr(nameInput, errName, "Name must be longer than 3 characters.");
      valid = false;
    } else {
      clearErr(nameInput, errName);
    }
    if (email.indexOf("@") === -1 || email.length < 5) {
      setErr(emailInput, errEmail, "Please enter a valid email address.");
      valid = false;
    } else {
      clearErr(emailInput, errEmail);
    }

    if (!valid) return;

    var btn = form.querySelector("button");
    btn.textContent = "Sending...";
    btn.disabled = true;

    setTimeout(function () {
      form.reset();
      okMsg.textContent = "Message sent. We'll get back to you soon.";
      btn.textContent = "Send Message";
      btn.disabled = false;
    }, 900);
  });
}

function setYear() {
  var el = document.getElementById("yr");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", function () {
  setYear();
  initGenerator();
  initForm();
});