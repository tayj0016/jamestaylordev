const toggle = document.getElementById('tools-toggle');
const expanded = document.getElementById('tools-expanded');
const label = document.getElementById('tools-toggle-label');
const icon = document.getElementById('tools-toggle-icon');

let open = false;

toggle?.addEventListener('click', () => {
    if (!expanded || !label || !icon) return;

    open = !open;

    if (open) {
        expanded.style.maxHeight = `${expanded.scrollHeight}px`;
        expanded.style.opacity = '1';
        label.textContent = 'Show less';
        icon.style.transform = 'rotate(180deg)';
    } else {
        expanded.style.maxHeight = '0';
        expanded.style.opacity = '0';
        label.textContent = 'Show more';
        icon.style.transform = 'rotate(0deg)';
    }
});