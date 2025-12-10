/* GENDER & SOCIETY QUIZ ENGINE
    Questions derived from uploaded learning modules:
    - Indigenous Gender Practices (Babaylan, Matrilineal)
    - Machismo & Marianismo (Spanish influence)
    - Colonial History (Thomasites, Suffrage)
    - Gender Theory (Functionalism, Conflict Theory)
/* --- 1. MOBILE MENU FUNCTIONALITY --- */
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggle the visibility class
            navLinks.classList.toggle('active');
            
            // Toggle Icon Animation (if FontAwesome <i> tag exists)
            const icon = hamburger.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
});

const quizData = {
    easy: [
        { 
            q: "What refers to the biological characteristics defining humans as male or female?", 
            a: ["Sex", "Gender", "Identity", "Expression"], 
            correct: 0 
        },
        { 
            q: "What refers to socially constructed roles, behaviors, and expectations?", 
            a: ["Sex", "Gender", "Anatomy", "Biology"], 
            correct: 1 
        },
        { 
            q: "In 'Machismo', men are culturally expected to be:", 
            a: ["Submissive & Quiet", "Providers & Dominant", "Emotional & Sensitive", "Passive Followers"], 
            correct: 1 
        },
        { 
            q: "In 'Marianismo', women are modeled after which religious figure?", 
            a: ["Gabriela Silang", "The Virgin Mary", "Maria Clara", "Princess Urduja"], 
            correct: 1 
        },
        { 
            q: "Which acronym stands for Sexual Orientation, Gender Identity, and Expression?", 
            a: ["LGBT", "SOGIE", "GENDER", "PRIDE"], 
            correct: 1 
        },
        { 
            q: "True or False: In pre-colonial Philippines, women could own property and lead communities.", 
            a: ["True", "False"], 
            correct: 0 
        },
        { 
            q: "What is considered the 'first' agent of socialization where gender norms are learned?", 
            a: ["School", "Media", "Family", "Church"], 
            correct: 2 
        },
        { 
            q: "In many cultures, wearing makeup is considered a __________ norm.", 
            a: ["Biological", "Gender", "Legal", "Religious"], 
            correct: 1 
        },
        { 
            q: "Which Filipino historical ideal requires women to be modest, obedient, and domestic?", 
            a: ["The Amazon", "Maria Clara", "The Femme Fatale", "The Boss"], 
            correct: 1 
        },
        { 
            q: "Advertisements often show men in which role?", 
            a: ["Domestic/Cooking", "Beauty Products", "Sports & Cars", "Childcare"], 
            correct: 2 
        }
    ],
    medium: [
        { 
            q: "Who were the spiritual leaders in pre-colonial PH, often women or feminized men?", 
            a: ["Friars", "Babaylan", "Datu", "Governors"], 
            correct: 1 
        },
        { 
            q: "Which American teachers introduced free public education to the Philippines in 1901?", 
            a: ["The Jesuits", "The Thomasites", "The Augustinians", "The Soldiers"], 
            correct: 1 
        },
        { 
            q: "In what year did Filipino women finally win the right to vote?", 
            a: ["1898", "1937", "1946", "1986"], 
            correct: 1 
        },
        { 
            q: "Which sociological theory argues that gender roles exist to keep the family system functioning?", 
            a: ["Conflict Theory", "Structural Functionalism", "Symbolic Interaction", "Feminism"], 
            correct: 1 
        },
        { 
            q: "What term describes Indigenous people who embodied two or more genders and held spiritual gifts?", 
            a: ["Two-Spirit", "Bisexual", "Androgynous", "Non-binary"], 
            correct: 0 
        },
        { 
            q: "In matrilineal societies, inheritance and property are passed through the:", 
            a: ["Father's line", "Mother's line", "Community leader", "King"], 
            correct: 1 
        },
        { 
            q: "Which historical era introduced strict patriarchal systems to the Philippines?", 
            a: ["Pre-colonial", "Spanish-Colonial", "American", "Japanese"], 
            correct: 1 
        },
        { 
            q: "Pop culture often uses 'Gendered ________' to target specific products to boys or girls.", 
            a: ["Marketing", "Neutrality", "Inclusivity", "Equality"], 
            correct: 0 
        },
        { 
            q: "The 'Macho Hero' trope in Philippine media typically depicts men as:", 
            a: ["Emotional", "Fearless & Tough", "Vulnerable", "Dependent"], 
            correct: 1 
        },
        { 
            q: "Education can challenge gender norms through which method?", 
            a: ["Segregation", "Gender-sensitive curriculum", "Strict uniforms", "Ignoring bias"], 
            correct: 1 
        }
    ],
    hard: [
        { 
            q: "Which Philippine law specifically protects women and children against violence?", 
            a: ["Magna Carta of Women", "Anti-Violence Against Women & Children Act", "SOGIE Bill", "Family Code"], 
            correct: 1 
        },
        { 
            q: "Which theory views society as a struggle for dominance between men (dominant) and women (subordinate)?", 
            a: ["Functionalism", "Conflict Theory", "Interactionism", "Humanism"], 
            correct: 1 
        },
        { 
            q: "The Global Gender Gap Report benchmarks countries based on:", 
            a: ["Military power", "Economic, Political, Education & Health gaps", "Population size", "Religious freedom"], 
            correct: 1 
        },
        { 
            q: "Who founded the Asociación Feminista Filipina in 1905?", 
            a: ["Gabriela Silang", "Concepcion Felix", "Cory Aquino", "Melchora Aquino"], 
            correct: 1 
        },
        { 
            q: "What was 'Polo y Servicios' during the Spanish era?", 
            a: ["Religious service", "Forced labor for men", "Women's education", "Tax collection"], 
            correct: 1 
        },
        { 
            q: "Which Indigenous group had a matrilineal system where men moved to the woman's family home?", 
            a: ["Iroquois / Haudenosaunee", "Tagalog", "Visayan", "Lumad"], 
            correct: 0 
        },
        { 
            q: "What concept refers to fairness in treatment (e.g., special measures) to eventually achieve equality?", 
            a: ["Gender Equality", "Gender Equity", "Gender Bias", "Gender Norms"], 
            correct: 1 
        },
        { 
            q: "Structural Functionalists argue that homosexuality is not promoted because it threatens:", 
            a: ["Religious dogma", "Procreation & Family survival", "Political power", "Economic growth"], 
            correct: 1 
        },
        { 
            q: "The 'Comic Relief' trope in media historically targeted which group?", 
            a: ["Men", "Women", "LGBTQ+ Community", "Children"], 
            correct: 2 
        },
        { 
            q: "Which prominent Filipina beauty queen became a suffragist leader?", 
            a: ["Pura Villanueva Kalaw", "Imelda Marcos", "Gloria Arroyo", "Leonor Rivera"], 
            correct: 0 
        }
    ]
};

