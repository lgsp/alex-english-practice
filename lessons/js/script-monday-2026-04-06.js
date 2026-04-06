// --- QUIZ DATA (All in English) ---
const quizData = [
    // PRONUNCIATION
    { q: "How is the 'u' pronounced in 'Undaunted'?", options: ["/ʌ/ (short 'u' as in 'up')", "/u:/ (long 'u' as in 'blue')", "/j/ (as in 'university')"], correct: 0, cat: "Pronunciation", exp: "The prefix 'un-' is almost always pronounced with a short /ʌ/ sound." },
    { q: "The final 's' of 'steps' is pronounced:", options: ["/z/ (voiced)", "/s/ (unvoiced)", "It is silent"], correct: 1, cat: "Pronunciation", exp: "After an unvoiced consonant like /p/, the plural 's' remains unvoiced (/s/)." },
    { q: "How do you pronounce 'Blood'?", options: ["/blu:d/", "/blʌd/", "/blɒd/"], correct: 1, cat: "Pronunciation", exp: "'Blood' and 'flood' are exceptions; they are pronounced with a short /ʌ/." },
    { q: "Where is the main stress in 'Defiance'?", options: ["1st syllable (DE-fiance)", "2nd syllable (de-FI-ance)", "3rd syllable (defian-CE)"], correct: 1, cat: "Pronunciation", exp: "The stress is on the second syllable: /dɪˈfaɪəns/." },
    { q: "The 'gh' in 'Even though' is:", options: ["Pronounced /f/", "Pronounced /g/", "Totally silent"], correct: 2, cat: "Pronunciation", exp: "In 'though', 'through', or 'thought', 'gh' is never pronounced." },

    // VOCABULARY
    { q: "What does 'Undaunted' mean?", options: ["Scared", "Impassive / Unafraid", "Tired"], correct: 1, cat: "Vocabulary", exp: "'Undaunted' means not discouraged by danger or difficulty." },
    { q: "What are 'Embers'?", options: ["Glowing remains of a fire", "Tears", "Members"], correct: 0, cat: "Vocabulary", exp: "'Embers' are the glowing hot remains of a dying fire." },
    { q: "Translate 'To waver':", options: ["To wander", "To vacillate / weaken", "To win"], correct: 1, cat: "Vocabulary", exp: "To waver means to become unsteady or hesitate." },
    { q: "In this context, 'Defiance' means:", options: ["Doubt / Mistrust", "Bold resistance / Provocation", "Confidence"], correct: 1, cat: "Vocabulary", exp: "It's a partial false friend. In English, it is the act of openly resisting authority." },
    { q: "In the lyrics 'Dawn breaks', what is 'Dawn'?", options: ["Dusk / Evening", "Storm", "The first light of morning"], correct: 2, cat: "Vocabulary", exp: "'Dawn' is the time when the sun rises." },

    // GRAMMAR
    { q: "In 'The darkness we stand', what style is used?", options: ["A poetic inversion", "A passive form", "A near future tense"], correct: 0, cat: "Grammar", exp: "Normal order is 'We stand in the darkness'. Inversion creates an epic effect." },
    { q: "What is the function of 'Waiting' here?", options: ["Gerund", "Present Participle", "Infinitive"], correct: 1, cat: "Grammar", exp: "It acts as a present participle describing the state of the subject 'We'." },
    { q: "Why is 'Won't' used in 'We won't surrender'?", options: ["It's a habit", "It expresses future will/volition", "It's a obligation"], correct: 1, cat: "Grammar", exp: "Will/Won't here expresses strong determination or intention in the future." },
    { q: "Complete: 'If we ____ fall today...'", options: ["must", "shoulds", "ought"], correct: 0, cat: "Grammar", exp: "'Must' expresses absolute necessity or obligation." },
    { q: "What does 'Until the blood is out' mean?", options: ["Until blood comes out", "As long as blood is outside", "Until all blood is exhausted/gone"], correct: 2, cat: "Grammar", exp: "'Out' here indicates that the supply is exhausted (like 'out of stock')." },

    // COMPREHENSION
    { q: "What is the dominant feeling of the song?", options: ["Sadness", "Resilience / Determination", "Defeat"], correct: 1, cat: "Comprehension", exp: "The entire text emphasizes standing tall despite the storm." },
    { q: "Who is the 'witness' to their actions?", options: ["The enemy", "The dark sky", "The people"], correct: 1, cat: "Comprehension", exp: "The lyrics say: 'The dark sky is our witness'." },
    { q: "What does 'One against two' highlight?", options: ["They are half-price", "They are outnumbered", "They are twice as strong"], correct: 1, cat: "Comprehension", exp: "This underlines heroism when facing a larger enemy." },
    { q: "Is the narrator afraid?", options: ["Yes, very much", "No, there are only embers in his chest", "He doesn't say"], correct: 1, cat: "Comprehension", exp: "He explicitly states: 'There is no fear in our chest'." },
    { q: "What happens when 'Dawn breaks'?", options: ["They flee", "Their names remain unchanged", "They forget everything"], correct: 1, cat: "Comprehension", exp: "This suggests their honor and identity remain intact." }
];

