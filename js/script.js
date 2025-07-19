// Include the head
fetch("layouts/head.html")
	.then((res) => res.text())
	.then((data) => {
		document.head.innerHTML += data;
	})
	.catch((err) => console.error("Error loading head:", err));

// Include the navbar
fetch("layouts/nav.html")
	.then((res) => res.text())
	.then((data) => {
		document.getElementById("navbar-container").innerHTML = data;

		// Highlight the active link
		const currentPage = location.pathname.split("/").pop();
		const cleanedPage = currentPage.replace("-view", "").replace("-chapters", "");

		const navLinks = document.querySelectorAll(".nav-link");
		navLinks.forEach((link) => {
			if (link.getAttribute("href") === cleanedPage) {
				link.classList.add("active");
			}
		});
	})
	.catch((err) => console.error("Error loading navbar:", err));

// Include the footer
fetch("layouts/footer.html")
	.then((res) => res.text())
	.then((data) => {
		document.getElementById("footer-container").innerHTML = data;
	})
	.catch((err) => console.error("Error loading navbar:", err));
