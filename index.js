export function index() {
  const header = document.querySelector("header");
  const navLogo = document.getElementById("navLogo");
  const scrollWrapper = document.querySelector(".scroll-wrapper");
  const topBtn = document.getElementById("top");
  const mainMockUp01 = document.getElementById("mainMockUp01");
  const mainMockUp02 = document.getElementById("mainMockUp02");
  const mainBadge01 = document.getElementById("Badge01");
  const mainBadge02 = document.getElementById("Badge02");
  const mainBadge03 = document.getElementById("Badge03");
  const mainBadge04 = document.getElementById("Badge04");
  const video = document.getElementById("video");
  const playBtn = document.getElementById("playBtn");
  const overview = document.querySelector(".overview");
  const overviewGraph = document.querySelector("#graph");
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
  const onboardingTitle = document.querySelector("#onboardingTxt div");
  const onboardingTxt = document.querySelector("#onboardingTxt p")
  const onboardingMockup = document.getElementById("onboardingBg");
  const onboardingGif = document.getElementById("onboardingGif");
  const Home = document.querySelector(".Home");
  const HomeTitle = document.getElementById("HomeLabel");
  const HomeTxt = document.getElementById("HomeTitle");
  const HomeMockup = document.getElementById("HomeMockup");
  const missionSectionTxt = document.getElementById("missionSectionTxt");
  const missionLine = document.getElementById("missionLine");
  const HomeLineGraph = document.getElementById("HomeLineGraph");
  const HomeLineGraphTxt = document.getElementById("HomeLineGraphTxt");
  const HomeGraphImg01 = document.getElementById("HomeGraph01");
  const HomeGraphImg02 = document.getElementById("HomeGraph02");
  const tipSectionTxt = document.getElementById("tipSectionTxt");
  const tipLine = document.getElementById("tipLine");
  const AIcamera = document.getElementById("cameraImg");
  const AItitle = document.querySelector("#cameraTitle div");
  const AItxt = document.querySelector("#cameraTitle p");
  const MissionSectionTitle = document.getElementById("missionTitle");
  const MissionSectionText = document.querySelector("#missionTitle p");
  const missionImg03 = document.getElementById("mission03")
  const missionDes03 = document.querySelector("#teamDes")
  const missionImg02 = document.getElementById("mission02");
  const missionDes02 = document.querySelector("#missionCenter .des");
  const missionCenter = document.querySelector("#missionCenter");
  const missionImg04 = document.getElementById("mission04");
  const missionDes04 = document.getElementById("rankingDes");
  const collectionMockup01 = document.getElementById("CollectionMockup01");
  const collectionMockup02 = document.getElementById("CollectionMockup02");
  const collectionTxt = document.getElementById("collectionDes");
  const collectionImg01 = document.getElementById("collectionImg01");
  const collectionImg02 = document.getElementById("collectionImg02");
  const collectionImg03 = document.getElementById("collectionImg03");
  const collectionImg04 = document.getElementById("collectionImg04");
  const communityTitle = document.querySelector("#communityTitle");
  const communityTxt = document.querySelector("#communityTitle p");
  const communityImg = document.getElementById("communityImg");
  const communityTxtImg = document.getElementById("communityTxt");
  const myPageMockup = document.getElementById("myPageMockup");
  const myPageTitle = document.querySelector("#myPageTitle div");
  const myPageTxt = document.querySelector("#myPageTitle p");
  const navVideo = document.getElementById("nav01");
  const navProject = document.getElementById("nav02");
  const navDesign = document.getElementById("nav03");
  const navService = document.getElementById("nav04");

  navLogo.addEventListener('mouseover', () => {
    navLogo.src = "img/navLogoHover.png";
  });

  navLogo.addEventListener('mouseleave', () => {
    navLogo.src = "img/navLogo.png";
  });



  navVideo.addEventListener("click", () => {
    document.querySelector(".video").scrollIntoView({
      behavior: "smooth"
    });
  });

  navProject.addEventListener("click", () => {
    const target = document.querySelector(".overview");
    const y = target.getBoundingClientRect().top + window.scrollY - 50;

    window.scrollTo({
      top: y,
      behavior: "smooth"

    });
  });

  navDesign.addEventListener("click", () => {
    const target = document.querySelector(".Symbol");
    if (!target) return;

    const y = target.getBoundingClientRect().top + window.scrollY - 50;
    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  });

  navService.addEventListener("click", () => {
    const target = document.querySelector(".concept");
    if (!target) return;

    const y = target.getBoundingClientRect().top + window.scrollY - 50;
    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header"); // 헤더 요소 선택
  const mainBanner = document.querySelector(".mainBanner"); // 메인배너 선택
  const scrollWrapper = document.querySelector(".scroll-wrapper"); // 스크롤랩퍼 선택

  scrollWrapper.addEventListener("scroll", () => {
    const scrollY = scrollWrapper.scrollTop; // scroll-wrapper 내부 스크롤 위치
    const mainBannerHeight = mainBanner.offsetHeight; // 메인배너 전체 높이
    const hidePoint = mainBannerHeight / 2; // 메인배너 중간 지점 기준으로 숨김 판단

    if (scrollY >= hidePoint) {
      // 중간 아래로 내려갔으면 헤더 숨김
      header.style.opacity = "0";
      header.style.pointerEvents = "none";
    } else {
      // 중간 이상 올라왔으면 헤더 다시 보이게
      header.style.opacity = "1";
      header.style.pointerEvents = "auto";
    }
  });
});



  topBtn.addEventListener('mouseover', () => {
    topBtn.src = "img/TopHover.png";
  });

  topBtn.addEventListener('mouseleave', () => {
    topBtn.src = "img/Top.png";
  });

  topBtn.addEventListener("click", () => {
    const wrapperTop = scrollWrapper.getBoundingClientRect().top;

    if (wrapperTop < 0) {
      // scroll-wrapper가 현재 화면 위에 있음 → 먼저 window 기준으로 이동
      window.scrollTo({
        top: scrollWrapper.offsetTop,
        behavior: "smooth"
      });

      // 💡 약간의 시간 뒤에 scroll-wrapper 내부도 이동시킴
      setTimeout(() => {
        scrollWrapper.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 500); // 스크롤 타이밍에 맞춰 약간 지연 (필요 시 조절)
    } else {
      // scroll-wrapper 안에 있는 상태면 내부에서만 위로 스크롤
      scrollWrapper.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
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



  playBtn.addEventListener("click", () => {
    video.play();
    playBtn.style.display = "none";
  });


  video.addEventListener("click", () => {
    if (!video.paused) {
      video.pause();
      playBtn.style.display = "block";
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

        }

        //서베이
        if (entry.target.classList.contains('onlineServey')) {
          servey.classList.add('show');
          serveyInsight.style.opacity = '0';
          serveyPainpoint.style.opacity = '0';
          serveyNeeds.style.opacity = '0';
          setTimeout(() => {
            serveyInsight.classList.add('opacity');
            serveyInsight.style.animationDuration = '0.6s';
          }, 400);
        }
        if (entry.target.classList.contains('painpoint')) {
          serveyPainpoint.classList.add('opacity');
          serveyPainpoint.style.animationDuration = '0.6s';
          insight.style.opacity = '0';
          setTimeout(() => {
            serveyNeeds.classList.add('opacity');
            serveyNeeds.style.animationDuration = '0.6s';
          }, 400);
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
          }, 700)
        }

        // box03.addEventListener("mouseenter", () => {
        //   box01.style.backgroundImage = 'url("img/Target01Hover.png")';
        //   box01.style.color = "#fff";
        //   box01.style.fontWeight = "500";
        // });

        // box03.addEventListener("mouseleave", () => {
        //   box01.style.backgroundImage = 'url("img/Target01.png")';
        //   box01.style.color = "#000";
        //   box01.style.fontWeight = "600";
        // });

        //UX 플로우
        if (entry.target.classList.contains('UXflow')) {
          UXflow.classList.add('show');
          UXImg.style.opacity = '0';
        }

        if (entry.target.id === "flowImg") {
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
            symbolLogo.style.animationDuration = '0.8s';
            setTimeout(() => {
              symbolSlogan.classList.add('symbolSloganShow');
            }, 500)
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
          onboardingLineScreen.classList.add('onboardingLine');
          onboardingLineScreen.addEventListener('animationend', () => {
            onboarding.classList.add('showDown');
            onboardingTxt.style.opacity = '0';
            onboardingMockup.style.opacity = '0';
            onboardingGif.style.opacity = '0';
          })
          onboarding.addEventListener('animationend', () => {
            onboardingTxt.classList.add('symbolSloganShow');
            onboardingTxt.style.animationDuration = '0.7s';
          })
          onboardingTxt.addEventListener('animationend', () => {
            onboardingMockup.classList.add('onboardingMockupShow');
            onboardingGif.classList.add('onboardingGif');
            onboardingGif.addEventListener('animationend', () => {
              onboardingGif.src = "video/onboarding.gif";
            }, 100);
          })
        }

        //홈섹션
        if (entry.target.classList.contains('Home')) {
          Home.classList.add('symbolSloganShow');
          HomeTxt.style.opacity = '0';
          missionSectionTxt.style.opacity = '0';
          Home.addEventListener('animationend', () => {
            HomeTxt.classList.add('symbolSloganShow');
            HomeTxt.style.animationDuration = '0.7s';
          })
          HomeTxt.addEventListener('animationend', () => {
            HomeMockup.classList.add('homeMockupShow');
          })
          HomeMockup.addEventListener('animationend', () => {
            missionLine.classList.add('missionLineAni');
            // setTimeout(() => {
            //   missionSectionTxt.classList.add('symbolSloganShow');
            // }, 400);
          })
          missionLine.addEventListener('animationend', () => {
            missionSectionTxt.classList.add('symbolSloganShow');
          });
          missionSectionTxt.addEventListener('animationend', () => {
            HomeLineGraph.classList.add('missionLineAni');
            HomeLineGraph.style.animationDuration = '0.6s'
          })
          HomeLineGraph.addEventListener('animationend', () => {
            HomeLineGraphTxt.classList.add('symbolSloganShow');
          })
          HomeLineGraphTxt.addEventListener('animationend', () => {
            HomeGraphImg01.classList.add('opacity');
            HomeGraphImg01.style.animationDuration = '1s'
            HomeGraphImg02.classList.add('opacity');
            HomeGraphImg02.style.animationDuration = '1s'
          })
          HomeGraphImg02.addEventListener('animationend', () => {
            tipLine.classList.add('missionLineAni');
          })
          tipLine.addEventListener('animationend', () => {
            tipSectionTxt.classList.add('symbolSloganShow');
            tipSectionTxt.style.animationDuration = '0.5s'
          })
        }

        //AI카메라
        if (entry.target.id === "cameraImg") {
          AIcamera.classList.add('show');
          AIcamera.addEventListener('animationend', () => {
            AIcamera.src = "video/cameraMockUp.gif"
          }, 100);
          AIcamera.addEventListener('animationend', () => {
            AItitle.classList.add('missionLineAni');
          })
          AItitle.addEventListener('animationend', () => {
            AItxt.classList.add('symbolSloganShow');
          })
        }

        //미션섹션
        if (entry.target.id === "missionTitle") {
          MissionSectionTitle.classList.add('symbolSloganShow');
          MissionSectionTitle.addEventListener('animationend', () => {
            MissionSectionText.classList.add('symbolSloganShow');
          })
          MissionSectionText.addEventListener('animationend', () => {
            missionImg03.classList.add('show');
            missionImg03.addEventListener('animationend', () => {
              missionImg03.src = "video/mission03.gif";
              missionDes03.classList.add('missionLineAni');
              missionDes03.style.animationDuration = '0.7s';
            })
          })
        }
        if (entry.target.id === "missionCenter") {
          missionCenter.classList.remove('section');
          setTimeout(() => {
            missionImg02.classList.add('show');
          }, 20);
          missionImg02.addEventListener('animationend', () => {
            missionImg02.src = "video/mission02.gif";
            missionDes02.classList.add('missionLineAni');
            missionDes02.style.animationDuration = '0.7s';
          })
        }
        if (entry.target.id === "mission04") {
          missionImg04.classList.add('show');
          missionImg04.addEventListener('animationend', () => {
            missionDes04.classList.add('missionLineAni');
            missionDes04.style.animationDuration = '0.7s';
          })
        }
        if (entry.target.id === "CollectionMockup01") {
          collectionMockup01.classList.add('show');
          collectionMockup01.addEventListener('animationend', () => {
            collectionMockup02.classList.add('missionLineAni');
            collectionMockup02.style.animationDuration = '0.6s';
          })
          collectionMockup02.addEventListener('animationend', () => {
            collectionTxt.classList.add('symbolSloganShow');
          })
          collectionTxt.addEventListener('animationend', () => {
            collectionImg01.classList.add('opacity');
            collectionImg01.style.animationDuration = '0.6s';
            setTimeout(() => {
              collectionImg02.classList.add('opacity');
              collectionImg02.style.animationDuration = '0.7s';
              setTimeout(() => {
                collectionImg03.classList.add('opacity');
                collectionImg03.style.animationDuration = '0.7s';
                setTimeout(() => {
                  collectionImg04.classList.add('opacity');
                  collectionImg04.style.animationDuration = '0.7s';
                }, 300)
              }, 300)
            }, 300)
          })
        }

        //커뮤니티섹션
        if (entry.target.id === "communityTitle") {
          communityTitle.classList.add('symbolSloganShow');
          communityTitle.addEventListener('animationend', () => {
            communityTxt.classList.add('symbolSloganShow');
          })
          communityTxt.addEventListener('animationend', () => {
            communityTxtImg.classList.add('show');
            communityImg.classList.add('show');
            communityImg.addEventListener('animationend', () => {
              communityImg.src = "video/feed.gif";
            })
          })
        }

        //마이페이지섹션
        if (entry.target.id === "myPageMockup") {
          myPageTitle.classList.add('symbolSloganShow');
          myPageTitle.addEventListener('animationend', () => {
            myPageTxt.classList.add('symbolSloganShow');
          })
          myPageTxt.addEventListener('animationend', () => {
            myPageMockup.classList.add('show');
          })
        }
      }
    });
  }, {
    threshold: 0.5 // 요소가 10%만 보여도 감지되도록 설정
  });


  // 모든 section 요소를 순회하며 observer에 등록
  document.querySelectorAll('.section').forEach((el) => {
    observer.observe(el); // 해당 요소를 감시 대상으로 등록
  });

  console.log(MissionSection);


}

index();