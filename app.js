// ===== DATA =====
const EXERCISES = {
  push: [
    { name: 'Barbell Bench Press', sets: 4, reps: '8–10', rest: '90s', muscle: 'Chest', img: 'img/bench-press.svg' },
    { name: 'Incline Dumbbell Press', sets: 3, reps: '10–12', rest: '75s', muscle: 'Upper Chest', img: 'img/incline-press.svg' },
    { name: 'Shoulder Press (DB)', sets: 3, reps: '10–12', rest: '75s', muscle: 'Shoulders', img: 'img/shoulder-press.svg' },
    { name: 'Lateral Raises', sets: 3, reps: '12–15', rest: '60s', muscle: 'Side Delts', img: 'img/lateral-raise.svg' },
    { name: 'Tricep Rope Pushdown', sets: 3, reps: '12–15', rest: '60s', muscle: 'Triceps', img: 'img/tricep-pushdown.svg' },
    { name: 'Cable Chest Fly', sets: 3, reps: '12–15', rest: '60s', muscle: 'Chest', img: 'img/cable-fly.svg' },
  ],
  pull: [
    { name: 'Pull-Ups / Lat Pulldown', sets: 4, reps: '8–10', rest: '90s', muscle: 'Lats', img: 'img/lat-pulldown.svg' },
    { name: 'Seated Cable Row', sets: 3, reps: '10–12', rest: '75s', muscle: 'Mid Back', img: 'img/cable-row.svg' },
    { name: 'Single Arm DB Row', sets: 3, reps: '10–12', rest: '75s', muscle: 'Lats', img: 'img/db-row.svg' },
    { name: 'Face Pulls', sets: 3, reps: '15', rest: '60s', muscle: 'Rear Delts', img: 'img/face-pull.svg' },
    { name: 'Barbell / DB Curl', sets: 3, reps: '12', rest: '60s', muscle: 'Biceps', img: 'img/barbell-curl.svg' },
    { name: 'Hammer Curls', sets: 3, reps: '12', rest: '60s', muscle: 'Biceps', img: 'img/hammer-curl.svg' },
  ],
  legs: [
    { name: 'Barbell Squat', sets: 4, reps: '8–10', rest: '90s', muscle: 'Quads', img: 'img/squat.svg' },
    { name: 'Romanian Deadlift', sets: 3, reps: '10–12', rest: '90s', muscle: 'Hamstrings', img: 'img/rdl.svg' },
    { name: 'Leg Press', sets: 3, reps: '12–15', rest: '75s', muscle: 'Quads', img: 'img/leg-press.svg' },
    { name: 'Walking Lunges', sets: 3, reps: '12 each', rest: '60s', muscle: 'Quads/Glutes', img: 'img/lunges.svg' },
    { name: 'Plank', sets: 3, reps: '45–60s', rest: '45s', muscle: 'Core', img: 'img/plank.svg' },
    { name: 'Cable Crunch', sets: 3, reps: '15–20', rest: '45s', muscle: 'Abs', img: 'img/cable-crunch.svg' },
    { name: 'Hanging Knee Raise', sets: 3, reps: '15', rest: '45s', muscle: 'Lower Abs', img: 'img/knee-raise.svg' },
  ]
};

const MEALS = [
  { time: '6:30', period: 'AM', name: 'Breakfast', desc: '3 eggs + 60g oats + Greek yogurt\nOR protein smoothie + banana + PB', protein: 39, cals: 475 },
  { time: '12:30', period: 'PM', name: 'Lunch', desc: 'Simmer Eats (gym days)\nHome cooked chicken/turkey (rest days)', protein: 35, cals: 550 },
  { time: '3:30', period: 'PM', name: 'Post-Workout Snack', desc: 'Protein shake + banana\n(gym days only)', protein: 25, cals: 200 },
  { time: '7:00', period: 'PM', name: 'Dinner', desc: 'Simmer Eats — Lean or Standard portion', protein: 35, cals: 550 },
];

