document.addEventListener('DOMContentLoaded', function() {
	
	if (window.innerWidth < 768)
	{
		return;
	}
	
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');
    let lastScrollY = window.scrollY;

    function adjustHeaderOnScroll() {
        const currentScrollY = window.scrollY;
        let newHeaderWidth;
        let newMainWidth;
        let newMainLeft;

        if (currentScrollY > 0) {
            // Scrolling down
            newHeaderWidth = 20; // Set header width to 20% immediately
            newMainLeft = 30;
        } else if (currentScrollY <= 0) {
            // Scrolled to the top
            newHeaderWidth = 50; // Reset header width to 50%
            newMainLeft = 50;
        } else {
            // Scrolling up but not at the top yet, keep the current width
            return;
        }

        // Update the header width
        header.style.width = newHeaderWidth + '%';

        // Adjust main width and position accordingly
        main.style.left = newMainLeft + '%';

        // Update lastScrollY for next scroll event
        lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    }

    function adjustHeaderOnClick() {
        // Set header width to 20% immediately
        header.style.width = '20%';

        // Set main left to 30%
        main.style.left = '30%';
    }

    let ticking = false;

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                adjustHeaderOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Add click event listener for the whole document
    document.addEventListener('click', function() {
        adjustHeaderOnClick();
    });
});
