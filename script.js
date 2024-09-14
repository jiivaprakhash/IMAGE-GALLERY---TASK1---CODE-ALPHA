let currentIndex = 0;
const images = [
    "file:///D:/image%20gallery/images/alp.img1.jpg",
    "file:///D:/image%20gallery/images/ani.alp.jpeg",
    "file:///D:/image%20gallery/images/alp.img5.jpeg",
    "file:///D:/image%20gallery/images/alp.img4.jpg",
    "file:///D:/image%20gallery/images/alp.img8.jpeg",
    "file:///D:/image%20gallery/images/alp.img7.jpeg",
    "file:///D:/image%20gallery/images/alp.img6.jpeg"
];

function openLightbox(index) {
    currentIndex = index;
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.querySelector(".lightbox-image");
    lightbox.style.display = "flex";
    lightboxImage.src = images[index];
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    document.querySelector(".lightbox-image").src = images[currentIndex];
}

// Close lightbox on escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});
