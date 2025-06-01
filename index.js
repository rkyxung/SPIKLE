export function index() {
  const navLogo = document.getElementById("navLogo");
  const topBtn = document.getElementById("top");
  const mainMockUp01 = document.getElementById("mainMockUp01");
  const mainMockUp02 = document.getElementById("mainMockUp02");
  const mainBadge01 = document.getElementById("Badge01");
  const mainBadge02 = document.getElementById("Badge02");
  const mainBadge03 = document.getElementById("Badge03");
  const mainBadge04 = document.getElementById("Badge04");
  const sw = document.querySelector('.scroll-wrapper');
  console.log(sw.scrollHeight, sw.clientHeight);

  navLogo.addEventListener('mouseover', () => {
    navLogo.src = "img/navLogoHover.png";
  });

  navLogo.addEventListener('mouseleave', () => {
    navLogo.src = "img/navLogo.png";
  });

  topBtn.addEventListener('mouseover', () => {
    topBtn.src = "img/TopHover.png";
  });

  topBtn.addEventListener('mouseleave', () => {
    topBtn.src = "img/Top.png";
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0, // 맨 위로
      behavior: "smooth" // 스르륵 올라가게
    });
  });

  mainMockUp01.addEventListener('animationend', () => {
    mainMockUp01.style.opacity = "1";
    mainMockUp02.style.opacity = "1";
    mainBadge01.style.opacity = "1";
    mainBadge02.style.opacity = "1";
    mainBadge03.style.opacity = "1";
    mainBadge04.style.opacity = "1";
    mainBadge01.style.animation = "UpDown01 0.8s ease-in-out infinite alternate";
    mainBadge02.style.animation = "UpDown02 0.8s ease-in-out infinite alternate";
    mainMockUp01.style.animation = "MockUp01 0.8s ease-in-out infinite alternate";
    mainMockUp02.style.animation = "MockUp02 0.8s ease-in-out infinite alternate";
    mainBadge03.style.animation = "UpDown01 0.8s ease-in-out infinite alternate";
    mainBadge04.style.animation = "UpDown02 0.8s ease-in-out infinite alternate";
  });

}

index();