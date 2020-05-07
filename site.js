arrowTop.onclick = function() {
      window.scrollTo(pageXOffset, 0);
    };
    window.addEventListener('scroll', function() {
      arrowTop.hidden = (pageYOffset < 72);
    });
    function animo3(){
	setTimeout(function(){
			document.querySelector("#arrowTop").style.paddingTop="10px";
				setTimeout(function(){
						document.querySelector("#arrowTop").style.paddingTop="0px";	
						animo3();	
				}, 500);}, 500);}
	document.addEventListener("DOMContentLoaded",function(e){
		animo3()
	});
	(function () {
        var setting = {"height":250,"width":400,"zoom":10,"queryString":"Лесоводы, Хмельницкая область, Украина","place_id":"ChIJHV4JE4SJMUcRFBQ-UqQupi0","satellite":false,"centerCoord":[49.19123841544792,26.44026491380924],"cid":"0x2da62ea4523e1414","lang":"ru","cityUrl":"/ukraine/satanov-327945","cityAnchorText":"Карта [CITY1], Хмельницкий, Украина","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"199594"};
        var d = document;
        var s = d.createElement('script');
        s.src = 'https://embedgooglemap.1map.com/js/script-for-user.js?embed_id=199594';
        s.async = true;
        s.onload = function (e) {
          window.OneMap.initMap(setting)
        };
        var to = d.getElementsByTagName('script')[0];
        to.parentNode.insertBefore(s, to);
      })();

  let p=document.querySelectorAll(".card p");
  p[0].addEventListener("click",function(e){
  		document.querySelector(".galary1").style="display:none"
  		document.querySelector(".galary2").style="display:none"
  		document.querySelector(".galary3").style="display:none"
  		document.querySelector(".galary1").style="display:block"
  })
  p[1].addEventListener("click",function(e){
  		document.querySelector(".galary1").style="display:none"
  		document.querySelector(".galary2").style="display:none"
  		document.querySelector(".galary3").style="display:none"
  		document.querySelector(".galary2").style="display:block"
  })
  p[2].addEventListener("click",function(e){
  		document.querySelector(".galary1").style="display:none"
  		document.querySelector(".galary2").style="display:none"
  		document.querySelector(".galary3").style="display:none"
  		document.querySelector(".galary3").style="display:block"
  })
  let t=document.querySelectorAll(".h")
  let hh=document.querySelectorAll(".menu ul li")
  let h=document.querySelectorAll(".nav li ")
  document.querySelector(".menu ul").addEventListener("click",function(e){
  		
  		for(let i=0;i<t.length;i++){
  			t[i].style="display:none"
  		}
  		for(let i=0;i<hh.length;i++){
  			hh[i].classList.remove("active")
  		}
  		if(e.target.classList.contains("li1")){
  			e.target.classList.add("active")
  			t[1].style="display:block"
  		}
  		else if(e.target.classList.contains("li2")){
  			e.target.classList.add("active")
  			t[2].style="display:block"
  		}
  		else if(e.target.classList.contains("li3")){
  			e.target.classList.add("active")
  			t[3].style="display:block"
  		}
  		else if(e.target.classList.contains("li4")){
  			e.target.classList.add("active")
  			t[4].style="display:block"
  		}
  		else if(e.target.classList.contains("li5")){
  			e.target.classList.add("active")
  			t[5].style="display:block"
  		}
  		else if(e.target.classList.contains("li6")){
  			e.target.classList.add("active")
  			t[6].style="display:block"
  		}
  		else if(e.target.classList.contains("li7")){
  			e.target.classList.add("active")
  			t[7].style="display:block"
  		}
  		else if(e.target.classList.contains("li8")){
  			e.target.classList.add("active")
  			t[8].style="display:block"
  		}
  		else if(e.target.classList.contains("li9")){
  			e.target.classList.add("active")
  			t[9].style="display:block"
  		}
  		else if(e.target.classList.contains("li10")){
  			e.target.classList.add("active")
  			t[10].style="display:block"
  		}
  		else if(e.target.classList.contains("li11")){
  			e.target.classList.add("active")
  			t[11].style="display:block"
  		}

  });
  document.querySelector("nav ul").addEventListener("click",function(e){
  	for(let i=0;i<t.length;i++){
  			t[i].style="display:none"
  		}
  		debugger;
  	for(let i=0;i<hh.length;i++){
  			hh[i].classList.remove("active")
  		}
  	if(e.target.classList.contains("g")){
  			document.querySelector(".golovna").style="display:block"
  		}
  	else if(e.target.classList.contains("gg")){
  			document.querySelector(".about").style="display:block"
  		}
  	else if(e.target.classList.contains("ggg")){
  			document.querySelector(".vstup").style="display:block"
  		}
  	else if(e.target.classList.contains("gggg")){
  			document.querySelector(".history").style="display:block"
  		}
  });
