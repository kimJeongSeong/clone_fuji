(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=0,n=n=>{t=n,e.innerHTML=`count is ${t}`};e.addEventListener(`click`,()=>n(t+1)),n(0)}var t=`<!doctype html>\r
<html lang="en">\r
\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>Document</title>\r
</head>\r
\r
<body>\r
  <div class="top_menubar">\r
    <div class="menubar_inner">\r
      <div class="menubar_left">\r
\r
        <button class="hamburger_btn">\r
          <span></span>\r
          <span></span>\r
          <span></span>\r
        </button>\r
\r
        <nav class="pc_nav">\r
          <ul>\r
            <li class="menu_item"><a href="#">PRODUCTS</a></li>\r
            <li class="menu_item"><a href="#">PLATFORM</a></li>\r
            <li class="menu_item"><a href="#">#PLAYWITH</a></li>\r
            <li class="moving_line"></li>\r
          </ul>\r
        </nav>\r
      </div>\r
      <div class="top_logo">\r
        <svg aria-hidden="true" class="svg" width="150" height="45">\r
          <use xlink:href="#symbol-logo-tagline"></use>\r
        </svg>\r
      </div>\r
      <div class="menubar_right">\r
        <nav>\r
          <ul>\r
            <li>\r
              <a href="#" class="menubar_right_btn"><span>고객지원</span></a>\r
            </li>\r
            <li>\r
              <span class="divider_menu"></span>\r
              <a href="#" class="menubar_right_btn"><span>로그인</span></a>\r
            </li>\r
            <li>\r
              <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>\r
            </li>\r
            <li>\r
              <a href="#"><i class="fa-solid fa-location-dot"></i></a>\r
            </li>\r
            <li>\r
              <a href="#"><i class="fa-solid fa-basket-shopping"></i></a>\r
            </li>\r
          </ul>\r
        </nav>\r
      </div>\r
    </div>\r
  </div>\r
</body>\r
\r
<svg id="symbol-container" class="hidden" aria-hidden="true">\r
  <defs>\r
    <symbol id="symbol-logo" viewBox="0 0 144 24" role="img">\r
      <desc>Fujifilm</desc>\r
      <path fill="#231f20"\r
        d="M109.69 0v18.76a1.7 1.7 0 001.83 1.91h6.18v2.1a.36.36 0 01-.39.4h-10c-3.09 0-3.55-1.7-3.55-3.25V1.28c0-.88.33-1.3 1.37-1.28zM98.16 0v22c0 1-.41 1.22-1.24 1.22h-4.7v-22c0-.73.28-1.22 1.33-1.22zM0 3.2C0 1.43 0 0 2.9 0h12.76v2.23a.27.27 0 01-.3.3H7.72a1.35 1.35 0 00-1.55 1.53v5.88h9v2.34a.29.29 0 01-.33.31H6.17v9.34c0 .9-.46 1.26-1.45 1.24H0zM24.87 0v17.66c0 1.52.22 2.58 1.28 3.19a6 6 0 005.3 0c1-.56 1.37-1.45 1.37-3.21V1.18c0-.75.28-1.18 1.32-1.18h4.61v17.14A6 6 0 0134 23.36a21.62 21.62 0 01-10.21 0c-3.32-1-4.87-3-4.88-6.2V1.19C18.94.42 19.21 0 20.1 0zM137.14 0A2 2 0 00135 1.59l-3.78 16h-.1L127.25 0h-5.34c-1 0-1.36.53-1.36 1.35v21.82h2.26c.36 0 .51-.18.51-.55V4.33h.36l4.83 18.84h3.16c1.19 0 1.63-.49 1.92-1.67l4.34-17.17h.35v18.84h4.21c1 0 1.51-.4 1.51-1.42V0zM67 12.59h-6v10.58h4.69c.83 0 1.24-.24 1.24-1.22z">\r
      </path>\r
      <path fill="#ec1a3b" d="M66.62 8.07a.77.77 0 00.38-.66V0h-4.65C61.32 0 61 .51 61 1.23v11.22z"></path>\r
      <path fill="#231f20"\r
        d="M46.27 21.34c2.57-.37 3.43-1.9 3.43-4.16V1.26c0-.95.52-1.26 1.18-1.26h4.76v15.06c0 3.7-.78 5.57-3 7.15C51.52 23 49.53 24 45.2 24a26.5 26.5 0 01-3.72-.17.34.34 0 01-.3-.36v-1.98a34.41 34.41 0 005.09-.15zM76 0c-2.91 0-2.91 1.43-2.91 3.2v6a.27.27 0 01-.1.22l-4.07 3.2h4.17v10.55h4.72c1 0 1.44-.34 1.45-1.24v-9.34h8.67a.29.29 0 00.33-.31V9.94h-9V4.06a1.35 1.35 0 011.54-1.53h7.64a.27.27 0 00.3-.3V0z">\r
      </path>\r
    </symbol>\r
    <symbol id="symbol-logo-tagline" viewBox="0 0 144 40" role="img">\r
      <desc>FujiFilm - Value from Innovation</desc>\r
      <path fill="#231f20"\r
        d="M109.69 0v18.76a1.7 1.7 0 001.83 1.91h6.18v2.1a.36.36 0 01-.39.4h-10c-3.09 0-3.55-1.7-3.55-3.25V1.28c0-.88.33-1.3 1.37-1.28h4.56M98.16 0v22c0 1-.41 1.22-1.24 1.22h-4.7v-22c0-.73.28-1.22 1.33-1.22h4.61M0 3.2C0 1.43 0 0 2.9 0h12.76v2.23a.27.27 0 01-.3.3H7.72a1.35 1.35 0 00-1.55 1.53v5.88h9v2.34a.29.29 0 01-.33.31H6.17v9.34c0 .9-.46 1.26-1.45 1.24H0V3.2M24.87 0v17.66c0 1.52.22 2.58 1.28 3.19a6 6 0 005.3 0c1-.56 1.37-1.45 1.37-3.21V1.18c0-.75.28-1.18 1.32-1.18h4.61v17.14A6 6 0 0134 23.36a21.62 21.62 0 01-10.21 0c-3.32-1-4.87-3-4.88-6.2V1.19C18.94.42 19.21 0 20.1 0h4.77M137.14 0A2 2 0 00135 1.59l-3.78 16h-.1L127.25 0h-5.34c-1 0-1.36.53-1.36 1.35v21.82h2.26c.36 0 .51-.18.51-.55V4.33h.36l4.82 18.84h3.17c1.19 0 1.63-.49 1.92-1.67l4.34-17.17h.35v18.84h4.21c1 0 1.51-.4 1.51-1.42V0h-6.86M67 12.59h-6v10.58h4.69c.83 0 1.24-.24 1.24-1.22v-9.36">\r
      </path>\r
      <path fill="#ed1a3b" d="M66.62 8.07a.75.75 0 00.38-.66V0h-4.65C61.32 0 61 .51 61 1.23v11.22l5.59-4.38"></path>\r
      <path fill="#231f20"\r
        d="M46.27 21.34c2.58-.37 3.43-1.9 3.43-4.15V1.26c0-.95.52-1.26 1.18-1.26h4.76v15.06c0 3.7-.78 5.57-3 7.15C51.52 23 49.53 24 45.2 24a26.66 26.66 0 01-3.72-.17.34.34 0 01-.3-.36v-1.98a34.41 34.41 0 005.09-.15M76 0c-2.9 0-2.91 1.43-2.91 3.2v6a.27.27 0 01-.1.22l-4.07 3.2h4.17v10.55h4.72c1 0 1.44-.34 1.45-1.24v-9.34h8.67a.29.29 0 00.33-.31V9.94h-9V4.06a1.35 1.35 0 011.54-1.53h7.64a.27.27 0 00.3-.3V0H76M7.4 30.12l2.78 6.13 2.57-6.13h1.33l-3.64 8.67a.55.55 0 01-.51.34h-.6l-3.91-8.68a.23.23 0 01.22-.33H7.4M23 38.63a.38.38 0 01-.37.37h-1.55v-9.48a.37.37 0 01.37-.37H23v9.48M76 30.49a.36.36 0 01.37-.37H78v8.51a.38.38 0 01-.37.37H76v-8.51M103.48 32.18l1.85 4.2 1.89-4.2h1.32l-3 6.63a.57.57 0 01-.52.34h-.51l-2.92-6.63a.24.24 0 01.22-.34h1.65M121.35 32.67a.37.37 0 01.37-.36h1.55v6.32a.37.37 0 01-.36.37h-1.56v-6.33M51.43 32.15a2.91 2.91 0 00-1.68.72v-.56H48.2a.36.36 0 00-.36.36V39h1.55a.37.37 0 00.36-.37V34.1a2 2 0 012.83-.1v-1.56a1.68 1.68 0 00-1.15-.29zM16.82 32.15c2.13 0 2.61 1 2.61 1.83v4.65a.37.37 0 01-.37.37H17.5v-.58a2.67 2.67 0 01-1.83.71 1.84 1.84 0 01-2-1.84c0-1.79 2.24-2.46 3.82-2.88a3 3 0 00-.12-1c-.1-.33-.54-.43-.73-.43a6.53 6.53 0 00-2.5.62v-.9a8.62 8.62 0 012.68-.55zm.68 5.32v-2.19c-1.33.43-1.88 1.25-1.88 1.84a.82.82 0 00.73.9 1.41 1.41 0 001.15-.55zM46.14 30.4a3.58 3.58 0 011.32.17v-.86a5.86 5.86 0 00-1.46-.19c-.81 0-2.6.33-2.6 1.91v.88h-1.28v.81h1.25V39h1.55a.37.37 0 00.36-.37v-5.51h1.58v-.81h-1.58v-.45a2.12 2.12 0 01.12-.95 1 1 0 01.74-.51zM34.85 39.15a3.32 3.32 0 01-3.26-3.28c0-2.32 1.48-3.7 3.33-3.68s3 1.43 2.95 3.33h-4.39c0 .91.21 2.3 1.7 2.3A2 2 0 0037 36.43h1a2.83 2.83 0 01-.82 1.63 3.42 3.42 0 01-2.33 1.09zm.81-4.33c0-1.42-.56-1.81-1.14-1.81-.9 0-1 1.23-1 1.81zM60 35.52a3.53 3.53 0 01-3.51 3.6 3.48 3.48 0 113.51-3.6zM56.18 33c-.65.11-1.46 1.11-1 3.4.27 1.5 1 1.93 1.54 1.93s1.21-.81 1.21-2.2c-.04-2.85-1.24-3.24-1.75-3.13zM101.2 35.52a3.53 3.53 0 01-3.51 3.6 3.48 3.48 0 113.51-3.6zM97.42 33c-.65.11-1.47 1.11-1 3.4.27 1.5 1 1.93 1.55 1.93s1.21-.81 1.21-2.2c-.05-2.85-1.26-3.24-1.76-3.13zM131.59 35.52a3.53 3.53 0 01-3.51 3.6 3.48 3.48 0 113.51-3.6zM127.81 33c-.65.11-1.46 1.11-1 3.4.27 1.5 1 1.93 1.55 1.93s1.21-.81 1.21-2.2c-.05-2.85-1.26-3.24-1.76-3.13zM123.37 30.63a1.05 1.05 0 11-1.05-1.05 1 1 0 011.05 1.05zM26.53 32.31V37a.94.94 0 00.93.94c.33 0 .76-.4 1-.83v-4.44a.37.37 0 01.37-.36h1.56v6.32A.38.38 0 0130 39h-1.52v-.63a3.46 3.46 0 01-.8.55 2.06 2.06 0 01-.84.2A2.15 2.15 0 0124.61 37v-4.33a.37.37 0 01.37-.36h1.55M134.71 34.1a2.46 2.46 0 011.33-.74c.39 0 .64.44.64 1V39h1.55a.37.37 0 00.37-.37v-4.42a2 2 0 00-1.93-2 3.18 3.18 0 00-2 .66v-.52h-1.57a.36.36 0 00-.36.36V39h1.56a.38.38 0 00.37-.37zM89.12 34.1a2.46 2.46 0 011.34-.74c.38 0 .63.44.63 1V39h1.56a.37.37 0 00.36-.37v-4.42a2 2 0 00-1.93-2 3.18 3.18 0 00-2 .66v-.52h-1.53a.36.36 0 00-.36.36V39h1.56a.38.38 0 00.37-.37zM81.82 34.1a2.46 2.46 0 011.34-.74c.38 0 .63.44.63 1V39h1.56a.37.37 0 00.36-.37v-4.42a2 2 0 00-1.93-2 3.18 3.18 0 00-2 .66v-.52h-1.53a.36.36 0 00-.36.36V39h1.56a.38.38 0 00.37-.37zM69 32.17a3.68 3.68 0 00-2.27.84 2 2 0 00-1.64-.84 3.18 3.18 0 00-2 .66v-.52h-1.57a.36.36 0 00-.36.36V39h1.56a.38.38 0 00.37-.37V34.1a2.46 2.46 0 011.34-.74c.38 0 .63.44.63 1V39h1.57a.37.37 0 00.36-.37V34.1a2.5 2.5 0 011.34-.74c.39 0 .64.44.64 1V39h1.55a.38.38 0 00.37-.37v-4.42A2 2 0 0069 32.17zM111.6 38a.81.81 0 01-.73-.9c0-.59.55-1.41 1.88-1.84v2.19a1.43 1.43 0 01-1.15.55zm-2.2-5.32v.94a6.48 6.48 0 012.5-.62c.18 0 .63.1.72.43a2.74 2.74 0 01.12 1c-1.57.42-3.81 1.09-3.81 2.88a1.84 1.84 0 002 1.84 2.67 2.67 0 001.83-.71V39h1.56a.38.38 0 00.37-.37V34c0-.83-.48-1.83-2.61-1.83a8.62 8.62 0 00-2.68.53zM116.57 32.29v-1.75a.37.37 0 01.37-.36h1.58v2.11h1.56v.83h-1.56v4.32a.58.58 0 00.1.35.45.45 0 00.4.15 1.79 1.79 0 001.09-.48v1a3.16 3.16 0 01-1.92.73 1.49 1.49 0 01-1.59-1.65v-4.42h-1v-.83h1">\r
      </path>\r
    </symbol>\r
    <symbol id="symbol-logo-x" viewBox="0 0 30 30">\r
      <desc>fujifilm-x.com</desc>\r
      <path\r
        d="M25.68 10.11l-8.14 5.4s3.19 2.16 6.56 4.38a3.21 3.21 0 001.85.53H29v2.34h-3.09a4.71 4.71 0 01-2.86-1c-2.5-1.65-7.47-5-7.47-5l-7.7 5.12a4.28 4.28 0 01-2.64.82H1v-2.27h1.57a3.17 3.17 0 001.86-.6l7.78-5.2S5.84 10.41 5.2 10a2.91 2.91 0 00-1.83-.59h-1.9V7.24h2.34a4.62 4.62 0 012.3.76c.67.4 8.06 5.37 8.06 5.37L22.28 8a4.74 4.74 0 012.54-.72H29v2.29h-1.63a2.59 2.59 0 00-1.69.54z">\r
      </path>\r
    </symbol>\r
    <symbol id="icon-checked" viewBox="0 0 15 15">\r
      <path d="M14.5 3.29L6.9 13 1.5 7l1.62-1.29 3.64 4L13 2z"></path>\r
    </symbol>\r
    <svg id="icon-dropdown-down" viewBox="0 0 15 15">\r
      <path d="M12 4.5l-4.5 6-4.5-6h9z"></path>\r
    </svg>\r
    <svg id="icon-dropdown-up" viewBox="0 0 15 15">\r
      <path d="M12 10.5l-4.5-6-4.5 6h9z"></path>\r
    </svg>\r
    <svg id="icon-search" viewBox="0 0 30 30">\r
      <path\r
        d="M25.13 23.86l-5.86-5.76h-.06a8.27 8.27 0 002.3-5.7 8.51 8.51 0 00-17 0A8.44 8.44 0 0013 20.72a8.57 8.57 0 004.27-1.14 1.12 1.12 0 00.19.29l5.86 5.76a1.29 1.29 0 001.81 0 1.25 1.25 0 000-1.77zM5.67 12.36a7.34 7.34 0 0114.67 0 7.34 7.34 0 01-14.67 0z">\r
      </path>\r
    </svg>\r
  </defs>\r
</svg>\r
\r
</html>`,n=`<!doctype html>\r
<html lang="en">\r
  <head>\r
    <meta charset="UTF-8" />\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
    <title>Document</title>\r
  </head>\r
  <body>\r
    <div class="middle_container">\r
      <div class="middle_slide">\r
\r
        <div class="slide_container">\r
      \r
          <div class="slide_item">\r
          <img src="/02.jpg" alt="광고1" />\r
        <div class="slide_text">\r
          <h5>FUJIFILM X-t5</h5>\r
          <h1>PHOTOGRAPHY FIRST</h1>\r
        </div>\r
      </div>\r
\r
          <div class="slide_item"><img src="/03.png" alt="광고2" /></div>\r
        \r
          <div class="slide_item"><img src="/04.jpg" alt="광고3" />\r
          <div class="slide_text">\r
          <h5>X100VI</h5>\r
          <h1>The One and Only</h1>\r
        </div></div>\r
        \r
          <div class="slide_item"><img src="/05.jpg" alt="광고4" />\r
          <div class="slide_text">\r
          <h5>GFX100S II</h5>\r
          <h1>ULTIMATE FREEDOM</h1>\r
        </div></div>\r
          <div class="slide_item"><img src="/06.jpg" alt="광고5" />\r
          <div class="slide_text">\r
          <h5>X-T50</h5>\r
          <h1>My Experience, My Color</h1>\r
        </div></div>\r
          <div class="slide_item"><img src="/07.jpg" alt="광고6" />\r
          <div class="slide_text">\r
          <h5>X-M5</h5>\r
          <h1>Color Your Moment</h1>\r
        </div></div>\r
          <div class="slide_item"><img src="/10.jpg" alt="광고7" />\r
          <div class="slide_text">\r
          <h5>X-E5</h5>\r
          <h1>THE REFINED CLASSIC</h1>\r
        </div></div>\r
          <div class="slide_item"><img src="/11.jpg" alt="광고8" />\r
          <div class="slide_text">\r
          <h5>X HALF</h5>\r
          <h1>Half the Size, Twice the Story</h1>\r
        </div></div>\r
          <div class="slide_item"><img src="/12.jpg" alt="광고9" />\r
          <div class="slide_text">\r
          <h5>GFX100RF</h5>\r
          <h1>The One and Only</h1>\r
        </div></div>\r
        </div>\r
\r
        <div class="slide_pagination">\r
          <span class="dot active" data-index="0"></span>\r
          <span class="dot" data-index="1"></span>\r
          <span class="dot" data-index="2"></span>\r
          <span class="dot" data-index="3"></span>\r
          <span class="dot" data-index="4"></span>\r
          <span class="dot" data-index="5"></span>\r
          <span class="dot" data-index="6"></span>\r
          <span class="dot" data-index="7"></span>\r
          <span class="dot" data-index="8"></span>\r
          <button id="slide_control" class="play_btn">\r
            <i class="fa-solid fa-pause"></i>\r
          </button>\r
        </div>\r
      </div>\r
      <div class="middle_right">\r
  <div class="middle_right_middle_img">\r
    <img src="/32.jpg" alt="이벤트1" class="middle_right_img" />\r
    <h6>PLAYWITH <span class="divider"></span> 2026.03.16-2026.03.29</h6>\r
    <h3>후지필름 코리아 글로벌 마일리지상 X 교토그라피 KG+</h3>\r
    <p>\r
      〈KG+ 후지필름 코리아 글로벌 마일리지상 – 교토그라피〉 는 일본 교토에서 열리는 국제 사진 축제 교토그라피의 공식 연계 프로그램 KG+와 협력하여 진행됩니다.\r
      이를 통해 한국 사진가의 작업이 국제 관객과 만나고, 향후 해외 활동으로 확장되는 실질적인 발판을 마련하고자 합니다.\r
    </p>\r
  </div>\r
\r
  <div class="middle_right_middle_img">\r
    <img src="/31.jpg" alt="이벤트2" class="middle_right_img" />\r
    <h6>PLAYWITH <span class="divider"></span> 2026.03.16-2026.03.23</h6>\r
    <h3>Z projector Showcase 2026</h3>\r
    <p>\r
      고해상도 프로젝션이 선사하는 뛰어난 몰입감. 올 여름 새롭게 선보일 ZUH12000...\r
    </p>\r
  </div>\r
\r
  <div class="middle_right_middle_img">\r
    <img src="/29.jpg" alt="이벤트3" class="middle_right_img" />\r
    <h6>PLAYWITH <span class="divider"></span> 2026.03.16-2026.03.20</h6>\r
    <h3>GFX100RF FRAGMENT EDITION</h3>\r
    <p>후지와라 히로시가 이끄는 "fragment design"과 콜라보레이션...</p>\r
    <div class="img_under">\r
      <img src="/30.jpg" alt="제품" class="under_img_small" />\r
      <div class="under_info">\r
        <span>CAMERA</span>\r
        <div class="under_info_button">\r
          <p>GFX100RF FRAGMENT EDITION</p>\r
          <button><i class="fa-solid fa-arrow-right"></i></button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="middle_right_middle_img">\r
    <img src="/27.jpg" alt="이벤트4" class="middle_right_img" />\r
    <h6>PLAYWITH <span class="divider"></span> 2026.03.03-2026.07.10</h6>\r
    <h3>[Your half, your story] X half</h3>\r
    <p>당신의 시작이 더 가까워질 수 있도록, X half를 새로운 가격으로...</p>\r
  </div>\r
</div>\r
    </div>\r
  </body>\r
</html>\r
`,r=`<!doctype html>\r
<html lang="en">\r
\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>Document</title>\r
</head>\r
\r
<body>\r
  <div class="middle_second">\r
    <div class="MS MS_1">\r
      <img src="/28.jpg" alt="상품 이미지" class="MS_img_tag" />\r
      <h6>PROMOTION <span class="divider"></span> 2026.03.01-2026.03.31</h6>\r
      <h3>후지필름 홈페이지&파티클&에비뉴엘점&HOP서울 3월 이벤트</h3>\r
      <p>\r
        사진찍는 즐거움을! 후지필름이 강력추천하는 3월 이벤트 제품을\r
        만나보세요.\r
      </p>\r
    </div>\r
    <div class="MS MS_2">\r
      <img src="/26.jpg" alt="상품 이미지" class="MS_img_tag" />\r
      <h6>PLAYWITH <span class="divider"></span> 2026.02.23-2026.03.22</h6>\r
      <h3>후지필름 포토페스타 2026 - 천개의 꿈 인터내셔널</h3>\r
      <p>\r
        후지필름 포토페스타는 후지필름 카메라를 사용하는 사진가들의 우수한\r
        작품을 소개하고, 사진가들의 도전과 성장을 함께 만들어가는 사진\r
        축제입니다.\r
      </p>\r
    </div>\r
    <div class="MS MS_3">\r
      <img src="/21.jpg" alt="상품 이미지" class="MS_img_tag" />\r
      <h3>이해력 문해력+</h3>\r
      <p>\r
        좋은 사진을 만들기 위해 꼭 필요한 기초 이론과 각종 사례들을 함께\r
        살펴보고, 이미지 문해 능력을 높이는 것을 목표로 합니다.\r
      </p>\r
      <div class="img_under">\r
        <div class="under_img under_img_02"></div>\r
        <div class="under_info">\r
          <span>SEMINAR</span>\r
          <div class="under_info_button">\r
            <p>1강 액자식 구성/사각형의 역사(신청기간: ~3.5)</p>\r
            <button><i class="fa-solid fa-arrow-right"></i></button>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="img_under">\r
        <div class="under_img under_img_03"></div>\r
        <div class="under_info">\r
          <span>SEMINAR</span>\r
          <div class="under_info_button">\r
            <p>2강 정확하고 정밀한 기계적 기록 / 풍경사진(신청기간: ~3.12)</p>\r
            <button><i class="fa-solid fa-arrow-right"></i></button>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="img_under">\r
        <div class="under_img under_img_04"></div>\r
        <div class="under_info">\r
          <span>SEMINAR</span>\r
          <div class="under_info_button">\r
            <p>\r
              3강 크기와 각도 - 크기 / 샷의 크기와 감정의 크기(신청기간 :\r
              ~3.19)\r
            </p>\r
            <button><i class="fa-solid fa-arrow-right"></i></button>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="img_under">\r
        <div class="under_img under_img_05"></div>\r
        <div class="under_info">\r
          <span>SEMINAR</span>\r
          <div class="under_info_button">\r
            <p>\r
              4강 크기와 각도 - 각도 / 높낮이와 권력 관계, 영화\r
              싸이코(신청기간: ~3.26)\r
            </p>\r
            <button><i class="fa-solid fa-arrow-right"></i></button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="MS MS_4">\r
      <img src="/20.jpg" alt="상품 이미지" class="MS_img_tag" />\r
      <h6>PROGRAM <span class="divider"></span> 2026.02.20-2026.03.19</h6>\r
      <h3>나만의 필름레시피 만들기</h3>\r
      <p>\r
        필름시뮬레이션을 활용하는 법입니다. 카메라의 I.Q. 메뉴를 활용해 원하는\r
        색감을 만들어 갑니다. 또한 나만의 필름레시피를 프리셋으로 저장하는\r
        법도 알아봅니다.\r
      </p>\r
    </div>\r
    <div class="MS MS_5">\r
      <img src="/18.jpg" alt="상품 이미지" class="MS_img_tag" />\r
      <h3>[포토북 큐레이션] 도시를 만드는 풍경들</h3>\r
      <p>\r
        오늘 우리가 모두 살아가고 있는 도시의 의미를, 내일 살아가고 싶은\r
        도시의 모습을 함께 그려보는 스무 권의 사진책을 소개합니다.\r
      </p>\r
    </div>\r
    <div class="MS MS_6">\r
      <img src="/17.jpg" alt="상품 이미지" class="MS_img_tag" />\r
      <h6>PROMOTION <span class="divider"></span> 2026.02.12-</h6>\r
      <h3>후지필름 2026년 행운복권</h3>\r
      <p>\r
        2026년에도 후지필름과 함께 해요! 후지필름 직영점을 방문해서 100% 당첨\r
        행운 복권 이벤트에 참여해 보세요!\r
      </p>\r
    </div>\r
    <div class="MS MS_7">\r
      <img src="/15.jpg" alt="상품 이미지" class="MS_img_tag" />\r
      <h6>EXHIBITION <span class="divider"></span> 2026.02.06-2026.03.22</h6>\r
      <h3>Characters : Familiar Faces</h3>\r
      <p>\r
        《 Characters : Familiar Faces 는 동시대 시각문화에서 확산되고 있는\r
        캐릭터 기반 이미지 현상에 주목하며, 익숙한 얼굴을 한 이미지가 감정을\r
        환기하고 정서적 교감을 형성하는 방식을 탐구한다. 이미지와 감정, 예술과\r
        일상의 경계를 재조명하고, 캐릭터를 매개로 한 인간의 정서적 교감이\r
        지니는 동시대적 의미를 제안하고자 한다.\r
      </p>\r
    </div>\r
    <div class="MS MS_8">\r
      <img src="/16.jpg" alt="상품 이미지" class="MS_img_tag" />\r
      <h6>PLAYWITH <span class="divider"></span> 2026.02.09-</h6>\r
      <h3>새해 복 한 잔 나눔 EVENT</h3>\r
      <p>\r
        후자필름 하우스 오브 포토그래피에 방문해 따뜻한 마음을 보태 주세요.\r
        참여해주신 분께 후지필름X로우키 커피 드립백을 드립니다.\r
      </p>\r
    </div>\r
    <div class="MS MS_9">\r
      <img src="/13.jpg" alt="상품 이미지" class="MS_img_tag" />\r
      <h6>PROMOTION <span class="divider"></span> 2025.12.11-2026.03.31</h6>\r
      <h3>[Ready for Filmmaking] GFX ETERNA 55</h3>\r
      <p>\r
        GFX ETERNA 55 구매 후 정품등록 및 이벤트 신청 완료 시 사은품을 증정\r
        합니다.\r
      </p>\r
      <div class="img_under">\r
        <div class="under_img under_img_06"></div>\r
        <div class="under_info">\r
          <span>SEMINAR</span>\r
          <div class="under_info_button">\r
            <p>\r
              4강 크기와 각도 - 각도 / 높낮이와 권력 관계, 영화\r
              싸이코(신청기간: ~3.26)\r
            </p>\r
            <button><i class="fa-solid fa-arrow-right"></i></button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="MS MS_10">\r
      <img src="/08.jpg" alt="상품 이미지" class="MS_img_tag" />\r
      <h3>후지필름 클래식 넥스트랩</h3>\r
      <p>\r
        카메라 무게의 부담을 덜어줄 어깨 패드와 견고한 손바느질로 완성되는\r
        양끝단의 엔드파트는 클래식하고 정갈한 매력을 선보입니다.\r
      </p>\r
    </div>\r
    <div class="MS MS_11">\r
      <img src="/09.jpg" alt="상품 이미지" class="MS_img_tag" />\r
      <div class="MS_text">\r
        <h5>일상과 촬영, 경계를 넘나드는 컴팩트한 스타일</h5>\r
        <h1>후지필름 <br class="pc_only" />데일리 카메라백</h1>\r
      </div>\r
    </div>\r
  </div>\r
</body>\r
\r
</html>`,i=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
  <meta charset="UTF-8">\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
  <title>Document</title>\r
