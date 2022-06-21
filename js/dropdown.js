'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const dropDownMenus = document.querySelectorAll('.links-list.links-list_drop-down');
    
    function toggleMenu(menu) {
        menu.classList.toggle('links-list_drop-down_collapsed');
    }


    for (let i = 0; i < dropDownMenus.length; i++) {
        let headerContainer = dropDownMenus[i].querySelector('.links-list__header-container');
        headerContainer.addEventListener('click', () => {
            toggleMenu(dropDownMenus[i]);
        });
    }
});