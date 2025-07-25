// Include the head
fetch("../head.html")
	.then((res) => res.text())
	.then((data) => {
		document.getElementById("headContainer").innerHTML = data;
	})
	.catch((err) => console.error("Error loading head:", err));

// Include the navbar
fetch("../navbar.html")
	.then((res) => res.text())
	.then((data) => {
		document.getElementById("navbarContainer").innerHTML = data;

		// Highlight the active link
		const currentPage = location.pathname.split("/").pop();
		const cleanedPage = currentPage.replace(/-.*$/, "");
		const route = cleanedPage == "death" ? "life" : cleanedPage;

		const navLinks = document.querySelectorAll(".nav-link");
		navLinks.forEach((link) => {
			const linkText = link.textContent.trim().toLowerCase();

			if (linkText === route.toLowerCase()) {
				link.classList.add("active");
			}
		});
	})
	.catch((err) => console.error("Error loading navbar:", err));

// Include the footer
fetch("../footer.html")
	.then((res) => res.text())
	.then((data) => {
		document.getElementById("footerContainer").innerHTML = data;
	})
	.catch((err) => console.error("Error loading head:", err));
