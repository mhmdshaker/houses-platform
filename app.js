const searchInput = document.getElementById('searchInput');
const locationSelect = document.getElementById('locationSelect');
const apartments = document.querySelectorAll('.apartment');

function filterApartments() {
    const query = searchInput.value.toLowerCase();
    const selectedLocation = locationSelect.value.toLowerCase();

    apartments.forEach(apartment => {
        const location = apartment.getAttribute('data-location').toLowerCase();
        
        // Check if the apartment matches the search query and selected location
        if (
            (location.includes(query) || query === "") && // Match search input
            (location === selectedLocation || selectedLocation === "") // Match selected location
        ) {
            apartment.style.display = ''; // Show the apartment
        } else {
            apartment.style.display = 'none'; // Hide the apartment
        }
    });
}

// Event listeners
searchInput.addEventListener('input', filterApartments);
locationSelect.addEventListener('change', filterApartments);
