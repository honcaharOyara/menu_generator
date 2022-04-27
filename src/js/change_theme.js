const THEMES = ['dark-theme', 'light-theme']

const REFS = {
    body: document.querySelector('body'),
    toggleTheme: document.querySelector('#theme-switch-toggle')
}

const STORAGE = localStorage;

let themeCounter = 1;

if(STORAGE.theme !== undefined) {
    const index = themeCounter = +STORAGE.theme
    REFS.body.classList.add(THEMES[index]);
    (index === 0) ? REFS.toggleTheme.checked = true : REFS.toggleTheme.checked = false;
}else {
    REFS.body.classList.add(THEMES[1]);
}

REFS.toggleTheme.addEventListener('click', e => {
    themeCounter += 1;
    if(themeCounter >= THEMES.length) {
        themeCounter = 0;
    }

    REFS.body.classList = [];
    REFS.body.classList.add(THEMES[themeCounter]);
    localStorage.setItem('theme', themeCounter);
})

// if (STORAGE.theme !== null) {
//     let boolStorageTheme;
//
//     if(STORAGE.theme === 'true') {
//         boolStorageTheme = true;
//     } else if(STORAGE.theme === 'false') {
//         boolStorageTheme = false;
//     }
//
//     changeTheme(boolStorageTheme);
//     REFS.toggleTheme.checked = boolStorageTheme;
// }else {
//     REFS.body.classList.add('light-theme');
// }
//
// REFS.toggleTheme.addEventListener('click', e => {
//     const themeControlValue = e.target.checked
//     localStorage.setItem('theme', themeControlValue);
//
//     changeTheme(themeControlValue);
// })
//
// function changeTheme(value) {
//     if (value === true) {
//         REFS.body.classList = [];
//         REFS.body.classList.add('dark-theme')
//     }else if (value === false) {
//         REFS.body.classList = [];
//         REFS.body.classList.add('light-theme');
//     }
// }