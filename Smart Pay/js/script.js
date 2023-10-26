




$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        },
        1024: {
            items: 2
        },
    }
})




const x1 = () => {
    let a = 1
    console.log(a);
    const y1 = () => {

        let a = 2;
        console.log(a);

        const z1 = () => {
            let a = 3;
            console.log(a);
        }
        z1()
    }
    y1()
}
x1();




function outerFunction() {
    const outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const innerFunc = outerFunction();
innerFunc();