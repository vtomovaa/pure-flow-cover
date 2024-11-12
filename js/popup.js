// Select elements
const buttons = document.querySelectorAll('.popupbtn');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const closeBtn = document.querySelector('.close');
const commentForm = document.querySelector('form'); 
const commentTextarea = document.getElementById('comment'); 

// Data for each ingredient's popup content
const content = {
    tea: 'Organic Green Tea supports the body’s natural detoxification processes and aids in boosting metabolism.',
    mint: 'Peppermint is a refreshing and aromatic herb known for its digestive benefits. It contains menthol and has a calming effect on the gastrointestinal tract, helping to alleviate bloating, gas, and indigestion.',
    ginger: 'Ginger Root supports healthy digestion by stimulating saliva, bile, and gastric enzymes. It also helps to alleviate nausea, reduce bloating, and improve circulation.',
    lemon: 'Lemon Peel is rich in vitamin C and fiber, helping to boost the immune system and improve digestion. It has antioxidant and anti-inflammatory effects.',
    dandelion: 'Dandelion Root helps the body to eliminate excess water and toxins through increased urine production. It supports kidney function and reduces water retention.',
    comm: 'Thank you for your feedback!'
};

// Show popup with content for ingredient buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const key = button.getAttribute('data-content');
        popupText.innerText = content[key];
        popup.style.display = 'flex';
    });
});

// Show popup with content for form submission
commentForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    popupText.innerText = content['comm'];
    popup.style.display = 'flex';

    commentTextarea.value = '';
});

// Close popup when the close button is clicked
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close popup when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
