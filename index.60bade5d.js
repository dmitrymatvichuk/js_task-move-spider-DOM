const t=document.querySelector(".wall"),e=document.querySelector(".spider");document.addEventListener("click",i=>{if(i.target!==t)return;let l=t.clientHeight-e.clientHeight,n=t.clientWidth-e.clientWidth,c=Math.min(Math.max(i.offsetX-e.clientHeight/2,0),l),h=Math.min(Math.max(i.offsetY-e.clientWidth/2,0),n);e.style.left=`${c}px`,e.style.top=`${h}px`});//# sourceMappingURL=index.60bade5d.js.map

//# sourceMappingURL=index.60bade5d.js.map
