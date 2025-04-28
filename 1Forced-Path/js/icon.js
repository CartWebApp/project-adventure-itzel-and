// this is to get the little icon at the top of every page



// Create a new <link> element
var link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/jpeg';  // Specify the type as JPEG (or "image/jpg")
link.href = 'assets/icon.jpg'; // Path to the image in the 'assets' folder

// Append the <link> element to the <head> section
document.head.appendChild(link);
