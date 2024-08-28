function spin() {
    const spinner = document.getElementById('spinner');
    const randomDeg = Math.floor(Math.random() * 360) + 360;
    spinner.style.transition = 'transform 1s ease-out';
    spinner.style.transform = `rotate(${randomDeg}deg)`;
}
