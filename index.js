export function index () {
  const navLogo = document.getElementById("navLogo");

  navLogo.addEventListener('mouseover', () => {
    navLogo.src = "img/navLogoHover.png";
    navLogo.style.backgroundColor = "#111";
  });
}

index();