**PROJECT TITLE-RESTAURANT TABLE BOOKING**

**Overview**

Flavor Town is a colorful and user-friendly restaurant table booking web application built using HTML, CSS, and JavaScript.
It allows users to sign up, log in, and book tables online.
The system securely stores user data and booking information in the browser using localStorage, simulating a real booking workflow.

**Problem Statement**

Traditional table booking systems often require manual tracking or phone calls, which can lead to confusion and double bookings.
This project aims to digitize the booking process by offering an intuitive, web-based solution that handles user authentication, table allocation, and booking management seamlessly.

**Key Features**

✅ **User Authentication**

Sign Up and Login functionality with validation
LocalStorage used to manage registered users

✅ **Secure Booking System**

Only logged-in users can access the booking page
Auto-assigned table numbers for every booking
List of all booked tables with complete details

✅ **Booking Details**

Customer name, email, phone, date, time, and number of guests
Bookings displayed dynamically in a structured table

✅ **Data Persistence**

All user and booking data stored in localStorage
Data retained even after page reload

✅ **Responsive & Colorful Design**

Modern UI with consistent alignment and attractive color palette
Works smoothly on desktops, tablets, and mobile devices

✅ **Logout Option**

Allows the user to securely log out and end their session

**Project Structure**

restaurant-booking/

│
├── index.html          # Landing Page

├── signup.html         # Sign Up Page

├── login.html          # Login Page

├── booking.html        # Booking Page (requires login)

├── style.css           # Stylesheet

└── script.js           # JavaScript functionality

**Expected Outcome**

Users can register and log in successfully.

Booking form allows table reservations with proper validation.

Booked tables list updates dynamically with assigned table numbers.

Users cannot book tables without logging in.