const WEEK_SCHEDULE = [
  { day: 'MON', type: 'gym', emoji: '🏋️', badge: 'Push', focus: 'Chest·Shoulders·Triceps' },
  { day: 'TUE', type: 'cardio', emoji: '🚴', badge: 'Cardio', focus: '30 min walk/bike' },
  { day: 'WED', type: 'gym', emoji: '🏋️', badge: 'Pull', focus: 'Back·Biceps' },
  { day: 'THU', type: 'cardio', emoji: '🏃', badge: 'Cardio', focus: '30 min steady' },
  { day: 'FRI', type: 'gym', emoji: '🏋️', badge: 'Legs', focus: 'Squats·Deadlifts·Abs' },
  { day: 'SAT', type: 'active-rest', emoji: '🚶', badge: 'Active', focus: '10k steps + stretch' },
  { day: 'SUN', type: 'full-rest', emoji: '😴', badge: 'Rest', focus: 'Full rest day' },
];

// ===== STORAGE =====
function getData(key, fallback) {
  try {
    const d = localStorage.getItem('lockin_' + key);
    return d ? JSON.parse(d) : fallback;
  } catch { return fallback; }
}

function setData(key, val) {
  localStorage.setItem('lockin_' + key, JSON.stringify(val));
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

// ===== NAV =====
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// ===== WORKOUT TABS =====
document.querySelectorAll('.wtab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.wtab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.workout-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('workout-' + btn.dataset.workout).classList.add('active');
  });
});

// ===== WEEK GRID =====
function renderWeekGrid() {
  const grid = document.getElementById('week-grid');
  const today = new Date().getDay();
  const jsToMon = [6, 0, 1, 2, 3, 4, 5];
  const todayIdx = jsToMon[today];
  const completedDays = getData('completedDays_' + todayStr().slice(0, 7), []);

  grid.innerHTML = WEEK_SCHEDULE.map((d, i) => {
    const isToday = i === todayIdx;
    const isDone = completedDays.includes(i);
    return `
      <div class="day-card ${d.type} ${isToday ? 'today' : ''} ${isDone ? 'done' : ''}"
           onclick="toggleDayComplete(${i})">
        <div class="day-emoji">${d.emoji}</div>
        <div class="day-name">${d.day}</div>
        <div class="day-badge">${d.badge}</div>
      </div>`;
  }).join('');
}

function toggleDayComplete(dayIdx) {
  const key = 'completedDays_' + todayStr().slice(0, 7);
  let days = getData(key, []);
  if (days.includes(dayIdx)) {
    days = days.filter(d => d !== dayIdx);
  } else {
    days.push(dayIdx);
  }
  setData(key, days);
  renderWeekGrid();
  updateHomeStats();
}

// ===== DAILY CHECKLIST =====
function renderChecklist() {
  const el = document.getElementById('daily-checklist');
  const today = new Date().getDay();
  const jsToMon = [6, 0, 1, 2, 3, 4, 5];
  const todayIdx = jsToMon[today];
  const schedule = WEEK_SCHEDULE[todayIdx];

  let items = [
    { id: 'breakfast', text: 'Eat breakfast by 7:00 AM' },
    { id: 'water', text: 'Drink 3–3.5L water' },
    { id: 'creatine', text: 'Take creatine (1 scoop)' },
    { id: 'steps', text: 'Hit 8,000–10,000 steps' },
  ];

  if (schedule.type === 'gym') {
    items.splice(1, 0, { id: 'workout', text: `Complete ${schedule.badge} workout` });
    items.push({ id: 'protein', text: 'Post-workout protein shake' });
  } else if (schedule.type === 'cardio') {
    items.splice(1, 0, { id: 'cardio', text: '30 min cardio session' });
  }

  const checked = getData('checklist_' + todayStr(), []);

  el.innerHTML = items.map(item => {
    const done = checked.includes(item.id);
    return `
      <div class="check-item ${done ? 'checked' : ''}" onclick="toggleCheck('${item.id}')">
        <div class="check-box">${done ? '✓' : ''}</div>
        <div class="check-text">${item.text}</div>
      </div>`;
  }).join('');
}

function toggleCheck(id) {
  const key = 'checklist_' + todayStr();
  let checked = getData(key, []);
  if (checked.includes(id)) {
    checked = checked.filter(c => c !== id);
  } else {
    checked.push(id);
  }
  setData(key, checked);
  renderChecklist();
}