</head>\r
\r
<body>\r
  <div class="bottom_slide">\r
    <div class="bottom_inner">\r
      <div class="bottom_content left_box">\r
        <div class="gray_card">\r
          <hr class="bold_line" />\r
          <h5>CUSTOMER CENTER</h5>\r
          <h4>후지필름 제품을 사용하시나요?<br>\r
            필요한 고객지원 서비스를 바로 찾아보세요.</h4>\r
\r
\r
          <nav>\r
            <ul class="bottom_menu">\r
              <li><a href="#">정품등록</a></li>\r
              <li><a href="#">A/S 접수</a></li>\r
              <li><a href="#">서비스센터</a></li>\r
              <li><a href="#">모든고객지원</a></li>\r
            </ul>\r
          </nav>\r
          <hr class="bold_line_2" />\r
          <h5>MEMEBERSHIP</h5>\r
          <h4>후지필름이 처음이신가요? <br />\r
            다양한 프로모션, 제품 무료체험 등의<br />\r
            회원 혜택을 받아보세요.</h4>\r
\r
          <button>회원가입</button>\r
        </div>\r
      </div>\r
\r
      <div class="bottom_content right_box">\r
        <img src="/slogan-1.png" alt="로고" class="bottom_logo_1">\r
        <img src="/slogan-2.png" alt="로고" class="bottom_logo_2">\r
      </div>\r
    </div>\r
  </div>\r
