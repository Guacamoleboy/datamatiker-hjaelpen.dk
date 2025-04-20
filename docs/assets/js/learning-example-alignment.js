function dedent(text) {
    const lines = text.split('\n');
    const indentLengths = lines
        .filter(line => line.trim().length > 0)
        .map(line => line.match(/^ */)[0].length);
    const minIndent = Math.min(...indentLengths);

    return lines.map(line => line.slice(minIndent)).join('\n');
}