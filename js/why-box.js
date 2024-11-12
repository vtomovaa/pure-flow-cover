document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / 50; // Change the divisor for speed

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 10); // Adjust the speed here
            } else {
                counter.innerText = target;
            }
        };

        // Trigger the counter animation when in view
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                }
            });
        });

        observer.observe(counter);
    });
});