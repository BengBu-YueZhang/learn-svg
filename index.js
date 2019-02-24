$('#app').append(`
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="Gradient"
          cx="0.5" cy="0.5" >
      <stop offset="0%" stop-color="red"/>
      <stop offset="100%" stop-color="blue"/>
    </radialGradient>
  </defs>

  <rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#Gradient)"/>

</svg>
`)
