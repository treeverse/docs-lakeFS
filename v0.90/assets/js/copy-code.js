$(() => {
    let copyCodeContainer = $("<div class=\"copy-code-container\">" +
        "<button class=\"copy-code-button far fa-copy\" aria-label=\"Copy code block to your clipboard\">" +
        "</button></div>");
    $("div.highlighter-rouge").prepend(copyCodeContainer);
    $("div.highlighter-rouge .copy-code-button").click(function() {
        const tempTextArea = document.createElement('textarea');
        tempTextArea.textContent = $(this).parent().parent().find("code").text()
        document.body.appendChild(tempTextArea);
        const selection = document.getSelection();
        selection.removeAllRanges();
        tempTextArea.select();
        document.execCommand('copy');
        selection.removeAllRanges();
        document.body.removeChild(tempTextArea);
    });
});
