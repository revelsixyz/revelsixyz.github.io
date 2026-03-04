const form = document.getElementById("contact-form");
if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const btn = form.querySelector('button[type="submit"]');
        const original = btn ? btn.innerHTML : "";
        const sending = btn?.dataset.sendingMessage || "Enviando...";
        const ok = btn?.dataset.okMessage || "Enviado!";
        const fail = btn?.dataset.errorMessage || "Error!";

        if (btn) { btn.disabled = true; btn.innerHTML = sending; }

        try {
            const data = new FormData(form);
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data,
                headers: { "Accept": "application/json" }
            });

            const json = await res.json().catch(() => null);

            if (res.ok && json?.success) {
                if (btn) btn.innerHTML = ok;
                form.reset();
            } else {
                console.error("Web3Forms error:", res.status, json);
                if (btn) btn.innerHTML = fail;
            }
        } catch (err) {
            console.error(err);
            if (btn) btn.innerHTML = fail;
        } finally {
            setTimeout(() => {
                if (btn) { btn.disabled = false; btn.innerHTML = original; }
            }, 1500);
        }
    });
}