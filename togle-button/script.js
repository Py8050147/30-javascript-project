document.addEventListener('DOMContentLoaded', function() {
    const arrowButton = document.querySelector('.arrow');
    const closeButton = document.querySelector('.close');
    const hiddenMenu = document.querySelector('.hidden');
    const box = document.querySelector('.box')

    arrowButton.addEventListener('click', function() {
        hiddenMenu.style.display = 'block';  // Show hidden menu
        arrowButton.style.display = 'none';  // Hide arrow button
        closeButton.style.display = 'block'; // Show close 
        box.style.display = 'none'

        // console.log('hiii')
    });

    closeButton.addEventListener('click', function() {
        hiddenMenu.style.display = 'none';   // Hide hidden menu
        closeButton.style.display = 'none';  // Hide close button
        arrowButton.style.display = 'block'; // Show arrow button
        box.style.display = 'flex'
    });
});