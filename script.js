// Telefon ekranidagi vaqtni yangilab turish
function updateClock() {
    const timeElement = document.querySelector('.time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}`;
}

// Har daqiqada vaqtni yangilash
setInterval(updateClock, 1000);
updateClock();

// Tugmalar bosilganda xabar chiqarish (log)
document.querySelectorAll('.item').forEach(btn => {
    btn.addEventListener('click', function() {
        console.log(`Siz ${this.textContent.trim()} bo'limiga o'tayapsiz...`);
    });
});