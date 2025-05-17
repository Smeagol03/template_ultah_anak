window.addEventListener("load", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.body.style.overflow = "hidden";

const openButton = document.querySelector("button");

const bgMusic = new Audio("./assets/music.mp3");
bgMusic.loop = true;

openButton.addEventListener("click", () => {
  document.body.style.overflow = "auto";

  bgMusic.play().catch((error) => {
    console.log("Autoplay prevented:", error);
  });

  const nextSection = document.querySelector("#next-section");
  if (nextSection) {
    nextSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});
