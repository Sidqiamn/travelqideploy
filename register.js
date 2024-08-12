document.addEventListener('DOMContentLoaded', () => {
    const upload = document.querySelector('.uploadicon');
  
    upload.addEventListener('click', () => {
        upload.classList.add('bgimage'); // Perbaikan pada classList.add
    });
});
