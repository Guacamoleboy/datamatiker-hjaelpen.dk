document.addEventListener('DOMContentLoaded', function () {
    let isHighlighted = false;  

    $('#codeExampleModal').on('shown.bs.modal', function () {
        if (!isHighlighted) {  
            const codeEl = document.querySelector('#codeExampleModal code');
            const original = codeEl.innerText;

            let highlighted = original
                .replace(/#CLASS\[(.*?)\]/g, '<span class="code-highlight-pink">$1</span>')
                .replace(/#P\[(.*?)\]/g, '<span class="code-highlight-private-public-protected">$1</span>')
                .replace(/#OBJECT\[(.*?)\]/g, '<span class="code-highlight-object">$1</span>')
                .replace(/#COMMENT\[(.*?)\]/g, '<span class="code-highlight-comments">$1</span>')
                .replace(/#GREEN\[(.*?)\]/g, '<span class="code-highlight-green">$1</span>')
                .replace(/#ORANGE\[(.*?)\]/g, '<span class="code-highlight-orange">$1</span>')
                .replace(/#WHITE\[(.*?)\]/g, '<span class="code-highlight-white">$1</span>');

            codeEl.innerHTML = highlighted;
            isHighlighted = true;  
        }
    });
});
