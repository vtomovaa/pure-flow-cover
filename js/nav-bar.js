const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const dropbtn = document.querySelector('.dropbtn');

dropbtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up to the document
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdownContent.style.display = 'none';
    }
});