\r
</body>\r
\r
</html>`,a=`<!doctype html>\r
<html lang="en">\r
\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>Document</title>\r
</head>\r
\r
<body>\r
  <div class="footer">\r
    <div class="footer_logo">\r
      <figure>\r
        <img src="/logo.png" />\r
      </figure>\r
    </div>\r
    <div class="footer_middle">\r
      <div class="footer_left_info">\r
        <nav>\r
          <ul>\r
            <li><a href="#">회사소개</a></li>\r
            <li><a href="#">이용약관</a></li>\r
            <li>\r
              <a href="#"><strong>개인정보처리방침</strong></a>\r
            </li>\r
            <li><a href="#">사이트맵</a></li>\r
            <li><a href="#">사업자정보확인 <i class="fa-regular fa-clone"></i></a></li>\r
            <li><a href="#">에스크로 가입확인 <i class="fa-regular fa-clone"></i></a></li>\r
          </ul>\r
        </nav>\r
      </div>\r
      <div class="footer_middle_info">\r
        <p>\r
          상호명: 후지필름일렉트로닉이미징코리아㈜ 대표자명: 야마모토 마사토\r
          <br />\r
          사업자등록번호: 120-87-73486 통신판매업신고: 2012-서울강남-01006\r
          <br />\r
          주소: 서울특별시 강남구 선릉로 838, 페코빌딩 3층, 대표번호:\r
          1577-4793, 팩스번호: 02-538-8659\r
        </p>\r
      </div>\r
      <div class="footer_middle_copylight">\r
        <p>© FUJIFILM ELECTRONIC IMAGING KOREA CO., LTD</p>\r
      </div>\r
    </div>\r
    <div class="footer_right">\r
      <h1>1577-4793</h1>\r
      <p>평일 09:00 - 18:00 / 토요일, 일요일 및 공휴일 휴무</p>\r
      <div class="contact_sns">\r
        <a href="#"><img src="/icon.png" /></a>\r
        <a href="#"><i class="fa-brands fa-instagram"></i></a>\r
        <a href="#"><i class="fa-brands fa-youtube"></i></a>\r
        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>\r
      </div>\r
    </div>\r
  </div>\r
