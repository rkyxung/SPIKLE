export function index() {
  const navLogo = document.getElementById("navLogo");
  const topBtn = document.getElementById("top");
  const mainMockUp01 = document.getElementById("mainMockUp01");
  const mainMockUp02 = document.getElementById("mainMockUp02");
  const mainBadge01 = document.getElementById("Badge01");
  const mainBadge02 = document.getElementById("Badge02");
  const mainBadge03 = document.getElementById("Badge03");
  const mainBadge04 = document.getElementById("Badge04");
  const video = document.getElementById("video");
  const overview = document.querySelector(".overview");
  const overviewGraph = document.querySelector(".overviewGraph");
  const overviewScreen = document.getElementById("overviewScreen");
  const servey = document.querySelector(".onlineServey");
  const serveyInsight = document.querySelector(".insight");
  const serveyPainpoint = document.querySelector(".painpoint");
  const serveyNeeds = document.querySelector(".needs");
  const insightLine = document.getElementById("connectorLine");
  const insight = document.querySelector(".insightSection");
  const targetUsers = document.querySelector(".targetUsers");
  const targetBox01 = document.getElementById("box01");
  const targetBox02 = document.getElementById("box02");
  const targetBox03 = document.getElementById("box03");
  const targetBox04 = document.getElementById("box04");
  const UXflow = document.querySelector(".UXflow");
  const UXScreen = document.getElementById("UXScreen");
  const UXImg = document.getElementById("flowImg");
  const symbol = document.querySelector(".Symbol");
  const symbolLogo = document.getElementById("symbolSpikle");
  const symbolSlogan = document.getElementById("symbolSlogan");
  const symbolImgs = document.getElementById("symbolImgbox");
  const designSystem = document.querySelector(".DesignSystem");
  const font = document.getElementById("font");
  const colors = document.getElementById("color");
  const mainColor = document.getElementById("main");
  const subColor01 = document.getElementById("sub01");
  const subColor02 = document.getElementById("sub02");
  const conceptTitle = document.querySelector(".concept div");
  const conceptTxt = document.querySelector(".concept p");
  const conceptMockup = document.getElementById("conceptMockup");
  const onboarding = document.querySelector(".onboarding");
  const onboardingLine = document.getElementById("onboardingLine");
  const onboardingLineScreen = document.getElementById("onboardingLineScreen");





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
    mainBadge01.style.animation = "UpDown01 1.7s ease-in-out infinite alternate";
    mainBadge02.style.animation = "UpDown02 1.7s ease-in-out infinite alternate";
    mainMockUp01.style.animation = "MockUp01 1.7s ease-in-out infinite alternate";
    mainMockUp02.style.animation = "MockUp02 1.7s ease-in-out infinite alternate";
    mainBadge03.style.animation = "UpDown01 1.7s ease-in-out infinite alternate";
    mainBadge04.style.animation = "UpDown02 1.7s ease-in-out infinite alternate";
  });

  video.addEventListener("click", () => {
    // video를 클릭했을 때 실행되는 함수
    if (video.paused) {
      // 만약 현재 정지 상태라면
      video.play(); // 재생시킴
    } else {
      // 재생 중이라면
      video.pause(); // 정지시킴
    }
  });

  const observer = new IntersectionObserver((entries) => {
    // entries: 화면에 들어온 감지 대상들 배열
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // isIntersecting이 true면, 즉 화면에 들어왔으면

        //오버뷰
        if (entry.target.classList.contains('overview')) {
          overview.classList.add('opacity');
          setTimeout(() => {
            overviewScreen.classList.add('fadeScreen')
          }, 1200);
        }

        //서베이
        if (entry.target.classList.contains('onlineServey')) {
          servey.classList.add('show');
          serveyInsight.style.opacity = '0';
          serveyPainpoint.style.opacity = '0';
          serveyNeeds.style.opacity = '0';
          setTimeout(() => {
            serveyInsight.classList.add('opacity');
          }, 1200);
        }
        if (entry.target.classList.contains('painpoint')) {
          serveyPainpoint.classList.add('opacity');
          insight.style.opacity = '0';
          setTimeout(() => {
            serveyNeeds.classList.add('opacity');
          }, 800);
        }

        //인사이트
        if (entry.target.id === "connectorLine") {
          setTimeout(() => {
            insightLine.classList.add('insightAni');
            insightLine.addEventListener("animationend", () => {
              setTimeout(() => {
                insight.classList.add('insightAni');
              }, 200);
            })
          }, 500);

        }

        //타겟유저
        if (entry.target.classList.contains('targetUsers')) {
          targetUsers.classList.add('show');
          targetBox01.style.opacity = '0';
          targetBox02.style.opacity = '0';
          targetBox03.style.opacity = '0';
          targetBox04.style.opacity = '0';
          setTimeout(() => {
            targetBox01.classList.add('BoxShow');
            targetBox01.addEventListener('animationend', () => {
              targetBox02.classList.add('BoxShow');
            })
            targetBox02.addEventListener('animationend', () => {
              targetBox03.classList.add('BoxShow');
            })
            targetBox03.addEventListener('animationend', () => {
              targetBox04.classList.add('BoxShow');
            })
          }, 1200)
        }

        //UX 플로우
        if (entry.target.classList.contains('UXflow')) {
          UXflow.classList.add('show');
          UXImg.classList.add('show');
        }

        //심볼
        if (entry.target.classList.contains('Symbol')) {
          symbol.classList.add('show');
          symbolLogo.style.opacity = '0';
          symbolSlogan.style.opacity = '0';
          symbolImgs.style.opacity = '0';
          symbol.addEventListener('animationend', () => {
            symbolLogo.classList.add('opacity');
            setTimeout(() => {
              symbolSlogan.classList.add('symbolSloganShow');
            }, 600)
            symbolLogo.addEventListener('animationend', () => {
              symbolImgs.classList.add('show');
              symbolImgs.style.animationDuration = '0.7s';
            })
          })
        }

        //디자인시스템
        if (entry.target.classList.contains('DesignSystem')) {
          designSystem.classList.add('show');
          font.style.opacity = '0';
          colors.style.opacity = '0';
          subColor01.style.opacity = '0';
          subColor02.style.opacity = '0';
          designSystem.addEventListener('animationend', () => {
            font.classList.add('show');
          })
          font.addEventListener('animationend', () => {
            colors.classList.add('show');
            colors.style.animationDuration = '0.7s';
          })

          colors.addEventListener('animationend', () => {
            subColor01.classList.add('subColor01');
            subColor02.classList.add('subColor02');
          })
        }

        //핵심컨셉
        if (entry.target.id === "conceptTitle") {
          conceptTitle.classList.add('symbolSloganShow');
          conceptTitle.addEventListener('animationend', () => {
            conceptTxt.classList.add('symbolSloganShow');
          })
          conceptTxt.addEventListener('animationend', () => {
            conceptMockup.classList.add('show');
            setTimeout(() => {
              conceptMockup.classList.remove('show');
              conceptMockup.style.opacity = '1';
              conceptMockup.classList.add('UpDown01');
            }, 1000);
          })
          // conceptMockup.addEventListener('animationend', () => {
          //   conceptMockup.classList.remove('show');
          //   conceptMockup.style.opacity = '1';
          //   conceptMockup.classList.add('UpDown01');
          // })
        }

        //온보딩
        if (entry.target.id === "onboardingLine") {
          onboardingLine.classList.remove('section');
          // onboardingLineScreen.classList.add('onboardingLine');
        }

        // if (entry.target.classList.contains('onboarding')) {
        //   onboarding.classList.add('show');
        //   onboardingLine.style.opacity = '0';
        //   onboarding.addEventListener('animationend', () => {
        //     onboardingLine.classList.add('onboardingLine');
        //   })

        // }

      }
    });
  }, {
    threshold: 0.5 // 요소가 10%만 보여도 감지되도록 설정
  });


  // 모든 section 요소를 순회하며 observer에 등록
  document.querySelectorAll('.section').forEach((el) => {
    observer.observe(el); // 해당 요소를 감시 대상으로 등록
  });

  console.log(conceptTitle);
  

}

index();