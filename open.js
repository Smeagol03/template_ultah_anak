window.addEventListener("load", () => {
  // Scroll ke atas saat halaman dimuat
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Nonaktifkan scroll awal
  document.body.style.overflow = "hidden";
});

const openButton = document.getElementById("open-button");
const bgMusic = new Audio("./assets/music.mp3");
bgMusic.loop = true;

openButton.addEventListener("click", () => {
  // Aktifkan scroll
  document.body.style.overflow = "auto";

  // Mainkan musik
  bgMusic.play().catch((error) => {
    console.log("Autoplay prevented:", error);
  });

  // Scroll ke section berikutnya
  const nextSection = document.getElementById("next-section");
  if (nextSection) {
    nextSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});
