// ====== SIGN UP ======
document.getElementById("signupForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword").value;

    if(password !== cpassword){
        alert("Passwords do not match!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    if(users.find(u => u.email === email)){
        alert("Email already exists!");
        return;
    }

    users.push({name,email,password});
    localStorage.setItem("users", JSON.stringify(users));
    alert("Sign Up successful!");
    window.location.href = "login.html";
});

// ====== LOGIN ======
document.getElementById("loginForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let user = users.find(u => u.email === email && u.password === password);

    if(user){
        // Save logged-in user to localStorage
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Login successful!");
        window.location.href = "booking.html";
    } else {
        alert("Invalid credentials!");
    }
});

// ====== BOOKING ======
document.addEventListener("DOMContentLoaded", function(){
    // Check if user is logged in
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if(!loggedInUser && window.location.pathname.includes("booking.html")){
        alert("You must login first!");
        window.location.href = "login.html";
        return;
    }

    // Display existing bookings
    displayBookings();

    // Booking form submission
    document.getElementById("bookingForm")?.addEventListener("submit", function(e){
        e.preventDefault();
        const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");

        // Assign next table number automatically
        const tableNumber = bookings.length + 1;

        const booking = {
            name: document.getElementById("bName").value,
            email: document.getElementById("bEmail").value,
            phone: document.getElementById("bPhone").value,
            date: document.getElementById("bDate").value,
            time: document.getElementById("bTime").value,
            guests: document.getElementById("bGuests").value,
            table: tableNumber
        };

        bookings.push(booking);
        localStorage.setItem("bookings", JSON.stringify(bookings));

        document.getElementById("bookingMessage").innerHTML = `<p style="color:green;">Table ${tableNumber} booked successfully for ${booking.guests} guest(s) on ${booking.date} at ${booking.time}!</p>`;
        document.getElementById("bookingForm").reset();

        displayBookings();
    });
});

// ====== DISPLAY BOOKING LIST ======
function displayBookings(){
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const listDiv = document.getElementById("bookingList");
    if(!listDiv) return;

    if(bookings.length === 0){
        listDiv.innerHTML = "<p>No tables booked yet.</p>";
        return;
    }

    let html = `<h3>Booked Tables</h3>
                <table>
                    <tr>
                        <th>Table No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Guests</th>
                    </tr>`;
    bookings.forEach(b => {
        html += `<tr>
                    <td>${b.table}</td>
                    <td>${b.name}</td>
                    <td>${b.email}</td>
                    <td>${b.phone}</td>
                    <td>${b.date}</td>
                    <td>${b.time}</td>
                    <td>${b.guests}</td>
                 </tr>`;
    });
    html += `</table>`;
    listDiv.innerHTML = html;
}

// ====== LOGOUT ======
function logout(){
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
