document.addEventListener("DOMContentLoaded", () => {
  const pantallas = [

   
    { id: "merch", path: "assets/merch/merch.json" },
  ];

  pantallas.forEach(p => {
    lottie.loadAnimation({
      container: document.getElementById(p.id),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: p.path
    });
  });


  const animLanding = lottie.loadAnimation({
    container: document.getElementById("landing"),
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "assets/landing/landing.json"
  });

  const hotspot = document.getElementById("hotspot-img0");

  hotspot.addEventListener("mouseenter", () => {
    animLanding.play();
  });

  hotspot.addEventListener("mouseleave", () => {
    animLanding.stop();
  });
});


const info1Container = document.getElementById("info1");

const animInfo1 = lottie.loadAnimation({
  container: info1Container,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "assets/info1/info1.json"
});

info1Container.addEventListener("mousemove", (e) => {
  const width = info1Container.offsetWidth;
  const x = e.clientX - info1Container.getBoundingClientRect().left;
  const percent = x / width;

  let frame;


  if (percent < 0.33) {
    frame = 150; 
  } else if (percent < 0.66) {
    frame = 450; 
  } else {
    frame = 750; 
  }

  animInfo1.goToAndStop(frame, true);
});


const temitasContainer = document.getElementById("temitas");

const animTemitas = lottie.loadAnimation({
  container: temitasContainer,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "assets/temitas/temitas.json"
});


const temitasFrames = [75, 220, 370, 520, 675]; 
let temitasIndex = 0;

temitasContainer.addEventListener("click", () => {
  temitasIndex = (temitasIndex + 1) % temitasFrames.length;
  animTemitas.goToAndStop(temitasFrames[temitasIndex], true);
});


const info2Container = document.getElementById("info2");

const animInfo2 = lottie.loadAnimation({
  container: info2Container,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "assets/info2/info2.json"
});


const zonas = [
  { id: "hotspot-izquierda", frame: 345 },
  { id: "hotspot-centro", frame: 241 },
  { id: "hotspot-derecha", frame: 146 },
];

zonas.forEach(z => {
  const zona = document.getElementById(z.id);

  zona.addEventListener("mouseenter", () => {
    animInfo2.goToAndPlay(z.frame, true);
  });

  zona.addEventListener("mouseleave", () => {
    animInfo2.stop();
  });
});
