$('#app').append(`
<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
   <ellipse cx="216" cy="242" rx="160" ry="219" fill="#964" id="plane">
   </ellipse>
   <animateTransform attributeName="transform" type="translate" dur="4s" 
   values="0,0;-110,-140;0,0" repeatCount="indefinite" xlink:href="#plane"/>
   <animateTransform attributeName="transform" additive="sum" type="scale" 
   dur="4s" values="1;1.5;1" repeatCount="indefinite" xlink:href="#plane"/>
   <animateTransform attributeName="transform" additive="sum" type="rotate" 
   dur="7s" values="0,216 242;360 216 242" repeatCount="indefinite" xlink:href="#plane"/>
</svg>
`)
