const translations = {
    az: {
        pageTitle: "İngilis Dili Bilik Səviyyəsi Tədqiqatı",
        headerSubtitle: "Sosial-Dilçilik Tədqiqatı Project",
        adminBtn: "Tədqiqatçı Paneli",
        setupBadge: "Anonim Sorğu & Test",
        setupHeading: "İngilis dili biliyinizi test edin",
        setupDesc: "Bu tədqiqat müxtəlif yaş qruplarının ingilis dili üzrə özünə inamı ilə real bilik səviyyəsi arasındakı fərqi ölçmək üçündür.",
        labelAge: "1. Yaş qrupunuz",
        optDefaultAge: "Yaş aralığını seçin",
        labelPerceived: "2. Sizcə İngilis dili səviyyəniz hansıdır?",
        descA1: "Başlanğıc", descA2: "Sadə", descB1: "Orta", descB2: "Yüksək Orta", descC1: "İrəli", descC2: "Ana Dili",
        startBtn: "10 Suallıq Testə Başla",
        nextBtn: "Növbəti",
        resTitle: "Test Yekunlaşdı!",
        resSub: "Məlumatlarınız tədqiqat bazasına uğurla yazıldı.",
        lblPerceived: "Düşündüyünüz",
        lblActual: "Real Səviyyə",
        contactBtn: "Mənimlə Əlaqə Saxla",
        restartBtn: "Yenidən Başla",
        adminTitle: "Tədqiqatçı Paneli",
        csvBtn: "CSV Yüklə",
        clearBtn: "Sıfırla",
        statTotal: "Ümumi", statMatch: "Dəqiq Təxmin", statOver: "Yüksək Zənn", statUnder: "Aşağı Zənn",
        tableTitle: "Cədvəl",
        optAllAges: "Bütün Yaşlar", optAllStatuses: "Bütün Statuslar",
        optStatusOver: "Yüksək", optStatusAcc: "Dəqiq", optStatusUnd: "Aşağı",
        thDate: "Tarix", thAge: "Yaş", thPerceived: "Təxmin", thActual: "Real", thStatus: "Status"
    },
    ru: {
        pageTitle: "Исследование уровня владения английским языком",
        headerSubtitle: "Социально-лингвистический проект",
        adminBtn: "Панель исследователя",
        setupBadge: "Анонимный опрос и тест",
        setupHeading: "Проверьте свой уровень английского",
        setupDesc: "Это исследование направлено на измерение разрыва между уверенностью разных возрастных групп в английском и их реальным уровнем знаний.",
        labelAge: "1. Ваша возрастная группа",
        optDefaultAge: "Выберите возраст",
        labelPerceived: "2. Каков ваш уровень английского (по вашему мнению)?",
        descA1: "Начальный", descA2: "Элементарный", descB1: "Средний", descB2: "Выше среднего", descC1: "Продвинутый", descC2: "Родной",
        startBtn: "Начать тест (10 вопросов)",
        nextBtn: "Далее",
        resTitle: "Тест завершен!",
        resSub: "Ваши данные успешно записаны в базу исследования.",
        lblPerceived: "Ваша оценка",
        lblActual: "Реальный уровень",
        contactBtn: "Связаться со мной",
        restartBtn: "Пройти снова",
        adminTitle: "Панель исследователя",
        csvBtn: "Скачать CSV",
        clearBtn: "Сбросить",
        statTotal: "Всего", statMatch: "Точно", statOver: "Завышено", statUnder: "Занижено",
        tableTitle: "Таблица данных",
        optAllAges: "Все возрасты", optAllStatuses: "Все статусы",
        optStatusOver: "Завышено", optStatusAcc: "Точно", optStatusUnd: "Занижено",
        thDate: "Дата", thAge: "Возраст", thPerceived: "Оценка", thActual: "Реальный", thStatus: "Статус"
    },
    en: {
        pageTitle: "English Proficiency Research",
        headerSubtitle: "Socio-Linguistic Research Project",
        adminBtn: "Researcher Panel",
        setupBadge: "Anonymous Survey & Test",
        setupHeading: "Test your English proficiency",
        setupDesc: "This study measures the gap between different age groups' perceived confidence in English and their actual skill level.",
        labelAge: "1. Your Age Group",
        optDefaultAge: "Select age range",
        labelPerceived: "2. What is your perceived English level?",
        descA1: "Beginner", descA2: "Elementary", descB1: "Intermediate", descB2: "Upper-Intermediate", descC1: "Advanced", descC2: "Native",
        startBtn: "Start 10-Question Test",
        nextBtn: "Next",
        resTitle: "Test Completed!",
        resSub: "Your data has been successfully recorded in the research database.",
        lblPerceived: "Your Estimate",
        lblActual: "Actual Level",
        contactBtn: "Contact Me",
        restartBtn: "Start Over",
        adminTitle: "Researcher Panel",
        csvBtn: "Download CSV",
        clearBtn: "Reset",
        statTotal: "Total", statMatch: "Accurate", statOver: "Overestimated", statUnder: "Underestimated",
        tableTitle: "Records Table",
        optAllAges: "All Ages", optAllStatuses: "All Statuses",
        optStatusOver: "Overestimated", optStatusAcc: "Accurate", optStatusUnd: "Underestimated",
        thDate: "Date", thAge: "Age", thPerceived: "Estimate", thActual: "Actual", thStatus: "Status"
    }
};

