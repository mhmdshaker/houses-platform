const searchInput = document.getElementById('searchInput');
const apartments = document.querySelectorAll('.apartment');

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();

    apartments.forEach(apartment => {
        const location = apartment.getAttribute('data-location').toLowerCase();

        if (location.includes(query)) {
            apartment.style.display = ''; // Show the apartment
        } else {
            apartment.style.display = 'none'; // Hide the apartment
        }
    });
});
