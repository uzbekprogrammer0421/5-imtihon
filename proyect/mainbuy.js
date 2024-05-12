document.getElementById('biletForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var departure = document.getElementById('departure').value;
    var destination = document.getElementById('destination').value;
    var date = document.getElementById('date').value;

    var biletNarxi = calculateTicketPrice(departure, destination, date);

    document.getElementById('biletInfo').innerHTML = `Jo'nab ketish joyi: ${departure}<br>
                                                        Yetib borish joyi: ${destination}<br>
                                                        Safar sanasi: ${date}<br>
                                                        Bilet narxi: $${biletNarxi}`;
});

function calculateTicketPrice(departure, destination, date) {
    return 100;
}

const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");
toggle.addEventListener("click", () => {
sidebar.classList.toggle("close");
})
searchBtn.addEventListener("click", () => {
sidebar.classList.remove("close");
})
modeSwitch.addEventListener("click", () => {
body.classList.toggle("dark");
if (body.classList.contains("dark")) {
  modeText.innerText = "Light mode";
} else {
  modeText.innerText = "Dark mode";
}
});