let currentLang = 'az';

function changeLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.getElementById('page-title').innerText = t.pageTitle;
    document.getElementById('header-subtitle').innerText = t.headerSubtitle;
    document.getElementById('admin-btn-text').innerText = t.adminBtn;
    document.getElementById('setup-badge').innerText = t.setupBadge;
    document.getElementById('setup-heading').innerText = t.setupHeading;
    document.getElementById('setup-desc').innerText = t.setupDesc;
    document.getElementById('label-age').innerText = t.labelAge;
    document.getElementById('opt-default-age').innerText = t.optDefaultAge;
    document.getElementById('label-perceived').innerText = t.labelPerceived;
    
    document.getElementById('desc-a1').innerText = t.descA1;
    document.getElementById('desc-a2').innerText = t.descA2;
    document.getElementById('desc-b1').innerText = t.descB1;
    document.getElementById('desc-b2').innerText = t.descB2;
    document.getElementById('desc-c1').innerText = t.descC1;
    document.getElementById('desc-c2').innerText = t.descC2;
    
    document.getElementById('start-btn').innerText = t.startBtn;
    document.getElementById('next-btn').innerText = t.nextBtn;
    document.getElementById('res-reaction-title').innerText = t.resTitle;
    document.getElementById('res-subtitle').innerText = t.resSub;
    document.getElementById('res-label-perceived').innerText = t.lblPerceived;
    document.getElementById('res-label-actual').innerText = t.lblActual;
    document.getElementById('contact-btn-text').innerText = t.contactBtn;
    document.getElementById('restart-btn').innerText = t.restartBtn;
    
    document.getElementById('admin-panel-title').innerText = t.adminTitle;
    document.getElementById('csv-btn').innerText = t.csvBtn;
    document.getElementById('clear-btn').innerText = t.clearBtn;
    document.getElementById('stat-lbl-total').innerText = t.statTotal;
    document.getElementById('stat-lbl-match').innerText = t.statMatch;
    document.getElementById('stat-lbl-over').innerText = t.statOver;
    document.getElementById('stat-lbl-under').innerText = t.statUnder;
    document.getElementById('admin-table-title').innerText = t.tableTitle;
    document.getElementById('opt-all-ages').innerText = t.optAllAges;
    document.getElementById('opt-all-statuses').innerText = t.optAllStatuses;
    document.getElementById('opt-status-over').innerText = t.optStatusOver;
    document.getElementById('opt-status-acc').innerText = t.optStatusAcc;
    document.getElementById('opt-status-und').innerText = t.optStatusUnd;
    
    document.getElementById('th-date').innerText = t.thDate;
    document.getElementById('th-age').innerText = t.thAge;
    document.getElementById('th-perceived').innerText = t.thPerceived;
    document.getElementById('th-actual').innerText = t.thActual;
    document.getElementById('th-status').innerText = t.thStatus;
}

