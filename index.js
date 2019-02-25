$('#app').append(`
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<circle cx="50%" cy="20" r="5%" fill="blue">
   <animate
      attributeName="cx"
      dur="3"
      values="5%; 95%; 5%" 
      repeatCount="indefinite"
      keyTimes="0; .1; 1"
   />
</circle>
</svg>
`)
