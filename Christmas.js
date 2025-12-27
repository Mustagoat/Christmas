 const snowflakes = 40;

    for (let i = 0; i < snowflakes; i++) 
    {
      const snow = document.createElement("div");
      snow.className = "snow";
      snow.textContent = "❄";
      snow.style.left = Math.random() * 100 + "vw";
      snow.style.animationDuration = 3 + Math.random() * 7 + "s";
      snow.style.fontSize = 10 + Math.random() * 20 + "px";
      document.body.appendChild(snow);

    }
const music = document.getElementById("bg-music");

    function startMusic() 
    {
      music.volume = 0.5; // adjust volume (0.0–1.0)
      music.play().catch(() => {});
      document.removeEventListener("click", startMusic);
      document.removeEventListener("keydown", startMusic);
      document.removeEventListener("touchstart", startMusic);
    }

    document.addEventListener("click", startMusic);
    document.addEventListener("keydown", startMusic);
    document.addEventListener("touchstart", startMusic);
