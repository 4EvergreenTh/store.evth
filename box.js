// Box Buttons
document.getElementById('box1').addEventListener('click', () => {
    document.getElementById('panel1').classList.toggle('open');
});

document.getElementById('box2').addEventListener('click', () => {
    document.getElementById('panel2').classList.toggle('open');
});





// Thumbnail -> main image for gallery1
(function () {
    const thumbs = document.querySelectorAll('.gallery1 img');
    const main = document.getElementById('mainImage1');
    const overlay = document.getElementById('overlayText');

    thumbs.forEach(img => {
        img.addEventListener('click', () => {
            main.classList.add('fade-out');
            const newSrc = img.getAttribute('data-full');
            const newText = img.getAttribute('data-text'); // HTML string

            setTimeout(() => {
                main.src = newSrc;
                main.classList.remove('fade-out');
                overlay.innerHTML = newText; // allow HTML
            }, 200);
        });
    });
})();

// Thumbnail -> main image for gallery2
(function () {
    const thumbs = document.querySelectorAll('.gallery2 img');
    const main = document.getElementById('mainImage2');
    const overlay = document.getElementById('overlayText');

    thumbs.forEach(img => {
        img.addEventListener('click', () => {
            main.classList.add('fade-out');
            const newSrc = img.getAttribute('data-full');
            const newText = img.getAttribute('data-text'); // or a custom data attribute

            setTimeout(() => {
                main.src = newSrc;
                main.classList.remove('fade-out');
                overlay.textContent = newText; // update overlay
            }, 200);
        });
    });
})();