// ===== WORKOUTS =====
function renderWorkouts() {
  Object.keys(EXERCISES).forEach(type => {
    const panel = document.getElementById('workout-' + type);
    const todayLog = getData('workout_' + todayStr() + '_' + type, {});

    panel.innerHTML = EXERCISES[type].map((ex, i) => {
      const logged = todayLog[i] || [];
      const dots = Array.from({ length: ex.sets }, (_, s) =>
        `<div class="ex-dot ${s < logged.length ? 'filled' : ''}"></div>`
      ).join('');

      return `
        <div class="exercise-card" onclick="openExercise('${type}', ${i})">
          <img class="exercise-img" src="${ex.img}" alt="${ex.name}" onerror="this.style.display='none'">
          <div class="exercise-body">
            <div class="ex-info">
              <div class="ex-name">${ex.name}</div>
              <div class="ex-target">${ex.muscle} · ${ex.reps} reps · ${ex.rest} rest</div>
              <div class="ex-progress-dots">${dots}</div>
            </div>
            <div>
              <div class="ex-sets-badge">${logged.length}/${ex.sets}</div>
              <div class="ex-sets-label">sets</div>
            </div>
          </div>
        </div>`;
    }).join('');
  });
}

let currentExercise = null;

function openExercise(type, idx) {
  const ex = EXERCISES[type][idx];
  currentExercise = { type, idx, ex };

  document.getElementById('modal-exercise-name').textContent = ex.name;

  const imgEl = document.getElementById('modal-exercise-img');
  imgEl.innerHTML = `<img src="${ex.img}" alt="${ex.name}" onerror="this.parentElement.innerHTML='<div style=\\'padding:40px;color:var(--muted);font-size:48px\\'>${getMuscleEmoji(ex.muscle)}</div>'">`;

  const todayLog = getData('workout_' + todayStr() + '_' + type, {});
  const logged = todayLog[idx] || [];

  const setsDisplay = document.getElementById('modal-sets-display');
  setsDisplay.innerHTML = Array.from({ length: ex.sets }, (_, s) => {
    const set = logged[s];
    if (set) {
      return `<div class="set-chip logged">
        <div class="set-chip-label">Set ${s + 1}</div>
        <div class="set-chip-val">${set.weight}kg × ${set.reps}</div>
      </div>`;
    }
    return `<div class="set-chip">
      <div class="set-chip-label">Set ${s + 1}</div>
      <div class="set-chip-val">—</div>
    </div>`;
  }).join('');

  const lastWeight = logged.length > 0 ? logged[logged.length - 1].weight : '';
  document.getElementById('modal-weight').value = lastWeight;
  document.getElementById('modal-reps').value = '';

  document.getElementById('set-modal').classList.add('open');
}

function getMuscleEmoji(muscle) {
  const map = {
    'Chest': '🫁', 'Upper Chest': '🫁', 'Shoulders': '🏔️', 'Side Delts': '🏔️',
    'Triceps': '💪', 'Lats': '🦅', 'Mid Back': '🦅', 'Rear Delts': '🎯',
    'Biceps': '💪', 'Quads': '🦵', 'Hamstrings': '🦵', 'Quads/Glutes': '🍑',
    'Core': '🎯', 'Abs': '🎯', 'Lower Abs': '🎯'
  };
  return map[muscle] || '💪';
}

function closeModal() {
  document.getElementById('set-modal').classList.remove('open');
  currentExercise = null;
}

function logSet() {
  if (!currentExercise) return;
  const weight = parseFloat(document.getElementById('modal-weight').value) || 0;
  const reps = parseInt(document.getElementById('modal-reps').value) || 0;
  if (reps === 0) return;

  const { type, idx, ex } = currentExercise;
  const key = 'workout_' + todayStr() + '_' + type;
  const todayLog = getData(key, {});
  const logged = todayLog[idx] || [];

  if (logged.length >= ex.sets) return;

  logged.push({ weight, reps });
  todayLog[idx] = logged;
  setData(key, todayLog);

  openExercise(type, idx);
  renderWorkouts();
  updateHomeStats();
}

