$('#app').append(`
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
   <circle cx="50" cy="50" r="10" opacity="1"  fill="grey">
      <animate attributeName="r" fill="freeze" dur="0.4s" 
      values="10; 50;"/>
      <animate attributeName="opacity" fill="freeze" dur="0.4s" 
      values="1; 0;"/>
   </circle>
</svg>
`)
