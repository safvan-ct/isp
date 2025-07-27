// Include the head
fetch("partials/head.html")
	.then((res) => res.text())
	.then((data) => {
		document.getElementById("headContainer").innerHTML = data;
	})
	.catch((err) => console.error("Error loading head:", err));

// Include the navbar
fetch("partials/navbar.html")
	.then((res) => res.text())
	.then((data) => {
		document.getElementById("navbarContainer").innerHTML = data;

		// Highlight the active link
		const currentPage = location.pathname.split("/").pop();
		const cleanedPage = currentPage.replace(/-.*$/, "").replace(".html", "");
		const route =
			cleanedPage === "index" || cleanedPage === "" ? "home" : cleanedPage;

		const navLinks = document.querySelectorAll(".nav-link");
		navLinks.forEach((link) => {
			const linkText = link.textContent.trim().toLowerCase();
			const linkHref = link
				.getAttribute("href")
				.split("/")
				.pop()
				.replace(".html", "");

			if (linkText === route.toLowerCase() || linkHref === route) {
				link.classList.add("active");
			}
		});
	})
	.catch((err) => console.error("Error loading navbar:", err));

// Include the footer
fetch("partials/footer.html")
	.then((res) => res.text())
	.then((data) => {
		document.getElementById("footerContainer").innerHTML = data;
	})
	.catch((err) => console.error("Error loading head:", err));

// async function saveData() {
//     fetch("db/life.json")
//     const res = await fetch("db/life.json");
//     const topics = await res.json();

//     for (const topic of topics) {
//         const ref = db.collection("life_of_muslim").doc(topic.id.toString());
//         await ref.set(topic);
//         console.log("Uploaded:", topic.title);
//     }
// }

// async function exportCollectionToJson(collectionName) {
//     try {
//         const snapshot = await db.collection(collectionName).get();
//         const data = [];

//         snapshot.forEach(doc => {
//             data.push({ id: doc.id, ...doc.data() });
//         });

//         // Convert to JSON string
//         const jsonStr = JSON.stringify(data, null, 2);

//         // Trigger file download
//         const blob = new Blob([jsonStr], { type: "application/json" });
//         const url = URL.createObjectURL(blob);
//         const a = document.createElement("a");
//         a.href = url;
//         a.download = `${collectionName}.json`;
//         a.click();
//         URL.revokeObjectURL(url);

//         console.log("✅ Exported:", collectionName);
//     } catch (err) {
//         console.error("❌ Export failed:", err);
//     }
// }
