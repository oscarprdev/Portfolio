export function addSpanToWords(text: string, words: string[], className: string) {
    return text.replace(
        new RegExp(`\\b(${words.join('|')})\\b`, 'gi'),
        '<span class="' + className + '">$1</span>'
    );
}
