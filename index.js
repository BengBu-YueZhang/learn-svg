$('#app').append(`
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
   <path d="
      M 100 100
      A 45 45, 0, 1, 1, 190 100
      L 145 100
      Z
      "
      fill="rgba(0, 0, 0, 0)"
      stroke="rgb(0, 0, 0)"
   >
   <animate attributeName="d" dur="10s" repeatCount="indefinite" values=
      "
      M 100 100
      A 45 45, 0, 1, 1, 190 100
      L 145 100
      Z
      ;
      M 100 100
      A 45 45, 0, 1, 1, 145 145
      L 145 100
      Z
      ;
      M 100 100
      A 45 45, 0, 1, 1, 190 100
      L 145 100
      Z
      "
   />
   </path>
</svg>
`)
