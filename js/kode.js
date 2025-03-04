const materi = ["Integral", "Deferensial", "Peluang", "Limit", "Trigonometri"];

function toggleMarkdown(index, file, targetId) {
    const contentDiv = document.getElementById(targetId);
    const button = document.getElementById(`tbtn${index}`);
    const url = `https://raw.githubusercontent.com/irzalgit/irzalgit.github.io/main/doc/${file}`;

    if (contentDiv.style.display === "none" || contentDiv.innerHTML.includes("akan muncul di sini.")) {
        fetch(url)
            .then(response => response.text())
            .then(text => {
                const converter = new showdown.Converter({
                    literalMidWordUnderscores: true,
                    simplifiedAutoLink: true
                });
                const htmlContent = converter.makeHtml(text);
                contentDiv.innerHTML = htmlContent;
                renderMathInElement(contentDiv, {
                    delimiters: [
                        { left: '$$', right: '$$', display: true },
                        { left: '$', right: '$', display: false },
                        { left: '\', right: '\', display: false },
                        { left: '\', right: '\', display: true }
                    ],
                    throwOnError: false
                });
                contentDiv.style.display = "block";
                button.textContent = `Tutup  ${materi[index - 1]}`;
            })
            .catch(error => console.error('Error:', error));
    } else {
        contentDiv.style.display = "none";
        button.textContent = `Buka  ${materi[index - 1]}`;
    }
}