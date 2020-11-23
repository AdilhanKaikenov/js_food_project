function modal() {
    // Modal
    const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');

    function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    // Or the option with toggle - but then assign the class in the index html file
    document.body.style.overflow = 'hidden'; // To prevent the page from scrolling when modal window is shown
    clearInterval(modalTimerId);
    }

    modalTrigger.forEach(item => {
    item.addEventListener('click', openModal); 
    });

    function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    // Or the option with toggle - but then assign the class in the index html file
    document.body.style.overflow = '';
    }

    modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == "") {
    closeModal();
    }
    });

    document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) { 
    closeModal();
    }
    });

    const modalTimerId = setTimeout(openModal, 300000);

    function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    openModal();
    window.removeEventListener('scroll', showModalByScroll);
    }
    }
    window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;