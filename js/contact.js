$("#contact-form").on("submit", function (e) {
    e.preventDefault();

    const $form = $(this);
    const $btn = $form.find("button[type='submit']");
    const buttonCopy = $btn.html();

    $btn.prop("disabled", true).html("Sending...");

    $.ajax({
        url: $form.attr("action"),
        method: "POST",
        data: $form.serialize(),
        headers: { Accept: "application/json" } // important for many form backends with AJAX
    })
        .done(() => {
            $btn.html("Submitted!");
            $form[0].reset();
        })
        .fail((xhr) => {
            console.error("Submit failed:", xhr.status, xhr.responseText);
            $btn.html("Fail!");
        })
        .always(() => {
            setTimeout(() => {
                $btn.prop("disabled", false).html(buttonCopy);
            }, 1500);
        });
});