document.addEventListener("DOMContentLoaded", () => {
    const introScreen = document.querySelector('.intro-screen');
    setTimeout(() => {
        introScreen.style.display = 'none';
    }, 3000); // 3초 후 인트로 화면 사라짐
});

