console.log("YTFixer Enabled");var xsp=document.getElementById("player"),xsh=document.getElementById("placeholder-player"),xsw=document.getElementById("watch7-content"),xst,xso,xsn=document.getElementById("watch7-sidebar-contents");function YTFix(){xst=document.getElementById("theater-background").clientHeight;xtn=(xst+10).toString()+"px";xsp.style.position="fixed";xsh.style.display="none";xsp.style.top="62px";xsp.style.zIndex="10";xsw.style.position="relative";xsw.style.top=xtn;if(xst==720){xsp.style.marginLeft="calc(50% - 853px)"}else if(xst==480){xsp.style.marginLeft="calc(50% - 640px)"}else if(xst==360){xsp.style.marginLeft="calc(50% - 533px)"}else if(xst==240){xsp.style.marginLeft="calc(50% - 213px)"}else{xsp.style.marginLeft="100px"}if(window.innerWidth<=1084 && window.innerWidth>640){xsp.style.marginLeft="0"};if(window.innerWidth>640){xsn.style.position="relative";xsn.style.top=xtn}console.log("YT Video Fixed by YTFixer")};function hashX(){if(window.location.href.indexOf("://www.youtube.com/watch")>-1){YTFix();window.addEventListener("resize",function(){clearTimeout(xso);xso=setTimeout(YTFix,150)})}}hashX();window.addEventListener("hashchange",hashX);if(true){if(document.getElementsByClassName("ytp-size-button")[0]!=null){if(document.getElementsByClassName("ytp-size-button")[0].getAttribute("title")=="Default view"){alert("It looks like you have Theater Mode enabled. YTFixer does not work as well in Theater Mode, but you can still use it.")}}}
