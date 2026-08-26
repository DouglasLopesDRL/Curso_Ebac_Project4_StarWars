document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tabs-id]');
    const questions = document.querySelectorAll('[data-faq-question]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(btn) {
            const tabTarget = btn.target.dataset.tabButton;
            console.log(tabTarget);
            const tab = document.querySelector(`[data-tab-id="${tabTarget}"]`);
            hiddenTabs();
            tab.classList.add('shows__list--is-active');
            console.log(tab);
            hiddenActiveButton();
            btn.target.classList.add('shows__tabs__button--is-active');
        });
    }

    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', closeOpenQuestion);
    }
});

function closeOpenQuestion(element){
    const classState = 'faq__questions__item--is-open';
    const elementFather = element.target.parentNode;

    elementFather.classList.toggle(classState);   
}

function hiddenActiveButton(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hiddenTabs(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
