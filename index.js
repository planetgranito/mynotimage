function uploadImage() {
    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function() {
        const img = new Image();
        img.onload = function() {
            document.getElementById("image-container").appendChild(img);
            const url = img.src;
            const urlDiv = document.createElement("div");
            urlDiv.textContent = "Image URL: " + url;
            document.getElementById("image-container").appendChild(urlDiv);
        };
        img.src = reader.result;
    };
    reader.readAsDataURL(file);
}
