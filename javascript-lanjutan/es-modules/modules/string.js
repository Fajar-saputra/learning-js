// stringUtils.js
export default function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

export function countVowels(input) {
    const vowels = "aeiouAEIOU";
    return [...input].filter(char => vowels.includes(char)).length;
}
