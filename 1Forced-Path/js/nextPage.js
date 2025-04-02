function nextPage() {
    console.log("Redirecting to next page...");
    
    const currentFile = window.location.pathname.split("/").pop();
    const currentPageNumber = parseInt(currentFile.match(/\d+/)[0]);

    if (!isNaN(currentPageNumber)) {
        const nextPageNumber = currentPageNumber + 1;
        const nextPage = `fp${nextPageNumber}.html`; // Example: "fp2.html"
        
        document.body.classList.remove("loaded");
        setTimeout(() => {
            window.location.href = nextPage;
        }, 500);
    } else {
        console.error("Next page not found");
    }
}

// Make the function globally accessible
window.nextPage = nextPage;