let score = 0;
let questionsAnswered = 0;

document.addEventListener('DOMContentLoaded', () => {
    // 1. Toggle Lyrics
    const toggleBtn = document.getElementById('toggle-lyrics');
    const lyricsArea = document.getElementById('lyrics-area');
    toggleBtn.addEventListener('click', () => {
        lyricsArea.classList.toggle('hide');
        toggleBtn.textContent = lyricsArea.classList.contains('hide') ? "Show Lyrics & Translation" : "Hide Lyrics & Translation";
    });

    // 2. Generate Quiz
    const quizContent = document.getElementById('quiz-content');
    quizData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'question-block';
        div.innerHTML = `
            <p class="question"><strong>[${item.cat}]</strong> ${index + 1}. ${item.q}</p>
            <div class="options" id="options${index}">
                ${item.options.map((opt, i) => `<button class="opt-btn" onclick="checkAnswer(${index}, ${i})">${opt}</button>`).join('')}
            </div>
            <p id="exp${index}" class="explanation hide">${item.exp}</p>
        `;
        quizContent.appendChild(div);
    });
});

// 3. Interactive Answer Checking (with score)
// --- Interactive Answer Checking ---
function checkAnswer(questionIndex, selectedIndex) {
    const parent = document.getElementById(`options${questionIndex}`);
    const buttons = parent.querySelectorAll('.opt-btn');
    const explanation = document.getElementById(`exp${questionIndex}`);
    const correctIndex = quizData[questionIndex].correct;

    // Prevent multiple clicks
    buttons.forEach(btn => btn.disabled = true);

    // Show result for the clicked button
    if (selectedIndex === correctIndex) {
        buttons[selectedIndex].style.backgroundColor = "#27ae60";
        buttons[selectedIndex].style.color = "white";
        score++;
    } else {
        buttons[selectedIndex].style.backgroundColor = "#e74c3c";
        buttons[selectedIndex].style.color = "white";
        buttons[correctIndex].style.backgroundColor = "#27ae60";
        buttons[correctIndex].style.color = "white";
    }

    // CRITICAL: Remove 'hide' class only after selection
    explanation.classList.remove('hide');
    explanation.style.display = "block"; // Force display

    // Update Score
    questionsAnswered++;
    document.getElementById('score-area').classList.remove('result-hide');
    document.getElementById('current-score').textContent = score;
}

// --- Toggle Lyrics Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-lyrics');
    const lyricsArea = document.getElementById('lyrics-area');
    
    toggleBtn.addEventListener('click', () => {
        // Toggle the 'hide' class
        if (lyricsArea.classList.contains('hide')) {
            lyricsArea.classList.remove('hide');
            lyricsArea.style.display = "block";
            toggleBtn.textContent = "Hide Lyrics & Translation";
        } else {
            lyricsArea.classList.add('hide');
            lyricsArea.style.display = "none";
            toggleBtn.textContent = "Show Lyrics & Translation";
        }
    });
});