const questions = [
    { id: 1, level: 'A1', question: "She _____ to school every day.", options: ["go", "goes", "going", "gone"], correct: 1 },
    { id: 2, level: 'A1', question: "_____ there any milk left in the fridge?", options: ["Is", "Are", "Do", "Have"], correct: 0 },
    { id: 3, level: 'A2', question: "Yesterday, we _____ a really interesting movie.", options: ["watch", "have watched", "watched", "were watching"], correct: 2 },
    { id: 4, level: 'A2', question: "If it rains tomorrow, we _____ home.", options: ["stayed", "will stay", "stay", "would stay"], correct: 1 },
    { id: 5, level: 'B1', question: "I haven't seen my cousin _____ 2018.", options: ["for", "since", "during", "from"], correct: 1 },
    { id: 6, level: 'B1', question: "He asked me where I _____ the previous night.", options: ["had gone", "went", "have gone", "was go"], correct: 0 },
    { id: 7, level: 'B2', question: "Despite _____ hard, he failed to achieve the target.", options: ["to work", "he worked", "working", "work"], correct: 2 },
    { id: 8, level: 'B2', question: "Hardly _____ entered the room when the lights went out.", options: ["I had", "had I", "did I", "I have"], correct: 1 },
    { id: 9, level: 'C1', question: "The proposal was rejected on the _____ that it was too expensive.", options: ["grounds", "reasons", "causes", "motives"], correct: 0 },
    { id: 10, level: 'C1', question: "She is meticulous _____ keeping her files organized.", options: ["with", "about", "in", "at"], correct: 1 }
];

const levelOrder = { 'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1': 5, 'C2': 6 };
let currentUser = { age: '', perceivedLevel: '' };
let currentQuestionIdx = 0;
let selectedOptionIdx = null;
let userAnswers = [];

const ADMIN_PASSWORD = "k1z2k3z4k5"; 

window.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initSeedData();
});

function initSeedData() {
    if (!localStorage.getItem('research_data')) {
        const sampleData = [
            { id: 1, date: '2026-11-01 10:15', age: '10-20', perceived: 'B2', actual: 'B1', score: 6, status: 'OVERESTIMATED' },
            { id: 2, date: '2026-11-01 11:30', age: '20-30', perceived: 'B1', actual: 'B1', score: 6, status: 'ACCURATE' }
        ];
        localStorage.setItem('research_data', JSON.stringify(sampleData));
    }
}

function showStep(stepId) {
    ['step-setup', 'step-quiz', 'step-result', 'step-admin'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(stepId).classList.remove('hidden');
    lucide.createIcons();
}

function goHome() {
    currentQuestionIdx = 0;
    selectedOptionIdx = null;
    userAnswers = [];
    document.getElementById('setup-form').reset();
    showStep('step-setup');
}

function toggleAdminPanel() {
    const adminStep = document.getElementById('step-admin');
    if (adminStep.classList.contains('hidden')) {
        const password = prompt(currentLang === 'ru' ? "Введите пароль исследователя:" : currentLang === 'en' ? "Enter researcher password:" : "Tədqiqatçı panelinə daxil olmaq üçün şifrəni daxil edin:");
        if (password === null) return;
        
        if (password === ADMIN_PASSWORD) {
            renderAdminDashboard();
            showStep('step-admin');
        } else {
            alert(currentLang === 'ru' ? "❌ Неверный пароль!" : currentLang === 'en' ? "❌ Incorrect password!" : "❌ Yanlış şifrə!");
        }
    } else {
        goHome();
    }
}

function startQuiz(e) {
    e.preventDefault();
    const age = document.getElementById('user-age').value;
    const perceived = document.querySelector('input[name="perceived-level"]:checked').value;
    currentUser = { age, perceivedLevel: perceived };
    currentQuestionIdx = 0;
    userAnswers = [];
    showStep('step-quiz');
    loadQuestion();
}

function loadQuestion() {
    const q = questions[currentQuestionIdx];
    selectedOptionIdx = null;
    
    let levelText = currentLang === 'ru' ? "Уровень" : currentLang === 'en' ? "Level" : "Səviyyə";
    let questionTextLabel = currentLang === 'ru' ? "Вопрос" : currentLang === 'en' ? "Question" : "Sual";

    document.getElementById('quiz-progress-text').innerText = `${questionTextLabel} ${currentQuestionIdx + 1} / ${questions.length}`;
    document.getElementById('quiz-difficulty-tag').innerText = `${levelText}: ${q.level}`;
    document.getElementById('quiz-progress-bar').style.width = `${((currentQuestionIdx + 1) / questions.length) * 100}%`;
    document.getElementById('question-text').innerText = `${currentQuestionIdx + 1}. ${q.question}`;
    
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = `w-full text-left p-4 rounded-xl border-2 border-slate-200 hover:border-indigo-400 bg-slate-50 font-medium text-slate-700 transition-all flex justify-between items-center`;
        btn.innerHTML = `<span>${opt}</span><span class="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-xs text-transparent check-icon">✓</span>`;
        btn.onclick = () => selectOption(idx, btn);
        container.appendChild(btn);
    });
    document.getElementById('next-btn').disabled = true;
}

