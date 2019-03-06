$('#app').append(`
   <svg id="svg" width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <ellipse id="ellipse" cx="280" cy="175" rx="100" ry="50" fill="blue">
         <animateTransform id="animateTransform" attributeName="transform" type="rotate" dur="2.5" 
         values="360 280 175; 0 280 175" to="0" begin="indefinite"/>
      </ellipse>
   </svg>
`)

$(document).mousemove((event) => {
   let ellipse = $('#ellipse').get(0)
   ellipse.setAttribute('cx', event.clientX)
   ellipse.setAttribute('cy', event.clientY)
})