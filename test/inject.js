let progress = 0;
    const progressBar = document.getElementById('progressBar').firstElementChild;

    document.getElementById('yes').addEventListener('click', () => {
        if (progress < 100) {
            progress += 10;
            progressBar.style.width = progress + '%';
            progressBar.textContent = (progress / 10) + '/10';
        }
    });

    document.getElementById('no').addEventListener('click', () => {
        if (progress < 100) {
            progress += 10;
            progressBar.style.width = progress + '%';
            progressBar.textContent = (progress / 10) + '/10';
        }
    });
