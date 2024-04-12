const typed = new Typed('.multiple-text', {
    strings: ['Explore and Visualize Sorting Algorithms!', 'Explore and Visualize Sorting Algorithms!', 'Explore and Visualize Sorting Algorithms!'],
    typeSpeed: 100,
    // backSpeed: 100,
    // backDelay: 1000,
    loop: true
});
// Visualize your favourite Sorting algorithms, Bubble Sort, Insertion Sort, Selection Sort, Merge Sort and Quick Sort with our Sort Visualizer to gain a better and clear understanding of the concepts of the sorting process used by each of the algorithm in a visual way.


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.edu-container,.experience-container,.skillscontainer,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });
