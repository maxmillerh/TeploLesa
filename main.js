// Выбор элементов меню
const li_project = document.getElementById('li_project');
const li_services = document.getElementById('li_services');
const hover_panel_project = document.querySelector('.hover_panel_project');
const hover_panel_services = document.querySelector('.hover_panel_services');

// Элементы модального окна
const cross_form = document.querySelector('.cross_form');
const modal_background = document.querySelector('.modal_background');
const btn_phone = document.getElementById('btn_phone');

// Поле ввода телефона
const form_input = document.getElementById('form_input');
const placeholder = document.querySelector('.placeholder');

// Бургер-меню для мобильных устройств
const header_burger = document.querySelector('.header_burger');
const menu = document.querySelector('.menu');
const exit = document.querySelectorAll('.exit');


// Обработчики событий для меню
if (window.innerWidth > 480) {

    li_project.addEventListener('mouseover', () => {
        hover_panel_project.style.display = "flex";
    });

    li_project.addEventListener('mouseout', () => {
        hover_panel_project.style.display = "none";
    });

    li_services.addEventListener('mouseover', () => {
        hover_panel_services.style.display = "flex";
    });

    li_services.addEventListener('mouseout', () => {
        hover_panel_services.style.display = "none";
    });

}


// Закрытие модального окна
cross_form.addEventListener('click', () => {
    modal_background.classList.add('d-none');
});

// Открытие модального окна
btn_phone.addEventListener('click', () => {
    modal_background.classList.remove('d-none');
});

// Обработчики событий для ввода телефона
form_input.addEventListener('focus', () => {
    placeholder.classList.add('active');
});

//Вывод результата валидации
form_input.addEventListener('blur', () => {
    if (form_input.value === '') {
        placeholder.classList.remove('active');
    } else {
        if (!validatePhoneNumber(form_input.value)) {
            placeholder.classList.add('red');
            placeholder.classList.remove('green');
            placeholder.innerHTML = 'Некорректный номер телефона';
            form_input.style.borderColor = '#FF0000';
        } else {
            placeholder.classList.add('green');
            placeholder.classList.remove('red');
            placeholder.innerHTML = 'Телефон';
            form_input.style.borderColor = '#46be00';
        }
    }
});

// Оформление номера телефона
form_input.addEventListener('input', function () {
    const value = this.value.replace(/\D/g, ''); // Убираем все нечисловые символы
    const formattedValue = formatPhoneNumber(value);
    this.value = formattedValue;
});

function formatPhoneNumber(value) {
    if (value.length === 0) return '+7 ';
    if (value.length <= 1) return '+7 ';
    if (value.length <= 4) return '+7 (' + value.slice(1);
    if (value.length <= 7) {
        return '+7 (' + value.slice(1, 4) + ') ' + value.slice(4);
    }
    if (value.length <= 9) {
        return '+7 (' + value.slice(1, 4) + ') ' + value.slice(4, 7) + '-' + value.slice(7);
    }
    return '+7 (' + value.slice(1, 4) + ') ' + value.slice(4, 7) + '-' + value.slice(7, 9) + '-' + value.slice(9, 11);
}
// Проверка формата номера телефона
function validatePhoneNumber(phoneNumber) {
    const regex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    return regex.test(phoneNumber);
}


// Логика меню для мобильных устройств
if (window.innerWidth < 480) {

    function closeMenu() {
        hover_panel_project.style.display = 'none';
        hover_panel_services.style.display = 'none';
        menu.classList.add('d-none');
    }

    // Обработчик клика на бургер
    let open_menu = false;
    header_burger.addEventListener('click', () => {
        if (!open_menu) {
            header_burger.style.transform = 'rotate(90deg)';
            open_menu = true;
            menu.classList.remove('d-none');
        } else {
            header_burger.style.transform = 'rotate(0deg)';
            open_menu = false;
            closeMenu()
        }

    });

    menu.classList.add('d-none');
    hover_panel_project.style.display = 'none';
    hover_panel_services.style.display = 'none';
    // Обработчик клика на "Проекты"
    li_project.addEventListener('click', () => {
        hover_panel_project.style.display = 'flex';
    });
    // Обработчик клика на "Услуги"
    li_services.addEventListener('click', () => {
        hover_panel_services.style.display = 'flex';
    });

    exit.forEach(exit => {
        exit.addEventListener('click', (event) => {
            event.stopPropagation();
            hover_panel_project.style.display = 'none';
            hover_panel_services.style.display = 'none';
        });
    });


}
