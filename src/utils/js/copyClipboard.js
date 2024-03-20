function copyClipboard(text) {

    let executed = false;

    if (navigator.clipboard) {
        try {
            navigator.clipboard.writeText(text);
            executed = true;
        } catch (e) {
            executed = false;
        }
    } else {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";

        document.body.appendChild(textArea);
        
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
            executed = true
        } catch (err) {
            executed = false
        }

        document.body.removeChild(textArea);
    }

}

export { copyClipboard }