// ===== MEALS =====
function renderMeals() {
  const el = document.getElementById('meals-list');
  const eaten = getData('meals_' + todayStr(), []);

  el.innerHTML = MEALS.map((m, i) => {
    const isEaten = eaten.includes(i);
    return `
      <div class="meal-card ${isEaten ? 'eaten' : ''}" onclick="toggleMeal(${i})">
        <div class="meal-time">${m.time}<br><span style="font-size:12px;color:var(--muted)">${m.period}</span></div>
        <div class="meal-info">
          <div class="meal-name">${m.name}</div>
          <div class="meal-desc">${m.desc.replace(/\n/g, '<br>')}</div>
          <span class="meal-macro">~${m.protein}g protein · ${m.cals} kcal</span>
        </div>
      </div>`;
  }).join('');

  updateMealMacros();
}

function toggleMeal(idx) {
  const key = 'meals_' + todayStr();
  let eaten = getData(key, []);
  if (eaten.includes(idx)) {
    eaten = eaten.filter(e => e !== idx);
  } else {
    eaten.push(idx);
  }
  setData(key, eaten);
  renderMeals();
}

function updateMealMacros() {
  const eaten = getData('meals_' + todayStr(), []);
  let totalCals = 0, totalProtein = 0;
  eaten.forEach(i => {
    totalCals += MEALS[i].cals;
    totalProtein += MEALS[i].protein;
  });
  document.getElementById('cals-eaten').textContent = totalCals;
  document.getElementById('protein-eaten').textContent = totalProtein;

  const water = getData('water_' + todayStr(), 0);
  document.getElementById('water-drunk').textContent = water.toFixed(1);
}

// ===== WATER =====
function addWater(amount) {
  const key = 'water_' + todayStr();
  let current = getData(key, 0);
  current = Math.min(current + amount, 5);
  setData(key, current);
  updateWater();
}

function resetWater() {
  setData('water_' + todayStr(), 0);
  updateWater();
}

function updateWater() {
  const water = getData('water_' + todayStr(), 0);
  document.getElementById('water-display').textContent = `${water.toFixed(1)} / 3.5L`;
  document.getElementById('water-bar').style.width = `${Math.min((water / 3.5) * 100, 100)}%`;
  document.getElementById('water-drunk').textContent = water.toFixed(1);
}

// ===== PROGRESS =====
function logWeight() {
  const input = document.getElementById('weight-input');
  const weight = parseFloat(input.value);
  if (!weight || weight < 50 || weight > 200) return;

  let history = getData('weightHistory', []);
  const existing = history.findIndex(h => h.date === todayStr());
  if (existing >= 0) {
    history[existing].weight = weight;
  } else {
    history.push({ date: todayStr(), weight });
  }
  history.sort((a, b) => a.date.localeCompare(b.date));
  setData('weightHistory', history);
  input.value = '';
  renderProgress();
  updateHomeStats();
}

function renderProgress() {
  const history = getData('weightHistory', []);

  const listEl = document.getElementById('weight-history');
  listEl.innerHTML = history.slice().reverse().slice(0, 20).map(h => {
    const d = new Date(h.date);
    const label = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    return `<div class="history-item">
      <span class="history-date">${label}</span>
      <span class="history-val">${h.weight} kg</span>
    </div>`;
  }).join('');

  drawChart(history);
  renderWorkoutHistory();
}

