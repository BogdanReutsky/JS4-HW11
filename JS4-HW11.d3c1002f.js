let e=document.querySelector(".seconds2"),t=document.querySelector(".object"),r=30,n=setInterval(()=>{if((r-=1)<=10&&(t.style.transition="250ms cubic-bezier(0.4, 0, 0.2, 1)",t.style.transform="translateX(1500px)"),r<=0){clearInterval(n),t.classList.remove("object");return}let s=r%60;e.textContent=s<10?"0"+s:s},1e3);
//# sourceMappingURL=JS4-HW11.d3c1002f.js.map
