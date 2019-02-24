$('#app').append(`
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="Pattern" x="0" y="0" width=".25" height=".25">
      <rect x="0" y="0" width="50" height="50" fill="skyblue"/>
      <circle cx="15" cy="15" r="15" fill="green" fill-opacity="0.5"/>
    </pattern>
  </defs>
  <rect width="120" height="120" fill="url(#Pattern)"/>
</svg>
`)
