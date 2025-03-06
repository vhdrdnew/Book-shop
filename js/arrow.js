const tags = document.querySelectorAll('.tags-section__tag');
const blog = document.querySelectorAll('.blog-section__tag');
const moveDistance = 60;
const animationDuration = 300;
const resetDelay = 100;

tags.forEach(tag => {
    const arrow = tag.querySelector('.arrow i');

    tag.addEventListener('mouseenter', () => {
        arrow.style.transition = `transform ${animationDuration}ms ease-in-out`;
        arrow.style.transform = `translateX(${moveDistance}px)`;

        setTimeout(() => {
            arrow.style.transition = 'none';
            arrow.style.transform = `translateX(-${moveDistance}px)`;

            setTimeout(() => {
                arrow.style.transition = `transform ${animationDuration}ms ease-in-out`;
                arrow.style.transform = 'translateX(0)';
                }, resetDelay);
            }, animationDuration);
        });
    });

blog.forEach(tag => {
    const arrow = tag.querySelector('.arrow i');

    tag.addEventListener('mouseenter', () => {
        arrow.style.transition = `transform ${animationDuration}ms ease-in-out`;
        arrow.style.transform = `translateX(${moveDistance}px)`;

        setTimeout(() => {
            arrow.style.transition = 'none';
            arrow.style.transform = `translateX(-${moveDistance}px)`;

            setTimeout(() => {
                arrow.style.transition = `transform ${animationDuration}ms ease-in-out`;
                arrow.style.transform = 'translateX(0)';
            }, resetDelay);
        }, animationDuration);
    });
})