function selectOption(idx, btnElement) {
    selectedOptionIdx = idx;
    const allBtns = document.getElementById('options-container').children;
    for (let b of allBtns) {
        b.classList.remove('border-indigo-600', 'bg-indigo-50/50');
        b.querySelector('.check-icon').classList.remove('bg-indigo-600', 'text-white', 'border-indigo-600');
    }
    btnElement.classList.add('border-indigo-600', 'bg-indigo-50/50');
    btnElement.querySelector('.check-icon').classList.add('bg-indigo-600', 'text-white', 'border-indigo-600');
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    if (selectedOptionIdx === null) return;
    userAnswers.push({ questionId: questions[currentQuestionIdx].id, selected: selectedOptionIdx, isCorrect: selectedOptionIdx === questions[currentQuestionIdx].correct });
    currentQuestionIdx++;
    if (currentQuestionIdx < questions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function calculateActualLevel(score) {
    if (score <= 2) return 'A1';
    if (score <= 4) return 'A2';
    if (score <= 6) return 'B1';
    if (score <= 8) return 'B2';
    return 'C1';
}

function finishQuiz() {
    const score = userAnswers.filter(a => a.isCorrect).length;
    const actualLevel = calculateActualLevel(score);
    const pRank = levelOrder[currentUser.perceivedLevel];
    const aRank = levelOrder[actualLevel];

    let status = 'ACCURATE';
    if (pRank > aRank) status = 'OVERESTIMATED';
    if (pRank < aRank) status = 'UNDERESTIMATED';

    const now = new Date();
    const dateStr = now.toISOString().split('T')[0] + ' ' + now.toTimeString().split(' ')[0].substring(0,5);
    
    const newEntry = { id: Date.now(), date: dateStr, age: currentUser.age, perceived: currentUser.perceivedLevel, actual: actualLevel, score: score, status: status };
    const data = JSON.parse(localStorage.getItem('research_data') || '[]');
    data.push(newEntry);
    localStorage.setItem('research_data', JSON.stringify(data));

    document.getElementById('res-perceived').innerText = currentUser.perceivedLevel;
    
    let scoreText = currentLang === 'ru' ? "балл" : currentLang === 'en' ? "score" : "xal";
    document.getElementById('res-actual').innerText = `${actualLevel} (${score}/10 ${scoreText})`;

    const emojiEl = document.getElementById('res-reaction-emoji');
    const titleEl = document.getElementById('res-reaction-title');
    const box = document.getElementById('res-analysis-box');

    if (score >= 8) {
        emojiEl.innerText = "🏆";
        titleEl.innerText = currentLang === 'ru' ? "Великолепный результат!" : currentLang === 'en' ? "Amazing Result!" : "Möhtəşəm Nəticə!";
        box.className = "p-5 rounded-xl mb-6 max-w-lg mx-auto text-sm bg-emerald-50 text-emerald-900 border border-emerald-200 text-left";
        box.innerHTML = currentLang === 'ru' ? `
            <div class="font-bold text-base mb-1 text-emerald-800">🌟 Отличная работа!</div>
            <p class="mb-2">Ваши знания английского языка и грамматики на очень высоком уровне.</p>
            <div class="text-xs italic text-emerald-700 bg-emerald-100/60 p-2.5 rounded-lg">💡 <strong>Мотивация:</strong> "Успех — это результат постоянных усилий. Продолжайте в том же духе!"</div>
        ` : currentLang === 'en' ? `
            <div class="font-bold text-base mb-1 text-emerald-800">🌟 Great job!</div>
            <p class="mb-2">Your English language and grammar skills are at a very high level.</p>
            <div class="text-xs italic text-emerald-700 bg-emerald-100/60 p-2.5 rounded-lg">💡 <strong>Motivation:</strong> "Success is the product of daily habits. Keep up the great work!"</div>
        ` : `
            <div class="font-bold text-base mb-1 text-emerald-800">🌟 Əla iş çıxardın!</div>
            <p class="mb-2">İngilis dili bilikləriniz və qrammatika bacarığınız çox yüksək səviyyədədir.</p>
            <div class="text-xs italic text-emerald-700 bg-emerald-100/60 p-2.5 rounded-lg">💡 <strong>Motivasiya:</strong> "Uğur təsadüf deyil, davamlı əziyyətin nəticəsidir. Bu templə davam et!"</div>
        `;
    } else if (score >= 5) {
        emojiEl.innerText = "🎯";
        titleEl.innerText = currentLang === 'ru' ? "Хороший результат!" : currentLang === 'en' ? "Good Result!" : "Yaxşı Nəticədir!";
        box.className = "p-5 rounded-xl mb-6 max-w-lg mx-auto text-sm bg-amber-50 text-amber-900 border border-amber-200 text-left";
        box.innerHTML = currentLang === 'ru' ? `
            <div class="font-bold text-base mb-1 text-amber-800">💪 Неплохо, у вас есть потенциал!</div>
            <p class="mb-2">Базовые знания на месте, но для дальнейшего роста нужны небольшие улучшения.</p>
            <div class="text-xs italic text-amber-700 bg-amber-100/60 p-2.5 rounded-lg">💡 <strong>Мотивация:</strong> "Каждая ошибка — это шаг к обучению. Вы можете стать еще лучше!"</div>
        ` : currentLang === 'en' ? `
            <div class="font-bold text-base mb-1 text-amber-800">💪 Not bad, great potential!</div>
            <p class="mb-2">Your foundation is solid, but a bit more practice will take you to the next level.</p>
            <div class="text-xs italic text-amber-700 bg-amber-100/60 p-2.5 rounded-lg">💡 <strong>Motivation:</strong> "Every mistake is a learning step. Keep pushing forward!"</div>
        ` : `
            <div class="font-bold text-base mb-1 text-amber-800">💪 Pis deyil, potensialın var!</div>
            <p class="mb-2">Baza biliklərin yerindədir, ancaq daha da irəliyə getmək üçün kiçik təkmilləşdirmələrə ehtiyacın var.</p>
            <div class="text-xs italic text-amber-700 bg-amber-100/60 p-2.5 rounded-lg">💡 <strong>Motivasiya:</strong> "Hər səhv öyrənmək üçün bir addımdır. Zəif tərəflərini gücləndirərək daha da yaxşı ola bilərsən!"</div>
        `;
    } else {
        emojiEl.innerText = "🌱";
        titleEl.innerText = currentLang === 'ru' ? "Это только начало!" : currentLang === 'en' ? "Just the Beginning!" : "Hələ başlanğıcdasan!";
        box.className = "p-5 rounded-xl mb-6 max-w-lg mx-auto text-sm bg-indigo-50 text-indigo-900 border border-indigo-200 text-left";
        box.innerHTML = currentLang === 'ru' ? `
            <div class="font-bold text-base mb-1 text-indigo-800">🚀 Учиться никогда не поздно!</div>
            <p class="mb-2">Этот тест — только старт. Регулярная практика поможет вам быстро улучшить уровень.</p>
            <div class="text-xs italic text-indigo-700 bg-indigo-100/60 p-2.5 rounded-lg">💡 <strong>Мотивация:</strong> "Большие достижения начинаются с малых шагов. Никогда не сдавайтесь!"</div>
        ` : currentLang === 'en' ? `
            <div class="font-bold text-base mb-1 text-indigo-800">🚀 It's never too late to learn!</div>
            <p class="mb-2">This test is just a starting point. Regular practice will boost your level quickly.</p>
            <div class="text-xs italic text-indigo-700 bg-indigo-100/60 p-2.5 rounded-lg">💡 <strong>Motivation:</strong> "Great achievements start with small steps. Never give up!"</div>
        ` : `
            <div class="font-bold text-base mb-1 text-indigo-800">🚀 Öyrənmək heç vaxt gec deyil!</div>
            <p class="mb-2">Bu test sadəcə başlanğıcdır. Müntəzəm məşq və oxumaqla səviyyəni sürətlə qaldıra bilərsən.</p>
            <div class="text-xs italic text-indigo-700 bg-indigo-100/60 p-2.5 rounded-lg">💡 <strong>Motivasiya:</strong> "Böyük nailiyyətlər kiçik addımlarla başlayır. Çalışmaqdan əsla vaz keçmə!"</div>
        `;
    }

    showStep('step-result');
}

function renderAdminDashboard() {
    renderAdminTable();
}

function renderAdminTable() {
    const data = JSON.parse(localStorage.getItem('research_data') || '[]');
    const ageFilter = document.getElementById('filter-age').value;
    const statusFilter = document.getElementById('filter-status').value;

    let filtered = data.filter(item => {
        return (ageFilter === 'ALL' || item.age === ageFilter) && (statusFilter === 'ALL' || item.status === statusFilter);
    });

    const total = data.length;
    if (total > 0) {
        document.getElementById('stat-total').innerText = total;
        document.getElementById('stat-match').innerText = `${Math.round((data.filter(d => d.status === 'ACCURATE').length / total) * 100)}%`;
        document.getElementById('stat-over').innerText = `${Math.round((data.filter(d => d.status === 'OVERESTIMATED').length / total) * 100)}%`;
        document.getElementById('stat-under').innerText = `${Math.round((data.filter(d => d.status === 'UNDERESTIMATED').length / total) * 100)}%`;
    }

    const tbody = document.getElementById('admin-table-body');
    tbody.innerHTML = '';
    if (filtered.length === 0) {
        let noDataText = currentLang === 'ru' ? "Нет данных" : currentLang === 'en' ? "No data" : "Məlumat yoxdur.";
        tbody.innerHTML = `<tr><td colspan="6" class="p-6 text-center text-slate-400">${noDataText}</td></tr>`;
        return;
    }

    filtered.reverse().forEach((item, index) => {
        let statusTextAcc = currentLang === 'ru' ? "Точно" : currentLang === 'en' ? "Accurate" : "Dəqiq";
        let statusTextOver = currentLang === 'ru' ? "Высоко" : currentLang === 'en' ? "Over" : "Yüksək";
        let statusTextUnd = currentLang === 'ru' ? "Низко" : currentLang === 'en' ? "Under" : "Aşağı";

        let badge = item.status === 'ACCURATE' ? `<span class="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold">${statusTextAcc}</span>` :
                    item.status === 'OVERESTIMATED' ? `<span class="bg-amber-100 text-amber-800 text-xs px-2.5 py-1 rounded-full font-semibold">${statusTextOver}</span>` :
                    `<span class="bg-indigo-100 text-indigo-800 text-xs px-2.5 py-1 rounded-full font-semibold">${statusTextUnd}</span>`;

        let scoreText = currentLang === 'ru' ? "балл" : currentLang === 'en' ? "score" : "xal";
        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-50 transition-all";
        tr.innerHTML = `
            <td class="p-4 font-medium text-slate-400">${filtered.length - index}</td>
            <td class="p-4 text-xs text-slate-500">${item.date}</td>
            <td class="p-4 font-semibold text-slate-800">${item.age}</td>
            <td class="p-4"><span class="font-bold text-slate-700">${item.perceived}</span></td>
            <td class="p-4"><span class="font-bold text-indigo-600">${item.actual}</span> (${item.score}/10 ${scoreText})</td>
            <td class="p-4">${badge}</td>
        `;
        tbody.appendChild(tr);
    });
}

function exportToCSV() {
    const data = JSON.parse(localStorage.getItem('research_data') || '[]');
    if (data.length === 0) {
        alert(currentLang === 'ru' ? "Нет данных." : currentLang === 'en' ? "No data available." : "Məlumat yoxdur.");
        return;
    }
    let csvContent = "data:text/csv;charset=utf-8,ID,Date,Age,Perceived,Actual,Score,Status\n";
    data.forEach(r => csvContent += `${r.id},${r.date},${r.age},${r.perceived},${r.actual},${r.score},${r.status}\n`);
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", `tedqiqat_neticeleri.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function clearData() {
    let confirmText = currentLang === 'ru' ? "Удалить все данные?" : currentLang === 'en' ? "Delete all data?" : "Məlumatlar silinsin?";
    if (confirm(confirmText)) {
        localStorage.removeItem('research_data');
        renderAdminDashboard();
    }
}
