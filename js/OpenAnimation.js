	
const dataAnimes = document.querySelectorAll('[data-event]');
const animation = 'animate';


function EventScroll(){
	const position = window.pageYOffset + ((window.innerHeight * 3) / 4);
	dataAnimes.forEach(function(element){		
		if(position > element.offsetTop){
			element.classList.add(animation);
		}else{
			element.classList.remove(animation);
		}
	})
}

EventScroll();

window.addEventListener("scroll",function(){
	EventScroll();
})