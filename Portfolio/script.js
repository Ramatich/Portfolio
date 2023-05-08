document.addEventListener('DOMContentLoaded', function() {
    // Define the number of bubbles and their sizes
    const numBubbles = 50;
    const bubbleSizes = ['small', 'medium', 'large'];
  
    // Create the bubbles and add them to the DOM
    for (let i = 0; i < numBubbles; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      const size = bubbleSizes[Math.floor(Math.random() * bubbleSizes.length)];
      bubble.classList.add(size);
      document.querySelector('.bubbles').appendChild(bubble);
    }
  
    // Animate the bubbles
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(bubble => {
      // Set the initial position of the bubble randomly within the screen width and height
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const initialX = Math.floor(Math.random() * screenWidth);
      const initialY = Math.floor(Math.random() * screenHeight);
      bubble.style.left = `${initialX}px`;
      bubble.style.top = `${initialY}px`;
  
      // Set the speed and direction of the bubble based on the screen width and height
      const minSpeed = 5;
      const maxSpeed = 15;
      const speedX = Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed;
      const speedY = Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed;
      const directionX = Math.random() < 0.5 ? -1 : 1;
      const directionY = Math.random() < 0.5 ? -1 : 1;
  
      // Animate the bubble using a setInterval function
      let positionX = initialX;
      let positionY = initialY;
      const animation = setInterval(() => {
        // Update the position of the bubble based on its speed and direction
        positionX += speedX * directionX;
        positionY += speedY * directionY;
  
        // If the bubble goes off the screen, reset its position and direction
        if (positionX < -100 || positionX > screenWidth + 100) {
          positionX = Math.floor(Math.random() * screenWidth);
          directionX = Math.random() < 0.5 ? -1 : 1;
        }
        if (positionY < -100 || positionY > screenHeight + 100) {
          positionY = Math.floor(Math.random() * screenHeight);
          directionY = Math.random() < 0.5 ? -1 : 1;
        }
  
        // Update the position of the bubble
        bubble.style.left = `${positionX}px`;
        bubble.style.top = `${positionY}px`;
      }, 30);
    });
  
    // Animate the buttons
    const buttons = document.querySelectorAll('.button');
    let buttonIndex = 0;
    setInterval(() => {
      buttons.forEach((button, index) => {
        button.classList.remove('active');
        if (index === buttonIndex % buttons.length) {
          button.classList.add('active');
        }
      });
      buttonIndex++;
    }, 2000);
  });
//cursor color trail feature
document.addEventListener("DOMContentLoaded", function() {
    const trail = document.createElement("div");
    trail.classList.add("cursor-trail");
    document.body.appendChild(trail);
  
    const colors = ["#ff6699", "#ffcc66", "#66ccff", "#99ff66", "#ff6666"];
    const numCircles = 5;
    const circles = [];
  
    for (let i = 0; i < numCircles; i++) {
      const circle = document.createElement("span");
      circle.style.top = 0;
      circle.style.left = 0;
      trail.appendChild(circle);
      circles.push(circle);
    }
  
    document.addEventListener("mousemove", function(event) {
      circles.forEach(function(circle) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        circle.style.backgroundColor = randomColor;
        circle.style.top = event.pageY + "px";
        circle.style.left = event.pageX + "px";
      });
    });
  });


  /*name pop up style*/
  
  