</body>\r
\r
</html>`;document.querySelector(`#app`).innerHTML=`
<div class="fuji_total">
${t}
${n}
${r}
${i}
${a}
</div>
`;var o=document.querySelector(`.slide_container`),s=document.querySelectorAll(`.dot`),c=document.querySelector(`#slide_control`),l=c?.querySelector(`i`),u=0,d,f=!0;function p(e){u=e,o&&(o.style.transform=`translateX(-${e*100}%)`),s.forEach(e=>e.classList.remove(`active`)),s[e]&&s[e].classList.add(`active`)}s.forEach(e=>{e.addEventListener(`click`,e=>{p(parseInt(e.target.dataset.index))})});function m(){clearInterval(d),d=setInterval(()=>{u=(u+1)%s.length,p(u)},2e3)}c&&c.addEventListener(`click`,()=>{f?(clearInterval(d),l.classList.replace(`fa-pause`,`fa-play`),f=!1):(m(),l.classList.replace(`fa-play`,`fa-pause`),f=!0)}),m(),document.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,function(e){let t=this.getAttribute(`href`);(t===`#`||t===``)&&e.preventDefault()})});var h=document.querySelectorAll(`.menubar_left .menu_item`),g=document.querySelector(`.moving_line`),_=document.querySelector(`.menubar_left nav ul`),v=document.body,y=document.querySelector(`.menu_overlay`);y||(y=document.createElement(`div`),y.className=`menu_overlay`,document.querySelector(`.fuji_total`).appendChild(y)),h.forEach(e=>{e.addEventListener(`mouseenter`,()=>{v.classList.add(`menu_active`);let t=e.querySelector(`.dropdown_content`);t&&(t.style.height=`400px`),g&&(g.style.left=`${e.offsetLeft}px`,g.style.width=`${e.offsetWidth}px`,g.style.opacity=`1`)}),e.addEventListener(`mouseleave`,()=>{v.classList.remove(`menu_active`);let t=e.querySelector(`.dropdown_content`);t&&(t.style.height=`0`)})}),_&&_.addEventListener(`mouseleave`,()=>{g&&(g.style.width=`0`,g.style.opacity=`0`)});var b=new IntersectionObserver(e=>{e.forEach(e=>{window.innerWidth>719?e.isIntersecting&&(e.target.classList.add(`active`),b.unobserve(e.target)):(e.target.classList.add(`active`),b.unobserve(e.target))})},{root:null,rootMargin:`0px 0px -50px 0px`,threshold:.1});document.querySelectorAll(`.MS, .middle_right_middle_img, .bottom_slide`).forEach(e=>b.observe(e));var x=!1;window.addEventListener(`scroll`,()=>{x||=(window.requestAnimationFrame(()=>{let e=window.pageYOffset,t=document.querySelectorAll(`.MS:nth-child(3n+2)`);window.innerWidth>959&&t.forEach(t=>{if(t.classList.contains(`active`)){let n=-((e-t.offsetTop)*.1);t.style.transform=`translateY(${n}px)`}}),x=!1}),!0)}),e(document.querySelector(`#counter`));