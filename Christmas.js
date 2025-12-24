 const snowflakes = 40;

    for (let i = 0; i < snowflakes; i++) {
      const snow = document.createElement("div");
      snow.className = "snow";
      snow.textContent = "❄";
      snow.style.left = Math.random() * 100 + "vw";
      snow.style.animationDuration = 3 + Math.random() * 7 + "s";
      snow.style.fontSize = 10 + Math.random() * 20 + "px";
      document.body.appendChild(snow);
    }