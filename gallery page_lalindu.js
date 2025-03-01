// JavaScript for Image Gallery

// Function to open full-size image
function openFullImg(src, description) {
    document.getElementById('fullImg').src = src;
    document.getElementById('imgDescription').innerHTML = description;
    document.getElementById('fullImgBox').style.display = 'block';
}

// Function to close full-size image
function closeFullImg() {
    document.getElementById('fullImgBox').style.display = 'none';
}

// Function to change font size
function changeFontSize() {
    var selectedSize = document.getElementById('fontSize').value;
    document.body.style.fontSize = selectedSize;
}

// Function to change background color
function changeBgColor() {
    var selectedColor = document.getElementById('bgColor').value;
    document.body.style.backgroundColor = selectedColor;
}
// JavaScript for smooth scrolling to top
document.querySelector('.top a').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
