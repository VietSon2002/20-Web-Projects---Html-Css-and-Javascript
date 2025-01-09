const form = document.querySelector("form");

async function handleSubmit(event) {
    event.preventDefault(); // Ngăn gửi form mặc định

    try {
        const data = new FormData(event.target);

        // Gửi request
        const res = await fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        // Kiểm tra phản hồi
        if (res.ok) {
            alert("Thank you for your submission!");
            form.reset();
        } else {
            const errorText = await res.text();
            alert(`Oops! Something went wrong: ${errorText}`);
        }

    } catch (error) {
        alert(`Oops! There was a problem submitting your form: ${error.message}`);
    }
}

form.addEventListener("submit", handleSubmit);
