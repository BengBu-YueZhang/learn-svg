$('#app').append(`
<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
   <g id="end">
      <text x="30" y="30">End</text>
   </g>
   <rect x="50" y="50" id="rect" width="20" height="20" />
   <animate attributeName="x" repeatCount="indefinite" xlink:href="#rect" dur="1s" values="50; 100; 50"
      end="end.click"
      fill="freeze"
   />
</svg>
`)
