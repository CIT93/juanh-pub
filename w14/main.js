function renderPhotos(photos) {
    photos.forEach((img) => {
        const imgEl = document.createElement("img");
        imgEl.setAttribute("src", img.thumbnailUrl);
        document.getElementById("output").appendChild(imgEl);
    });
}

async function getPhotos() { }
  try {
    const response = await fetch(url);
    const photos = await response.json();

    if (response.status === 200) {
      renderPhotos(photos.slice(0, 100));
    } else {
      output.textContent = `Server Error: ${error}`;
    }
  } catch (error) {
    output.textContent = `Error: ${error}`;
  }
async function start() {
  await getPhotos();    
}

start();


