function animateSecondCircle(ballClassName, circleClassName, degreeStartPosition, clockwise, duration) {
    const ball = document.getElementsByClassName(ballClassName)[0];
    const startTime = performance.now();

    function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = (elapsed % duration) / duration; // Progress (0 to 1)
        const bigCircle = document.querySelectorAll(circleClassName)[0];
        const translateDistance = bigCircle.offsetWidth/2;
        
        // Calculate the rotation and translation
        const rotation = -degreeStartPosition - 360 * progress;
        
        if (clockwise) {
            ball.style.transform = `rotate(${rotation}deg) translate(${translateDistance}px) rotate(${-rotation}deg)`;
        } else {
            ball.style.transform = `rotate(${-rotation}deg) translate(${translateDistance}px) rotate(${rotation}deg)`;
        }
         
        requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

animateSecondCircle('first-ball', '.outer.first-page-circle', 50, true, 5000);
animateSecondCircle('second-ball', '.outer.first-page-circle', 100, false, 4000);
animateSecondCircle('third-ball', '.inner.first-page-circle', 180, true, 4000);
animateSecondCircle('fourth-ball', '.inner.first-page-circle', 300, false, 5000);