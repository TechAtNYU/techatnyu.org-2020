const config = {
    type: 'carousel',
    perView: 3,
    breakpoints: {
        1200: {
            perView:2
        },
        650: {
            perView:1
        }
    }
};

new Glide ('.glide', config).mount();
