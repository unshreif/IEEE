document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const form = document.getElementById('application-form');
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.checkValidity()) {
                input.classList.remove('invalid');
                input.classList.add('valid');
            } else {
                input.classList.remove('valid');
                input.classList.add('invalid');
            }
        });
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitButton = form.querySelector('.submit-btn');
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;

        if (form.checkValidity()) {
            setTimeout(() => {
                form.reset();
                submitButton.textContent = 'Submit Application';
                submitButton.disabled = false;
                window.location.href = '../Thank/thankyou.html';
            }, 2000);
        } else {
            form.reportValidity();
            submitButton.textContent = 'Submit Application';
            submitButton.disabled = false;
        }
    });
});