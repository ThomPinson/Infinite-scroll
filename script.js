const imageContainer = document.getElementById('image-container')
// const loader = document.getElementById(loader);

let photosArray = [];

// Create Elements for Links & Photos, Add to DOM
function displayPhotos() {
    // Run Function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create img for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('Title', photo.alt_description);
        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Unsplash API
const count = 10;
const apiKey = 'igARG4IajCK3PmQpzG_6VAQCqMJd_OHsPdMAIV8GQ74';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Get Photos from Unsplash
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // Catch Error Here
    }
}

//  On Load
getPhotos();