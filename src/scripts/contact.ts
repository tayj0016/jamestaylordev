const form = document.getElementById('contact-form') as HTMLFormElement | null;
const submitButton = document.getElementById('contact-submit') as HTMLButtonElement | null;
const successMessage = document.getElementById('contact-success');
const errorMessage = document.getElementById('contact-error');

form?.addEventListener('submit', async event => {
    event.preventDefault();

    if (!submitButton) return;

    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    errorMessage?.classList.add('hidden');

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                Accept: 'application/json'
            }
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
            throw new Error(result.message || 'Submission failed.');
        }

        form.classList.add('hidden');
        successMessage?.classList.remove('hidden');
    } catch {
        submitButton.disabled = false;
        submitButton.textContent = 'Send message';

        errorMessage?.classList.remove('hidden');
    }
});