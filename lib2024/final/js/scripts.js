window.onload = init;
function showHideMobileMenu() {
	var mobileNav = document.querySelector('.mobile-nav');
	if(mobileNav.style.display=="block") {
		mobileNav.style.display="none";
	} else {
		mobileNav.style.display="block";
	}
}
