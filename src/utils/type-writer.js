/**
 * Pauses the execution for a specified duration.
 * @param {number} ms - The duration to sleep in milliseconds.
 * @returns {Promise} - A promise that resolves after the specified duration.
 */
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


/**
 * Simulates a typewriter effect by repeatedly typing and deleting phrases on an HTML element.
 * @param {string[]} words - An array of phrases to display.
 * @param {string} idOfElement - The ID of the HTML element to display the typewriter effect.
 * @param {number} [typingSpeed=100] - The speed at which each character is typed in milliseconds.
 * @param {number} [pauseBetweenPhrases=1000] - The duration to pause between phrases in milliseconds.
 */

export const typeWriter = async (words, idOfElement, typingSpeed = 100, pauseBetweenPhrases = 1000) => {
    const element = document.getElementById(`${idOfElement}`);
    let curPhraseIndex = 0;

    // Infinite loop for continuous typewriter effect.
    while (true) {
        const curWord = words[curPhraseIndex];

        await typeWord(element, curWord, typingSpeed);

        // Pause between typing and deleting phases.
        await sleep(pauseBetweenPhrases);

        await deleteWord(element, curWord, typingSpeed);

        // Pause before moving to the next phrase.
        await sleep(pauseBetweenPhrases);

        // Increment the current phrase index and use modulo to loop back to the beginning if it exceeds the array length.
        curPhraseIndex = (curPhraseIndex + 1) % words.length;
    }
};

/**
 * Types a word on an HTML element with a specified typing speed.
 * @param element HtmlElement
 * @param {string} word - The word to be typed.
 * @param {number} speed - The speed at which each character is typed in milliseconds.
 */
const typeWord = async (element, word, speed) => {
    for (let i = 0; i < word.length; i++) {
        element.innerText = word.substring(0, i + 1);
        await sleep(speed);
    }
};

/**
 * Deletes a word from an HTML element with a specified typing speed.
 * @param element HtmlElement
 * @param {string} word - The word to be deleted.
 * @param {number} speed - The speed at which each character is deleted in milliseconds.
 */
const deleteWord = async (element, word, speed) => {
    for (let i = word.length; i > 0; i--) {
        element.innerText = word.substring(0, i - 1);
        await sleep(speed);
    }
};
