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

// Tədqiqatçı paneli üçün təyin edilmiş şifrə
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
        const password = prompt("Tədqiqatçı panelinə daxil olmaq üçün şifrəni daxil edin:");
        if (password === null) return;
        
        if (password === ADMIN_PASSWORD) {
            renderAdminDashboard();
            showStep('step-admin');
        } else {
            alert("❌ Yanlış şifrə! Bu panelə yalnız tədqiqatçı daxil ola bilər.");
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
    document.getElementById('quiz-progress-text').innerText = `Sual ${currentQuestionIdx + 1} / ${questions.length}`;
    document.getElementById('quiz-difficulty-tag').innerText = `Səviyyə: ${q.level}`;
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
    document.getElementById('res-actual').innerText = `${actualLevel} (${score}/10 xal)`;

    const emojiEl = document.getElementById('res-reaction-emoji');
    const titleEl = document.getElementById('res-reaction-title');
    const box = document.getElementById('res-analysis-box');

    if (score >= 8) {
        emojiEl.innerText = "🏆";
        titleEl.innerText = "Möhtəşəm Nəticə!";
        box.className = "p-5 rounded-xl mb-6 max-w-lg mx-auto text-sm bg-emerald-50 text-emerald-900 border border-emerald-200 text-left";
        box.innerHTML = `
            <div class="font-bold text-base mb-1 text-emerald-800">🌟 Əla iş çıxardın!</div>
            <p class="mb-2">İngilis dili bilikləriniz və qrammatika bacarığınız çox yüksək səviyyədədir.</p>
            <div class="text-xs italic text-emerald-700 bg-emerald-100/60 p-2.5 rounded-lg">💡 <strong>Motivasiya:</strong> "Uğur təsadüf deyil, davamlı əziyyətin nəticəsidir. Bu templə davam et!"</div>
        `;
    } else if (score >= 5) {
        emojiEl.innerText = "🎯";
        titleEl.innerText = "Yaxşı Nəticədir!";
        box.className = "p-5 rounded-xl mb-6 max-w-lg mx-auto text-sm bg-amber-50 text-amber-900 border border-amber-200 text-left";
        box.innerHTML = `
            <div class="font-bold text-base mb-1 text-amber-800">💪 Pis deyil, potensialın var!</div>
            <p class="mb-2">Baza biliklərin yerindədir, ancaq daha da irəliyə getmək üçün kiçik təkmilləşdirmələrə ehtiyacın var.</p>
            <div class="text-xs italic text-amber-700 bg-amber-100/60 p-2.5 rounded-lg">💡 <strong>Motivasiya:</strong> "Hər səhv öyrənmək üçün bir addımdır. Zəif tərəflərini gücləndirərək daha da yaxşı ola bilərsən!"</div>
        `;
    } else {
        emojiEl.innerText = "🌱";
        titleEl.innerText = "Hələ başlanğıcdasan!";
        box.className = "p-5 rounded-xl mb-6 max-w-lg mx-auto text-sm bg-indigo-50 text-indigo-900 border border-indigo-200 text-left";
        box.innerHTML = `
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
        tbody.innerHTML = `<tr><td colspan="6" class="p-6 text-center text-slate-400">Məlumat yoxdur.</td></tr>`;
        return;
    }

    filtered.reverse().forEach((item, index) => {
        let badge = item.status === 'ACCURATE' ? `<span class="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold">Dəqiq</span>` :
                    item.status === 'OVERESTIMATED' ? `<span class="bg-amber-100 text-amber-800 text-xs px-2.5 py-1 rounded-full font-semibold">Yüksək</span>` :
                    `<span class="bg-indigo-100 text-indigo-800 text-xs px-2.5 py-1 rounded-full font-semibold">Aşağı</span>`;

        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-50 transition-all";
        tr.innerHTML = `
            <td class="p-4 font-medium text-slate-400">${filtered.length - index}</td>
            <td class="p-4 text-xs text-slate-500">${item.date}</td>
            <td class="p-4 font-semibold text-slate-800">${item.age}</td>
            <td class="p-4"><span class="font-bold text-slate-700">${item.perceived}</span></td>
            <td class="p-4"><span class="font-bold text-indigo-600">${item.actual}</span> (${item.score}/10)</td>
            <td class="p-4">${badge}</td>
        `;
        tbody.appendChild(tr);
    });
}

function exportToCSV() {
    const data = JSON.parse(localStorage.getItem('research_data') || '[]');
    if (data.length === 0) return alert('Məlumat yoxdur.');
    let csvContent = "data:text/csv;charset=utf-8,ID,Tarix,Yash,Texmin,Real,Xal,Status\n";
    data.forEach(r => csvContent += `${r.id},${r.date},${r.age},${r.perceived},${r.actual},${r.score},${r.status}\n`);
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", `tedqiqat_neticeleri.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function clearData() {
    if (confirm('Məlumatlar silinsin?')) {
        localStorage.removeItem('research_data');
        renderAdminDashboard();
    }
}
