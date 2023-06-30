console.log('This is drag and drop utility');

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');
// const whiteBoxes = document.querySelectorAll('whiteBox');

// Event listeners for draggable element imgBox

// When we start to drag the image  jab pakda toh kya hoga
imgBox.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    e.target.className += ' hold'; // jispe event lagaya hua hai uske class me hold class add kar rahe hai with space kyunki jab hame ek element ko multiple classes deni padti hai toh space se unhe separate karna hota hai

    setTimeout(() => {
        e.target.className = 'hide'; // gayab kar dega kuchh der ke baad matlab settimeout 0 ka matlab hai ke jab sab kuchh ho jaye tab usko run kare(gayab kare)
    }, 0);

});

// When we left the image  jab chhoda tab kya hoga
imgBox.addEventListener('dragend', (e) => {
    console.log('DragEnd has been triggered');
    e.target.className = 'imgBox';
});

// sare whiteBox pe EventListener lagana hai
for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault(); // ab drop kar sakte hai
        console.log('DragOver has been triggered');
    });

    whiteBox.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been triggered');
        e.target.className += ' dashed'; 
    })

    whiteBox.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been triggered');
        e.target.className = 'whiteBox';
    })

    whiteBox.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(imgBox);
    })
}
