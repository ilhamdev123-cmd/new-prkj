/* =========================================================
   TRIPBUDGET
   Prototype V1
========================================================= */


/* =========================================================
   DATA DESTINASI
========================================================= */

const destinations = {

  bandung: {
    name: "Bandung",
    hotels: [
      {
        name: "Bandung City Hotel",
        price: 350000,
        rating: 4.3,
        distance: 4,
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Dago Hills Hotel",
        price: 475000,
        rating: 4.6,
        distance: 7,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Lembang Garden Stay",
        price: 550000,
        rating: 4.7,
        distance: 12,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      }
    ],

    places: [
      {
        name: "Kawah Putih",
        ticket: 50000,
        rating: 4.6,
        distance: 18,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kawah%20Putih.jpg"
      },
      {
        name: "Farmhouse Lembang",
        ticket: 40000,
        rating: 4.5,
        distance: 12,
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Dusun Bambu",
        ticket: 30000,
        rating: 4.4,
        distance: 14,
        image: "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=800&q=80"
      }
    ],

    restaurants: [
      {
        name: "Rumah Makan Sunda",
        price: 75000,
        rating: 4.5,
        distance: 5,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Warung Bandung",
        price: 55000,
        rating: 4.3,
        distance: 8,
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Dapur Nusantara",
        price: 90000,
        rating: 4.7,
        distance: 10,
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },


  yogyakarta: {

    name: "Yogyakarta",

    hotels: [
      {
        name: "Jogja Heritage Hotel",
        price: 350000,
        rating: 4.5,
        distance: 5,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Malioboro Stay",
        price: 425000,
        rating: 4.4,
        distance: 3,
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Jogja Garden Resort",
        price: 550000,
        rating: 4.7,
        distance: 10,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
      }
    ],

    places: [
      {
        name: "Candi Prambanan",
        ticket: 50000,
        rating: 4.8,
        distance: 17,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Prambanan%20Temple.jpg"
      },
      {
        name: "HeHa Sky View",
        ticket: 25000,
        rating: 4.5,
        distance: 12,
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Keraton Yogyakarta",
        ticket: 15000,
        rating: 4.6,
        distance: 4,
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80"
      }
    ],

    restaurants: [
      {
        name: "Gudeg Yu Djum",
        price: 50000,
        rating: 4.6,
        distance: 4,
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Warung Nusantara Jogja",
        price: 45000,
        rating: 4.4,
        distance: 6,
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Jogja Food House",
        price: 70000,
        rating: 4.5,
        distance: 8,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },


  bali: {

    name: "Bali",

    hotels: [
      {
        name: "Bali Sunset Hotel",
        price: 550000,
        rating: 4.5,
        distance: 8,
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Tropical Bali Stay",
        price: 650000,
        rating: 4.7,
        distance: 10,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Bali Garden Resort",
        price: 750000,
        rating: 4.8,
        distance: 15,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      }
    ],

    places: [
      {
        name: "Tanah Lot",
        ticket: 60000,
        rating: 4.7,
        distance: 18,
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Uluwatu Temple",
        ticket: 50000,
        rating: 4.8,
        distance: 20,
        image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Tegallalang Rice Terrace",
        ticket: 25000,
        rating: 4.6,
        distance: 25,
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
      }
    ],

    restaurants: [
      {
        name: "Warung Bali",
        price: 65000,
        rating: 4.5,
        distance: 5,
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Bali Local Kitchen",
        price: 85000,
        rating: 4.6,
        distance: 7,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Tropical Food Bali",
        price: 100000,
        rating: 4.7,
        distance: 9,
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },


  malang: {

    name: "Malang",

    hotels: [
      {
        name: "Malang City Hotel",
        price: 300000,
        rating: 4.3,
        distance: 5,
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Batu Mountain Stay",
        price: 450000,
        rating: 4.6,
        distance: 15,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Malang Garden Resort",
        price: 500000,
        rating: 4.5,
        distance: 10,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
      }
    ],

    places: [
      {
        name: "Jatim Park",
        ticket: 100000,
        rating: 4.7,
        distance: 18,
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Batu Night Spectacular",
        ticket: 40000,
        rating: 4.5,
        distance: 20,
        image: "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Coban Rondo",
        ticket: 35000,
        rating: 4.6,
        distance: 25,
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80"
      }
    ],

    restaurants: [
      {
        name: "Warung Malang",
        price: 45000,
        rating: 4.4,
        distance: 5,
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Kuliner Batu",
        price: 60000,
        rating: 4.6,
        distance: 7,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Dapur Jawa Timur",
        price: 55000,
        rating: 4.5,
        distance: 9,
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80"
      }
    ]
  }

};


/* =========================================================
   DEFAULT DATA
   Untuk kota yang belum punya data prototype.
========================================================= */

const defaultDestination = {

  name: "Indonesia",

  hotels: [
    {
      name: "Hotel Indonesia Stay",
      price: 400000,
      rating: 4.3,
      distance: 8,
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Comfort Travel Hotel",
      price: 500000,
      rating: 4.5,
      distance: 12,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Holiday Garden Hotel",
      price: 650000,
      rating: 4.7,
      distance: 15,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
    }
  ],

  places: [
    {
      name: "Destinasi Wisata Pilihan",
      ticket: 50000,
      rating: 4.5,
      distance: 15,
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Taman Wisata Nusantara",
      ticket: 40000,
      rating: 4.4,
      distance: 12,
      image: "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Nature Adventure",
      ticket: 75000,
      rating: 4.6,
      distance: 20,
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80"
    }
  ],

  restaurants: [
    {
      name: "Warung Nusantara",
      price: 50000,
      rating: 4.4,
      distance: 5,
      image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Rumah Makan Lokal",
      price: 65000,
      rating: 4.5,
      distance: 8,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Food Garden",
      price: 80000,
      rating: 4.6,
      distance: 10,
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80"
    }
  ]

};


/* =========================================================
   ELEMENT
========================================================= */

const tripForm = document.getElementById("tripForm");

const destinationInput =
  document.getElementById("destination");

const peopleInput =
  document.getElementById("people");

const daysInput =
  document.getElementById("days");

const budgetInput =
  document.getElementById("budget");

const resultSection =
  document.getElementById("rekomendasi");

const resultTitle =
  document.getElementById("resultTitle");

const resultSubtitle =
  document.getElementById("resultSubtitle");

const summaryBudget =
  document.getElementById("summaryBudget");

const usedBudget =
  document.getElementById("usedBudget");

const remainingBudget =
  document.getElementById("remainingBudget");

const progressBar =
  document.getElementById("progressBar");

const hotelCost =
  document.getElementById("hotelCost");

const destinationCost =
  document.getElementById("destinationCost");

const foodCost =
  document.getElementById("foodCost");

const transportCost =
  document.getElementById("transportCost");

const tripList =
  document.getElementById("tripList");

const selectedTripSection =
  document.getElementById("selectedTrip");

const resetBtn =
  document.getElementById("resetBtn");

const sortFilter =
  document.getElementById("sortFilter");


/* =========================================================
   GLOBAL STATE
========================================================= */

let currentTrips = [];

let currentBudget = 0;

let currentDestinationName = "Indonesia";


/* =========================================================
   FORMAT RUPIAH
========================================================= */

function formatRupiah(number) {

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(number);

}


/* =========================================================
   BUDGET QUICK BUTTON
========================================================= */

document
  .querySelectorAll(".budget-hints button")
  .forEach(button => {

    button.addEventListener("click", () => {

      budgetInput.value =
        button.dataset.budget;

    });

  });


/* =========================================================
   FORM SUBMIT
========================================================= */

tripForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const destination =
    destinationInput.value;

  const people =
    Number(peopleInput.value);

  const days =
    Number(daysInput.value);

  const budget =
    Number(budgetInput.value);


  if (!destination) {

    alert("Silakan pilih tujuan liburan.");

    return;

  }


  if (people < 1) {

    alert("Jumlah orang minimal 1.");

    return;

  }


  if (days < 1) {

    alert("Lama perjalanan minimal 1 hari.");

    return;

  }


  if (budget < 100000) {

    alert("Budget minimal Rp100.000.");

    return;

  }


  currentBudget = budget;


  generateTrips(
    destination,
    people,
    days,
    budget
  );

});


/* =========================================================
   GENERATE TRIPS
========================================================= */

function generateTrips(
  destination,
  people,
  days,
  budget
) {

  const locationData =
    destinations[destination] ||
    defaultDestination;

  const selectedDestination =
    destinationInput.options[destinationInput.selectedIndex]?.textContent.trim();

  currentDestinationName =
    selectedDestination || locationData.name;


  const hotelCandidates =
    locationData.hotels.filter(
      hotel => hotel.distance <= 30
    );


  const placeCandidates =
    locationData.places.filter(
      place => place.distance <= 30
    );


  const restaurantCandidates =
    locationData.restaurants.filter(
      restaurant => restaurant.distance <= 30
    );


  let combinations = [];


  /*
    Kita membuat kombinasi hotel,
    destinasi dan restoran.
  */

  hotelCandidates.forEach(hotel => {

    placeCandidates.forEach(place => {

      restaurantCandidates.forEach(restaurant => {


        /* HOTEL */

        const hotelTotal =
          hotel.price * Math.max(days - 1, 1);


        /* DESTINASI */

        const destinationTotal =
          place.ticket * people;


        /*
          Kita asumsikan makan 3x sehari.
          Untuk prototype, harga restoran
          dikalikan jumlah orang × jumlah hari.
        */

        const foodTotal =
          restaurant.price *
          people *
          days;


        /*
          Transportasi sementara.
          Nanti akan diganti Routes API.
        */

        const transportTotal =
          estimateTransport(
            hotel.distance,
            place.distance,
            days
          );


        const total =
          hotelTotal +
          destinationTotal +
          foodTotal +
          transportTotal;


        /*
          Jarak harus <= 30 km.
        */

        if (
          hotel.distance <= 30 &&
          place.distance <= 30 &&
          restaurant.distance <= 30
        ) {

          combinations.push({

            hotel,
            place,
            restaurant,

            hotelTotal,
            destinationTotal,
            foodTotal,
            transportTotal,

            total,

            rating:
              (
                hotel.rating +
                place.rating +
                restaurant.rating
              ) / 3

          });

        }

      });

    });

  });


  /*
    Urutkan berdasarkan kedekatan
    dengan budget user.
  */

  combinations.sort(
    (a, b) => {

      const aDifference =
        Math.abs(budget - a.total);

      const bDifference =
        Math.abs(budget - b.total);

      return aDifference - bDifference;

    }
  );


  /*
    Prioritaskan trip yang
    tidak melebihi budget.
  */

  const affordable =
    combinations.filter(
      trip => trip.total <= budget
    );


  if (affordable.length > 0) {

    currentTrips =
      affordable.slice(0, 5);

  } else {

    /*
      Kalau semua trip lebih mahal
      dari budget, tampilkan yang
      paling murah.
    */

    currentTrips =
      combinations
        .sort((a, b) => a.total - b.total)
        .slice(0, 5);

  }


  renderResult(
    locationData.name,
    people,
    days,
    budget,
    currentTrips
  );

}


/* =========================================================
   ESTIMASI TRANSPORT
========================================================= */

function estimateTransport(
  hotelDistance,
  placeDistance,
  days
) {

  /*
    Ini hanya estimasi prototype.

    Nanti:
    Google Routes API
    ↓
    jarak aktual
    ↓
    estimasi transport aktual
  */

  const basePerDay = 100000;

  const distanceFactor =
    (hotelDistance + placeDistance) * 2500;

  return Math.round(
    (basePerDay * days) +
    distanceFactor
  );

}


/* =========================================================
   RENDER RESULT
========================================================= */

function renderResult(
  locationName,
  people,
  days,
  budget,
  trips
) {

  resultSection.classList.remove("hidden");


  resultTitle.textContent =
    `Trip ${locationName}`;


  resultSubtitle.textContent =
    `${people} orang • ${days} hari ${days > 1 ? `• ${days - 1} malam` : ""}`;


  summaryBudget.textContent =
    formatRupiah(budget);


  if (trips.length === 0) {

    tripList.innerHTML = `
      <div class="trip-card">
        <div class="trip-card-header">
          <div>
            <span class="trip-badge">
              TIDAK DITEMUKAN
            </span>

            <h3>
              Belum ada rekomendasi
            </h3>

            <p>
              Coba naikkan budget perjalananmu.
            </p>
          </div>
        </div>
      </div>
    `;

    return;

  }


  const bestTrip =
    trips[0];


  updateSummary(
    bestTrip,
    budget
  );


  renderTrips(trips);


  resultSection.scrollIntoView({
    behavior: "smooth"
  });

}


/* =========================================================
   UPDATE SUMMARY
========================================================= */

function updateSummary(
  trip,
  budget
) {

  const total =
    trip.total;


  const remaining =
    budget - total;


  const percentage =
    Math.min(
      (total / budget) * 100,
      100
    );


  usedBudget.textContent =
    `Terpakai ${formatRupiah(total)}`;


  remainingBudget.textContent =
    remaining >= 0

      ? `Sisa ${formatRupiah(remaining)}`

      : `Kurang ${formatRupiah(Math.abs(remaining))}`;


  progressBar.style.width =
    `${percentage}%`;


  if (total > budget) {

    progressBar.style.background =
      "linear-gradient(90deg,#dc2626,#f97316)";

  } else {

    progressBar.style.background =
      "linear-gradient(90deg,#0f766e,#2dd4bf)";

  }


  hotelCost.textContent =
    formatRupiah(
      trip.hotelTotal
    );


  destinationCost.textContent =
    formatRupiah(
      trip.destinationTotal
    );


  foodCost.textContent =
    formatRupiah(
      trip.foodTotal
    );


  transportCost.textContent =
    formatRupiah(
      trip.transportTotal
    );

}


/* =========================================================
   RENDER TRIP CARDS
========================================================= */

function renderTrips(trips) {

  tripList.innerHTML = "";


  trips.forEach(
    (trip, index) => {

      const card =
        document.createElement("article");


      card.className =
        "trip-card";


      const budgetStatus =
        trip.total <= currentBudget
          ? "AMAN"
          : "MELEBIHI BUDGET";


      const statusClass =
        trip.total <= currentBudget
          ? ""
          : "style=\"background:#fee2e2;color:#991b1b\"";


      card.innerHTML = `

        <div class="trip-card-header">

          <div>

            <span
              class="trip-badge"
              ${statusClass}
            >
              ${index === 0
                ? "⭐ REKOMENDASI TERBAIK"
                : budgetStatus}
            </span>

            <h3>
              Paket Liburan ${index + 1}
            </h3>

          </div>


          <div class="trip-score">

            <strong>
              ${trip.rating.toFixed(1)}
            </strong>

            <span>
              skor rekomendasi
            </span>

          </div>

        </div>


        <div class="trip-content">

          <!-- HOTEL -->

          <div class="place-card">

            <div class="place-type">
              🏨 PENGINAPAN
            </div>

            <img
              class="place-image"
              src="${trip.hotel.image}"
              alt="${trip.hotel.name}"
              onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'"
            >

            <h4>
              ${trip.hotel.name}
            </h4>

            <div class="rating">
              ⭐ ${trip.hotel.rating}
            </div>

            <div class="place-info">

              <span>
                📍 ${trip.hotel.distance} km
              </span>

              <span>
                🛏️ ${trip.hotel.price ? "Kamar / malam" : ""}
              </span>

            </div>

            <div class="place-price">
              ${formatRupiah(trip.hotel.price)}
              <small>/ malam</small>
            </div>

            <div class="place-distance">
              ${trip.hotel.distance <= 30
                ? "✓ Dalam radius 30 km"
                : "✕ Di luar radius"}
            </div>

          </div>


          <!-- DESTINATION -->

          <div class="place-card">

            <div class="place-type">
              🎯 DESTINASI
            </div>

            <img
              class="place-image"
              src="${trip.place.image}"
              alt="${trip.place.name}"
              onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80'"
            >

            <h4>
              ${trip.place.name}
            </h4>

            <div class="rating">
              ⭐ ${trip.place.rating}
            </div>

            <div class="place-info">

              <span>
                📍 ${trip.place.distance} km
              </span>

              <span>
                🎟️ Tiket per orang
              </span>

            </div>

            <div class="place-price">
              ${formatRupiah(trip.place.ticket)}
              <small>/ orang</small>
            </div>

            <div class="place-distance">
              ✓ Dalam radius 30 km
            </div>

          </div>


          <!-- RESTAURANT -->

          <div class="place-card">

            <div class="place-type">
              🍜 MAKANAN
            </div>

            <img
              class="place-image"
              src="${trip.restaurant.image}"
              alt="${trip.restaurant.name}"
              onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'"
            >

            <h4>
              ${trip.restaurant.name}
            </h4>

            <div class="rating">
              ⭐ ${trip.restaurant.rating}
            </div>

            <div class="place-info">

              <span>
                📍 ${trip.restaurant.distance} km
              </span>

              <span>
                🍽️ Estimasi / orang
              </span>

            </div>

            <div class="place-price">
              ${formatRupiah(trip.restaurant.price)}
              <small>/ orang</small>
            </div>

            <div class="place-distance">
              ✓ Dalam radius 30 km
            </div>

          </div>

        </div>


        <div class="trip-footer">

          <div class="cost-breakdown">

            <div>
              <span>Hotel</span>
              <strong>
                ${formatRupiah(trip.hotelTotal)}
              </strong>
            </div>

            <div>
              <span>Destinasi</span>
              <strong>
                ${formatRupiah(trip.destinationTotal)}
              </strong>
            </div>

            <div>
              <span>Makanan</span>
              <strong>
                ${formatRupiah(trip.foodTotal)}
              </strong>
            </div>

            <div>
              <span>Transport</span>
              <strong>
                ${formatRupiah(trip.transportTotal)}
              </strong>
            </div>

          </div>


          <div class="trip-total">

            <span>
              Total estimasi
            </span>

            <strong>
              ${formatRupiah(trip.total)}
            </strong>

            <button
              class="select-trip-btn"
              onclick="selectTrip(${index})"
            >
              Pilih Trip →
            </button>

          </div>

        </div>

      `;


      tripList.appendChild(card);

    }
  );

}


/* =========================================================
   SELECT TRIP
========================================================= */

function selectTrip(index) {

  const trip =
    currentTrips[index];


  if (!trip) return;


  renderSelectedTrip(trip);

  selectedTripSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


/* =========================================================
   SELECTED TRIP DETAILS
========================================================= */

function renderSelectedTrip(trip) {

  const locations = [
    {
      icon: "🏨",
      type: "HOTEL",
      name: trip.hotel.name,
      address: `${trip.hotel.name}, ${currentDestinationName}, Indonesia`
    },
    {
      icon: "🎯",
      type: "DESTINASI",
      name: trip.place.name,
      address: `${trip.place.name}, ${currentDestinationName}, Indonesia`
    },
    {
      icon: "🍜",
      type: "MAKANAN",
      name: trip.restaurant.name,
      address: `${trip.restaurant.name}, ${currentDestinationName}, Indonesia`
    }
  ];

  const mapQuery = locations
    .map(location => location.address)
    .join(" | ");

  const mapCenter =
    `${currentDestinationName}, Indonesia`;

  selectedTripSection.innerHTML = `
    <div class="selected-trip-heading">
      <div>
        <span class="result-label">TRIP TERSIMPAN</span>
        <h2>Rute pilihanmu sudah siap</h2>
        <p>Alamat lokasi dan peta untuk Paket Liburan pilihanmu.</p>
      </div>
      <strong class="selected-total">${formatRupiah(trip.total)}</strong>
    </div>

    <div class="location-list">
      ${locations.map(location => `
        <article class="location-item">
          <span class="location-icon">${location.icon}</span>
          <div>
            <span class="place-type">${location.type}</span>
            <h3>${location.name}</h3>
            <p>${location.address}</p>
          </div>
          <a class="map-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}" target="_blank" rel="noopener noreferrer">Buka Maps ↗</a>
        </article>
      `).join("")}
    </div>

    <div class="map-frame-wrap">
      <div class="map-heading">
        <div>
          <span class="place-type">PETA PERJALANAN</span>
          <h3>Hotel, destinasi, dan makanan</h3>
        </div>
        <a class="map-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}" target="_blank" rel="noopener noreferrer">Buka rute di Google Maps ↗</a>
      </div>
      <iframe
        class="trip-map"
        title="Peta lokasi trip terpilih"
        src="https://www.google.com/maps?q=${encodeURIComponent(mapCenter)}&z=12&output=embed"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  `;

  selectedTripSection.classList.remove("hidden");

}


/* =========================================================
   SORT FILTER
========================================================= */

sortFilter.addEventListener(
  "change",
  function() {

    if (!currentTrips.length) {
      return;
    }


    let sortedTrips =
      [...currentTrips];


    if (this.value === "cheapest") {

      sortedTrips.sort(
        (a, b) => a.total - b.total
      );

    }


    if (this.value === "rating") {

      sortedTrips.sort(
        (a, b) => b.rating - a.rating
      );

    }


    if (this.value === "recommended") {

      sortedTrips.sort(
        (a, b) => {

          const aDiff =
            Math.abs(
              currentBudget - a.total
            );

          const bDiff =
            Math.abs(
              currentBudget - b.total
            );

          return aDiff - bDiff;

        }
      );

    }


    currentTrips =
      sortedTrips;


    updateSummary(
      currentTrips[0],
      currentBudget
    );


    renderTrips(
      currentTrips
    );

  }
);


/* =========================================================
   RESET
========================================================= */

resetBtn.addEventListener(
  "click",
  function() {

    resultSection.classList.add("hidden");
    selectedTripSection.classList.add("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);