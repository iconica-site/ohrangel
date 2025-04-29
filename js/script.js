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

    if (resetBtn) {
        resetBtn.addEventListener('click', function () {
            const checkboxes = modal.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
        });
    }

    const searchButton = document.querySelector('.search-button-settings');
    const modal1 = document.querySelector('.search-filters-modal');

    if (searchButton) {
        searchButton.addEventListener('click', function (e) {
            e.stopPropagation(); // Не даем событию "всплыть" до document
            modal1.classList.toggle('open');
        });
    }

    // Закрытие при клике вне модалки
    document.addEventListener('click', function (e) {
        if (modal1 && searchButton) {
            const isClickInside = modal1.contains(e.target) || searchButton.contains(e.target);
            if (!isClickInside) {
                modal1.classList.remove('open');
            }
        }
    });

    const menubuttonadd = document.querySelector('.menu-button-add');
    const addsotrmodal = document.querySelector('.add-sotrudnik-modal');
    const buttonCancel = document.querySelector('.asb-cancel-button');

    if (menubuttonadd) {
        menubuttonadd.addEventListener('click', function (e) {
            e.stopPropagation(); // Не даем событию "всплыть" до document
            addsotrmodal.classList.toggle('open');
        });
    }

    if (buttonCancel) {
        buttonCancel.addEventListener('click', () => {
            addsotrmodal.classList.remove('open');
        });
    }

    document.addEventListener('click', function (e) {
        if (addsotrmodal && menubuttonadd) {
            const isClickInside = addsotrmodal.contains(e.target) || menubuttonadd.contains(e.target);
            if (!isClickInside) {
                addsotrmodal.classList.remove('open');
            }
        }
    });

    const input = document.getElementById("addnomerydo");
    let mask = null;

    input.addEventListener("focus", function () {
      if (!mask) {
        mask = IMask(input, {
          mask: 'AA-000000',
          lazy: false, 
          blocks: {
            AA: {
              mask: IMask.MaskedPattern,
              mask: 'AA',
              definitions: {
                A: /[A-Z]/,
              },
              prepare: () => 'AA',
              validate: () => true,
              overwrite: true
            }
          },
          prepare: function (str) {
            if (/^\d/.test(str)) {
              return 'AA-' + str.slice(0, 6);
            }
            return str;
          }
        });

        if (!input.value.startsWith("AA-")) {
          input.value = "AA-";
          mask.updateValue();
          input.setSelectionRange(3, 3);
        }
      }
    });

    const maskOptions = {
        mask: '+{7} (000) 000-00-00',
        lazy: false
        };

        const phoneInput = document.getElementById("menphone");
        const phoneInput1 = document.getElementById("addmanphone");
        const phoneInput2 = document.getElementById("addnumber");

        IMask(phoneInput, maskOptions);
        IMask(phoneInput1, maskOptions);
        IMask(phoneInput2, maskOptions);
        


    const openBtn = document.querySelector('.open-popup-btn');
    const overlay = document.getElementById('popup-overlay');
    const closeBtn = document.getElementById('close-popup');
    const addManagerBtns = document.querySelectorAll('.add-manager-btn');
    const editManagerBtns = document.querySelectorAll('.edit-manager-item');
    const managersList = document.getElementById('managers-list');
    const addForm = document.getElementById('add-manager-form');
    const editForm = document.getElementById('edit-manager-form');
    const cancelBtn = document.getElementById('cancel-btn');
    const editCancelBtn = document.getElementById('edit-cancel-btn');
    const form = document.getElementById('manager-form');
  
    if (openBtn) {
        openBtn.addEventListener('click', () => {
        overlay.style.display = 'flex';
        });
    }
  
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        });
    }
  
    if (overlay) {
        overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
        });
    }

    // форма добавления
    if (addManagerBtns) {
        addManagerBtns.forEach(function(button) {
            button.addEventListener('click', function() {
                managersList.style.display = 'none';
                addForm.style.display = 'block';
            });
        });
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            addForm.style.display = 'none';
            managersList.style.display = 'block';
        });
    }

    // форма редактирования
    if (editManagerBtns) {
        editManagerBtns.forEach(function(button) {
            button.addEventListener('click', function() {
                managersList.style.display = 'none';
                editForm.style.display = 'block';
            });
        });
    }

    if (editCancelBtn) {
        editCancelBtn.addEventListener('click', () => {
            editForm.style.display = 'none';
            managersList.style.display = 'block';
        });
    }
    

});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".bts-buttons");
    const formBlock = document.querySelector(".bfs-form-settings-group");
    const knowledgeBlock = document.querySelector(".blocks-with-base-znaniy");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const target = this.dataset.target;
            if (target === "form") {
                formBlock.style.display = "block";
                knowledgeBlock.style.display = "none";
            } else if (target === "knowledge") {
                formBlock.style.display = "none";
                knowledgeBlock.style.display = "flex";
            }
        });
    });

    const accountName = document.querySelector('.account-name');
    const managersBlock = document.querySelector('.account-control-managers');

    if (accountName && managersBlock) {
        accountName.addEventListener('click', function(event) {
            event.stopPropagation(); // Останавливаем всплытие события
            accountName.classList.toggle('active');
            managersBlock.classList.toggle('active');
        });

        // Закрытие при клике вне блока
        document.addEventListener('click', function(event) {
            const isClickInside = accountName.contains(event.target) || managersBlock.contains(event.target);

            if (!isClickInside) {
                accountName.classList.remove('active');
                managersBlock.classList.remove('active');
            }
        });
    }

    const accountNotification = document.querySelector('.account-notification');
    const accountNotificationList = document.querySelector('.account-notification-list');

    if (accountNotification && accountNotificationList) {
        accountNotification.addEventListener('click', function(event) {
            event.stopPropagation(); // Останавливаем всплытие события
            accountNotification.classList.toggle('active');
            accountNotificationList.classList.toggle('active');
        });

        // Закрытие при клике вне блока
        document.addEventListener('click', function(event) {
            const isClickInside = accountNotification.contains(event.target) || accountNotificationList.contains(event.target);

            if (!isClickInside) {
                accountNotification.classList.remove('active');
                accountNotificationList.classList.remove('active');
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("successModal");
    const closeBtn = document.getElementById("closeSuccessModal");

    document.querySelectorAll('form').forEach(form => {
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();

                let hasError = false;

                // Удаляем старые ошибки
                form.querySelectorAll('.error-message').forEach(el => el.remove());
                form.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));

                // Проверка input'ов (кроме hidden)
                form.querySelectorAll('input:not([type="hidden"])').forEach(input => {
                    if (!input.value.trim()) {
                        showError(input, 'Это поле обязательно для заполнения');
                        hasError = true;
                    }
                });

                // Проверка textarea
                form.querySelectorAll('textarea').forEach(textarea => {
                    if (!textarea.value.trim()) {
                        showError(textarea, 'Это поле обязательно для заполнения');
                        hasError = true;
                    }
                });

                // Проверка кастомных селектов
                form.querySelectorAll('.main-select-sform-otchet').forEach(selectWrapper => {
                    const hiddenInput = selectWrapper.querySelector('.hidden-input');
                    if (!hiddenInput.value.trim()) {
                        showError(selectWrapper, 'Пожалуйста, выберите значение из списка');
                        hasError = true;
                    }
                });

                if (!hasError) {
                    // Если это форма поддержки — показываем модалку
                    if (form.id === 'supportForm') {
                        modal.style.display = 'flex';
                    } else {
                        form.submit(); // другие формы отправляем нормально
                    }
                }

                function showError(element, message) {
                    const error = document.createElement('div');
                    error.classList.add('error-message');
                    error.innerText = message;

                    element.classList.add('input-error');

                    const group = element.closest('.bfs-input-group') || element.parentElement;
                    group.insertBefore(error, element);
                }
            });
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
            const form = document.getElementById("supportForm");
            form.reset(); // Сброс формы при закрытии
        });
    }
});



document.querySelectorAll('.select-sform-otchet span').forEach(item => {
    item.addEventListener('click', function () {
        const selectBox = this.closest('.main-select-sform-otchet');
        const display = selectBox.querySelector('.selected-option');
        const hidden = selectBox.querySelector('.hidden-input');

        display.textContent = this.textContent;
        hidden.value = this.getAttribute('data-select');
        display.classList.remove('input-error'); // убрать ошибку, если выбрали
        selectBox.querySelectorAll('.error-message').forEach(e => e.remove());
    });
});


