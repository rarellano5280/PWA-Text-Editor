const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('hit')
    console.log("event" + event);
    event.preventDefault();

    window.deferredPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
const initEvent = window.deferredPrompt;

if (!initEvent) {
    return;
}

initEvent.prompt();

window.deferredPrompt = null;

butInstall.classList.toggle('hidden', true);

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
console.log('install hit');
window.deferredPrompt = null;
});