function drawChart(history) {
  const canvas = document.getElementById('weight-chart');
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = canvas.offsetHeight * dpr;
  ctx.scale(dpr, dpr);

  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;
  const pad = { top: 20, right: 16, bottom: 30, left: 40 };

  ctx.clearRect(0, 0, w, h);

  if (history.length < 2) {
    ctx.fillStyle = '#888';
    ctx.font = '13px DM Sans';
    ctx.textAlign = 'center';
    ctx.fillText('Log at least 2 weights to see chart', w / 2, h / 2);
    return;
  }

  const weights = history.map(h => h.weight);
  const minW = Math.min(...weights) - 1;
  const maxW = Math.max(...weights) + 1;
  const chartW = w - pad.left - pad.right;
  const chartH = h - pad.top - pad.bottom;

  // Grid
  ctx.strokeStyle = '#2a2a2a';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + (chartH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(w - pad.right, y);
    ctx.stroke();

    const val = (maxW - ((maxW - minW) / 4) * i).toFixed(1);
    ctx.fillStyle = '#888';
    ctx.font = '10px DM Sans';
    ctx.textAlign = 'right';
    ctx.fillText(val, pad.left - 6, y + 4);
  }

  // Line
  ctx.beginPath();
  ctx.strokeStyle = '#ff6b1a';
  ctx.lineWidth = 2;
  ctx.lineJoin = 'round';

  history.forEach((h, i) => {
    const x = pad.left + (i / (history.length - 1)) * chartW;
    const y = pad.top + ((maxW - h.weight) / (maxW - minW)) * chartH;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Dots
  history.forEach((h, i) => {
    const x = pad.left + (i / (history.length - 1)) * chartW;
    const y = pad.top + ((maxW - h.weight) / (maxW - minW)) * chartH;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#ff6b1a';
    ctx.fill();
  });

  // Date labels
  ctx.fillStyle = '#888';
  ctx.font = '9px DM Sans';
  ctx.textAlign = 'center';
  const step = Math.max(1, Math.floor(history.length / 5));
  history.forEach((h, i) => {
    if (i % step === 0 || i === history.length - 1) {
      const x = pad.left + (i / (history.length - 1)) * chartW;
      const d = new Date(h.date);
      ctx.fillText(d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }), x, h - pad.bottom + 24);
    }
  });
}

function renderWorkoutHistory() {
  const el = document.getElementById('workout-history');
  const allKeys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('lockin_workout_')) {
      const parts = key.replace('lockin_workout_', '').split('_');
      const date = parts[0];
      const type = parts[1];
      allKeys.push({ date, type, key });
    }
  }

  allKeys.sort((a, b) => b.date.localeCompare(a.date));

  el.innerHTML = allKeys.slice(0, 10).map(k => {
    const data = getData(k.key.replace('lockin_', ''), {});
    const totalSets = Object.values(data).reduce((sum, sets) => sum + sets.length, 0);
    const d = new Date(k.date);
    const label = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    return `<div class="history-item">
      <span class="history-date">${label} — ${k.type.charAt(0).toUpperCase() + k.type.slice(1)}</span>
      <span class="history-val">${totalSets} sets</span>
    </div>`;
  }).join('') || '<p style="color:var(--muted);font-size:13px;padding:12px">No workouts logged yet</p>';
}

// ===== HOME STATS =====
function updateHomeStats() {
  const history = getData('weightHistory', []);
  if (history.length > 0) {
    const latest = history[history.length - 1];
    document.getElementById('current-weight').innerHTML = `${latest.weight}<span class="stat-unit">kg</span>`;
  }

  let totalSessions = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('lockin_workout_')) totalSessions++;
  }
  document.getElementById('days-trained').textContent = totalSessions;

  const startDate = getData('startDate', null);
  if (startDate) {
    const start = new Date(startDate);
    const now = new Date();
    const diffDays = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    const week = Math.min(12, Math.max(1, Math.ceil(diffDays / 7)));
    document.getElementById('week-display').textContent = `Week ${week} of 12`;
  }

  // Streak
  let streak = 0;
  const d = new Date();
  for (let i = 0; i < 90; i++) {
    const ds = d.toISOString().slice(0, 10);
    const checklist = getData('checklist_' + ds, []);
    if (checklist.length > 0) {
      streak++;
      d.setDate(d.getDate() - 1);
    } else if (i === 0) {
      d.setDate(d.getDate() - 1);
    } else {
      break;
    }
  }
  document.getElementById('streak-count').textContent = streak;
}

// ===== SETTINGS =====
function setStartDate() {
  const input = document.getElementById('start-date-input');
  if (input.value) {
    setData('startDate', input.value);
    updateHomeStats();
  }
}

function resetAllData() {
  if (confirm('Reset ALL tracking data? This cannot be undone.')) {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('lockin_')) keys.push(key);
    }
    keys.forEach(k => localStorage.removeItem(k));
    init();
  }
}

// ===== INIT =====
function init() {
  renderWeekGrid();
  renderChecklist();
  renderWorkouts();
  renderMeals();
  updateWater();
  renderProgress();
  updateHomeStats();

  const startDate = getData('startDate', null);
  if (startDate) {
    document.getElementById('start-date-input').value = startDate;
  }
}

init();

// ===== SERVICE WORKER =====
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
