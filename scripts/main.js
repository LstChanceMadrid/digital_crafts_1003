window.onscroll = () => {
    stickyNavBar();
};

const stickyNavBar = () => {
    console.log("pageYOffet " + window.pageYOffset)
    console.log("sticky offsetTop = " + document.getElementById('sticky-nav-bar').offsetTop)

    if (window.pageYOffset > 50) {
        document.getElementById('sticky-nav-bar').classList.add('sticky');
    } else {
        document.getElementById('sticky-nav-bar').classList.remove('sticky');
    }
}