// --- QUIZ LOGIC VARIABLES ---
let currentDifficulty = 'easy';
let currentQuestionIndex = 0;
let score = 0;

// --- INITIALIZATION ---
// This ensures the Start buttons in quiz.html work
// No window.onload needed because we use onclick in HTML

// --- START QUIZ FUNCTION ---
function startQuiz(difficulty) {
    currentDifficulty = difficulty;
    currentQuestionIndex = 0;
    score = 0;
    
    // Hide Menu, Show Quiz Interface
    const menu = document.getElementById('menu');
    const interface = document.getElementById('quiz-interface');
    const categoryTitle = document.getElementById('category-title');
    
    if (menu && interface && categoryTitle) {
        menu.style.display = 'none';
        interface.classList.add('active');
        categoryTitle.innerText = difficulty.toUpperCase() + " CATEGORY";
        loadQuestion();
    } else {
        console.error("Quiz elements not found. Check HTML IDs.");
    }
}

// --- LOAD QUESTION FUNCTION ---
function loadQuestion() {
    const qData = quizData[currentDifficulty][currentQuestionIndex];
    
    // Update Text
    document.getElementById('question-text').innerText = qData.q;
    document.getElementById('current-q-num').innerText = currentQuestionIndex + 1;
    
    // Generate Options
    const optionsDiv = document.getElementById('options-container');
    optionsDiv.innerHTML = ''; // Clear previous buttons

    qData.a.forEach((optionText, index) => {
        const btn = document.createElement('button');
        btn.innerText = optionText;
        btn.classList.add('option-btn');
        btn.onclick = () => checkAnswer(index, qData.correct, btn);
        optionsDiv.appendChild(btn);
    });
}

// --- CHECK ANSWER FUNCTION ---
function checkAnswer(selectedIndex, correctIndex, btnElement) {
    // Disable all buttons to prevent double clicking
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(btn => btn.disabled = true);

    if(selectedIndex === correctIndex) {
        btnElement.classList.add('correct');
        score++;
    } else {
        btnElement.classList.add('wrong');
        // Highlight the correct answer for learning
        allBtns[correctIndex].classList.add('correct');
    }

    // Wait 1 second, then go to next question
    setTimeout(() => {
        currentQuestionIndex++;
        // Check if there are more questions (Limit is 10 per category)
        if(currentQuestionIndex < 10) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

// --- SHOW RESULTS FUNCTION ---
function showResults() {
    document.getElementById('quiz-interface').classList.remove('active');
    document.getElementById('result-interface').classList.add('active');
    
    const scoreSpan = document.getElementById('score');
    const feedbackMsg = document.getElementById('feedback-msg');
    
    scoreSpan.innerText = score;
    
    let msg = "";
    if(score === 10) {
        msg = "Perfect Score! You are a Gender & Society Expert! 🌟";
    } else if(score > 7) {
        msg = "Great job! You really know your history. 👍";
    } else if (score > 4) {
        msg = "Good effort! Check the Resources page to learn more. 📚";
    } else {
        msg = "Keep learning! Gender studies is a vast topic. 💪";
    }
    
    feedbackMsg.innerText = msg;
}
