let titleCount = 1;
let totalPrice = 0;
const seats = document.querySelectorAll('.seat-btn');
for (let i = 0; i < seats.length; i++) {
    const seat = seats[i];
    seat.addEventListener("click", function () {
        seat.classList.add('bg-[#1DD100]')
        const title = seat.querySelector("span").innerText;
        const cls = 'Economy';
        const perSeatPrice = 550;
        if (titleCount < 5) {
            const titleContainer = document.getElementById('title-container');
            const div = document.createElement("div");
            div.innerText = titleCount + "." + title + "-------------->" + cls + "-------------->" + perSeatPrice;
            titleCount++;
            titleContainer.appendChild(div);
            const price = titleCount * perSeatPrice - 550;
            totalPrice = price;
            document.getElementById('seat-count').innerText = titleCount - 1;
            document.getElementById('seat-left').innerText = 41 - titleCount;
            const grandTotal = totalPrice;
            const discountElement = document.getElementById('grand-total');
            discountElement.innerText = grandTotal;
            document.getElementById('totalPrice').innerText = totalPrice;

        }
        else {
            alert("You Already Select 4");
        }
    })
}
const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener("click", function () {
    const couponElement = document.getElementById('input-field').value;
    const code = couponElement
    if (totalPrice >= 2000) {
        if (code === "NEW15") {
            const discountElement = document.getElementById('grand-total');
            const discountAmount = totalPrice * 0.15;
            const grandTotal = totalPrice - discountAmount;
            discountElement.innerText = grandTotal;
            document.getElementById('input-field').value = "";
        } else if (code === "Couple 20") {
            const discountElement = document.getElementById('grand-total');
            const discountAmount = totalPrice * 0.2;
            const grandTotal = totalPrice - discountAmount;
            discountElement.innerText = grandTotal;

        }

        else {
            alert("invalid code")
        }

    }
    else {
        alert("Pleace at least select 4");
    }


})


const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener("click", function () {
    hideElementById();
    showElementById();
})


