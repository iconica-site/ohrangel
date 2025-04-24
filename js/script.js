document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.main-select-sform-otchet').forEach(select => {
        const header = select.querySelector('.select-header');
        const dropdown = select.querySelector('.select-sform-otchet');
        const selected = select.querySelector('.selected-option');
        const arrow = select.querySelector('.arrow-icon');
        const hiddenInput = select.querySelector('.hidden-input'); // добавили input
    
        header.addEventListener('click', function (e) {
            e.stopPropagation();
    
            // Закрыть все другие селекты
            document.querySelectorAll('.select-sform-otchet').forEach(d => {
                if (d !== dropdown) d.style.display = 'none';
            });
    
            document.querySelectorAll('.arrow-icon').forEach(a => {
                if (a !== arrow) a.classList.remove('rotate');
            });
    
            // Переключить текущий селект
            const isOpen = dropdown.style.display === 'flex';
            dropdown.style.display = isOpen ? 'none' : 'flex';
            arrow.classList.toggle('rotate', !isOpen);
        });
    
        // Выбор опции
        dropdown.querySelectorAll('span').forEach(option => {
            option.addEventListener('click', function () {
                const value = this.getAttribute('data-select');
                selected.textContent = this.textContent;
                selected.setAttribute('data-selected-select', value);
                dropdown.style.display = 'none';
                arrow.classList.remove('rotate');
    
                if (hiddenInput) {
                    hiddenInput.value = value; // вот сюда записываем значение
                }
            });
        });
    });
    

    // Закрытие при клике вне селекта
    document.addEventListener('click', function () {
        document.querySelectorAll('.select-sform-otchet').forEach(d => d.style.display = 'none');
        document.querySelectorAll('.arrow-icon').forEach(a => a.classList.remove('rotate'));
    });

    // Закрыть селект при клике вне
    document.addEventListener('click', function () {
        document.querySelectorAll('.select-sform-otchet').forEach(d => d.style.display = 'none');
        document.querySelectorAll('.arrow-icon').forEach(a => a.classList.remove('rotate'));
    });

    document.querySelectorAll('.tab-sett-col').forEach(div => {
        const checkbox = div.querySelector('input[type="checkbox"]');

        div.addEventListener('click', () => {
            checkbox.checked = !checkbox.checked;
            div.classList.toggle('active', checkbox.checked);
        });
    });

    document.querySelectorAll('.search-filt-checkbox').forEach(div => {
        const checkbox = div.querySelector('input[type="checkbox"]');

        div.addEventListener('click', () => {
            checkbox.checked = !checkbox.checked;
            div.classList.toggle('active', checkbox.checked);
        });
    });

    document.querySelectorAll('.table-last-th button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // чтобы клик вне не срабатывал
            const selectBlock = document.querySelector('.table-setting-select');
            selectBlock.classList.toggle('active');
        });
    });

    // Закрытие при клике вне блока
    document.addEventListener('click', (e) => {
        const selectBlock = document.querySelector('.table-setting-select');
        if (selectBlock && !selectBlock.contains(e.target)) {
            selectBlock.classList.remove('active');
        }
    });

    const resetBtn = document.querySelector('.search-filters-modal .reset-filters');
    const modal = document.querySelector('.search-filters-modal');

    resetBtn.addEventListener('click', function () {
        const checkboxes = modal.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        });
    });

    const searchButton = document.querySelector('.search-button-settings');
    const modal1 = document.querySelector('.search-filters-modal');

    searchButton.addEventListener('click', function (e) {
        e.stopPropagation(); // Не даем событию "всплыть" до document
        modal1.classList.toggle('open');
    });

    // Закрытие при клике вне модалки
    document.addEventListener('click', function (e) {
        const isClickInside = modal1.contains(e.target) || searchButton.contains(e.target);
        if (!isClickInside) {
            modal1.classList.remove('open');
        }
    });

});