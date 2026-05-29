// ===== DATA =====
const EXERCISES = {
  push: [
    { name: 'Barbell Bench Press', sets: 4, reps: '8–10', rest: '90s', muscle: 'Chest', img: 'img/bench-press.png' },
    { name: 'Incline Dumbbell Press', sets: 3, reps: '10–12', rest: '75s', muscle: 'Upper Chest', img: 'img/incline-press.png' },
    { name: 'Shoulder Press (DB)', sets: 3, reps: '10–12', rest: '75s', muscle: 'Shoulders', img: 'img/shoulder-press.png' },
    { name: 'Lateral Raises', sets: 3, reps: '12–15', rest: '60s', muscle: 'Side Delts', img: 'img/lateral-raise.png' },
    { name: 'Tricep Rope Pushdown', sets: 3, reps: '12–15', rest: '60s', muscle: 'Triceps', img: 'img/tricep-pushdown.png' },
    { name: 'Cable Chest Fly', sets: 3, reps: '12–15', rest: '60s', muscle: 'Chest', img: 'img/cable-fly.png' },
  ],
  pull: [
    { name: 'Pull-Ups / Lat Pulldown', sets: 4, reps: '8–10', rest: '90s', muscle: 'Lats', img: 'img/lat-pulldown.png' },
    { name: 'Seated Cable Row', sets: 3, reps: '10–12', rest: '75s', muscle: 'Mid Back', img: 'img/seated-cable-row.png' },
    { name: 'Single Arm DB Row', sets: 3, reps: '10–12', rest: '75s', muscle: 'Lats', img: 'img/db-row.png' },
    { name: 'Face Pulls', sets: 3, reps: '15', rest: '60s', muscle: 'Rear Delts', img: 'img/face-pull.png' },
    { name: 'Barbell / DB Curl', sets: 3, reps: '12', rest: '60s', muscle: 'Biceps', img: 'img/barbell-curl.png' },
    { name: 'Hammer Curls', sets: 3, reps: '12', rest: '60s', muscle: 'Biceps', img: 'img/hammer-curl.png' },
  ],
  legs: [
    { name: 'Barbell Squat', sets: 4, reps: '8–10', rest: '90s', muscle: 'Quads', img: 'img/squat.png' },
    { name: 'Romanian Deadlift', sets: 3, reps: '10–12', rest: '90s', muscle: 'Hamstrings', img: 'img/rdl.png' },
    { name: 'Leg Press', sets: 3, reps: '12–15', rest: '75s', muscle: 'Quads', img: 'img/leg-press.png' },
    { name: 'Walking Lunges', sets: 3, reps: '12 each', rest: '60s', muscle: 'Quads/Glutes', img: 'img/lunges.png' },
    { name: 'Plank', sets: 3, reps: '45–60s', rest: '45s', muscle: 'Core', img: 'img/plank.png' },
    { name: 'Cable Crunch', sets: 3, reps: '15–20', rest: '45s', muscle: 'Abs', img: 'img/cable-crunch.png' },
    { name: 'Hanging Knee Raise', sets: 3, reps: '15', rest: '45s', muscle: 'Lower Abs', img: 'img/knee-raise.png' },
  ]
};

// ===== FOOD DATABASE (per 100g unless noted) =====
const FOOD_DB = [
  // Proteins
  { name: 'Chicken Breast (cooked)', cals: 165, protein: 31, carbs: 0, fat: 3.6, serving: 150 },
  { name: 'Chicken Thigh (cooked)', cals: 209, protein: 26, carbs: 0, fat: 10.9, serving: 120 },
  { name: 'Turkey Breast', cals: 135, protein: 30, carbs: 0, fat: 1, serving: 150 },
  { name: 'Beef Mince (lean)', cals: 176, protein: 20, carbs: 0, fat: 10, serving: 150 },
  { name: 'Beef Steak (sirloin)', cals: 206, protein: 26, carbs: 0, fat: 11, serving: 200 },
  { name: 'Lamb Mince', cals: 283, protein: 17, carbs: 0, fat: 23, serving: 150 },
  { name: 'Salmon Fillet', cals: 208, protein: 20, carbs: 0, fat: 13, serving: 150 },
  { name: 'Tuna (canned)', cals: 116, protein: 26, carbs: 0, fat: 1, serving: 120 },
  { name: 'Prawns', cals: 99, protein: 24, carbs: 0, fat: 0.3, serving: 100 },
  { name: 'Eggs (1 large, 50g)', cals: 143, protein: 13, carbs: 1, fat: 10, serving: 50 },
  { name: 'Egg Whites (1 large, 33g)', cals: 52, protein: 11, carbs: 0.7, fat: 0.2, serving: 33 },
  // Dairy
  { name: 'Greek Yogurt (0% fat)', cals: 59, protein: 10, carbs: 3.6, fat: 0.4, serving: 150 },
  { name: 'Greek Yogurt (full fat)', cals: 97, protein: 9, carbs: 3.6, fat: 5, serving: 150 },
  { name: 'Whole Milk', cals: 61, protein: 3.2, carbs: 4.7, fat: 3.3, serving: 250 },
  { name: 'Cheese (cheddar)', cals: 403, protein: 25, carbs: 1.3, fat: 33, serving: 30 },
  { name: 'Cottage Cheese', cals: 98, protein: 11, carbs: 3.4, fat: 4.3, serving: 150 },
  // Carbs
  { name: 'White Rice (cooked)', cals: 130, protein: 2.7, carbs: 28, fat: 0.3, serving: 200 },
  { name: 'Brown Rice (cooked)', cals: 123, protein: 2.7, carbs: 26, fat: 1, serving: 200 },
  { name: 'Pasta (cooked)', cals: 131, protein: 5, carbs: 25, fat: 1.1, serving: 200 },
  { name: 'Oats (dry)', cals: 389, protein: 17, carbs: 66, fat: 7, serving: 60 },
  { name: 'Bread (white, 1 slice)', cals: 265, protein: 9, carbs: 49, fat: 3.2, serving: 36 },
  { name: 'Bread (wholemeal, 1 slice)', cals: 247, protein: 13, carbs: 41, fat: 3.4, serving: 36 },
  { name: 'Pitta Bread (1 large)', cals: 275, protein: 9, carbs: 55, fat: 1.2, serving: 60 },
  { name: 'Sweet Potato', cals: 86, protein: 1.6, carbs: 20, fat: 0.1, serving: 200 },
  { name: 'White Potato (boiled)', cals: 77, protein: 2, carbs: 17, fat: 0.1, serving: 200 },
  { name: 'Banana (1 medium)', cals: 89, protein: 1.1, carbs: 23, fat: 0.3, serving: 120 },
  { name: 'Apple (1 medium)', cals: 52, protein: 0.3, carbs: 14, fat: 0.2, serving: 180 },
  // Fats & Nuts
  { name: 'Peanut Butter', cals: 588, protein: 25, carbs: 20, fat: 50, serving: 32 },
  { name: 'Almonds', cals: 579, protein: 21, carbs: 22, fat: 50, serving: 30 },
  { name: 'Olive Oil (1 tbsp)', cals: 884, protein: 0, carbs: 0, fat: 100, serving: 15 },
  { name: 'Avocado (half)', cals: 160, protein: 2, carbs: 9, fat: 15, serving: 80 },
  // Supplements
  { name: 'Whey Protein Shake', cals: 120, protein: 25, carbs: 3, fat: 1.5, serving: 30, fixed: true },
  { name: 'Creatine (1 scoop)', cals: 0, protein: 0, carbs: 0, fat: 0, serving: 5, fixed: true },
  // Simmer Eats
  { name: 'Simmer Eats — Lean', cals: 450, protein: 38, carbs: 40, fat: 12, serving: 400, fixed: true },
  { name: 'Simmer Eats — Standard', cals: 600, protein: 35, carbs: 55, fat: 18, serving: 450, fixed: true },
  // Common combos
  { name: 'Protein Shake + Banana', cals: 227, protein: 26, carbs: 30, fat: 2, serving: 150, fixed: true },
  { name: '3 Eggs Scrambled', cals: 214, protein: 19.5, carbs: 1.5, fat: 15, serving: 150, fixed: true },
  { name: 'Oats + Milk (60g oats)', cals: 386, protein: 14, carbs: 56, fat: 10, serving: 310, fixed: true },
  // Snacks
  { name: 'Protein Bar', cals: 200, protein: 20, carbs: 22, fat: 7, serving: 60, fixed: true },
  { name: 'Rice Cakes (2)', cals: 70, protein: 1.4, carbs: 16, fat: 0.4, serving: 18, fixed: true },
  { name: 'Dark Chocolate (4 squares)', cals: 546, protein: 5, carbs: 60, fat: 31, serving: 25, fixed: true },
  // Drinks
  { name: 'Orange Juice (glass)', cals: 45, protein: 0.7, carbs: 10, fat: 0.2, serving: 250, fixed: true },
  { name: 'Coffee (black)', cals: 2, protein: 0.3, carbs: 0, fat: 0, serving: 240, fixed: true },
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

// ===== MEALS / FOOD TRACKER =====
let selectedFood = null;

// Search input listener
document.getElementById('food-search').addEventListener('input', function() {
  const q = this.value.trim().toLowerCase();
  const sugEl = document.getElementById('food-suggestions');
  const formEl = document.getElementById('food-custom-form');
  formEl.style.display = 'none';

  if (q.length < 2) { sugEl.innerHTML = ''; return; }

  const matches = FOOD_DB.filter(f => f.name.toLowerCase().includes(q)).slice(0, 8);

  sugEl.innerHTML = matches.map((f, i) => {
    const servCals = f.fixed ? f.cals : Math.round(f.cals * f.serving / 100);
    const servProt = f.fixed ? f.protein : Math.round(f.protein * f.serving / 100 * 10) / 10;
    return `
      <div class="food-sug-item" onclick="selectFood(${FOOD_DB.indexOf(f)})">
        <div>
          <div class="food-sug-name">${f.name}</div>
          <div class="food-sug-detail">${f.serving}g · ${servProt}g protein · ${f.carbs ? Math.round(f.carbs * f.serving / 100) + 'g carbs' : ''}</div>
        </div>
        <div style="text-align:right">
          <div class="food-sug-cals">${servCals}</div>
          <div class="food-sug-unit">kcal</div>
        </div>
      </div>`;
  }).join('');

  // Add custom option
  if (matches.length === 0 || q.length >= 3) {
    sugEl.innerHTML += `
      <div class="food-sug-item" onclick="openCustomFood('${q}')" style="border-color:var(--orange)">
        <div>
          <div class="food-sug-name" style="color:var(--orange)">+ Add custom: "${q}"</div>
          <div class="food-sug-detail">Enter your own macros</div>
        </div>
        <div class="food-sug-cals">?</div>
      </div>`;
  }
});

function selectFood(dbIdx) {
  const f = FOOD_DB[dbIdx];
  selectedFood = { ...f, dbIdx };
  const formEl = document.getElementById('food-custom-form');
  document.getElementById('food-suggestions').innerHTML = '';
  formEl.style.display = 'block';

  document.getElementById('custom-food-name').textContent = f.name;
  document.getElementById('food-serving').value = f.serving;

  if (f.fixed) {
    document.getElementById('food-cals').value = f.cals;
    document.getElementById('food-protein').value = f.protein;
    document.getElementById('food-carbs').value = f.carbs;
    document.getElementById('food-fat').value = f.fat;
    document.getElementById('food-serving').disabled = true;
  } else {
    const s = f.serving;
    document.getElementById('food-cals').value = Math.round(f.cals * s / 100);
    document.getElementById('food-protein').value = Math.round(f.protein * s / 100 * 10) / 10;
    document.getElementById('food-carbs').value = Math.round(f.carbs * s / 100 * 10) / 10;
    document.getElementById('food-fat').value = Math.round(f.fat * s / 100 * 10) / 10;
    document.getElementById('food-serving').disabled = false;

    // Recalculate on serving change
    document.getElementById('food-serving').onchange = function() {
      const newS = parseFloat(this.value) || 100;
      document.getElementById('food-cals').value = Math.round(f.cals * newS / 100);
      document.getElementById('food-protein').value = Math.round(f.protein * newS / 100 * 10) / 10;
      document.getElementById('food-carbs').value = Math.round(f.carbs * newS / 100 * 10) / 10;
      document.getElementById('food-fat').value = Math.round(f.fat * newS / 100 * 10) / 10;
    };
  }
}

function openCustomFood(name) {
  selectedFood = { name: name.charAt(0).toUpperCase() + name.slice(1), custom: true };
  const formEl = document.getElementById('food-custom-form');
  document.getElementById('food-suggestions').innerHTML = '';
  formEl.style.display = 'block';
  document.getElementById('custom-food-name').textContent = selectedFood.name;
  document.getElementById('food-serving').value = 100;
  document.getElementById('food-serving').disabled = false;
  document.getElementById('food-cals').value = '';
  document.getElementById('food-protein').value = '';
  document.getElementById('food-carbs').value = '';
  document.getElementById('food-fat').value = '';
}

function closeFoodForm() {
  document.getElementById('food-custom-form').style.display = 'none';
  selectedFood = null;
}

function addCustomFood() {
  if (!selectedFood) return;
  const cals = parseInt(document.getElementById('food-cals').value) || 0;
  const protein = parseFloat(document.getElementById('food-protein').value) || 0;
  const carbs = parseFloat(document.getElementById('food-carbs').value) || 0;
  const fat = parseFloat(document.getElementById('food-fat').value) || 0;
  const serving = parseFloat(document.getElementById('food-serving').value) || 100;

  if (cals === 0 && protein === 0) return;

  const entry = {
    name: selectedFood.name || 'Food',
    cals, protein, carbs, fat, serving,
    time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  };

  const key = 'foodlog_' + todayStr();
  const log = getData(key, []);
  log.push(entry);
  setData(key, log);

  closeFoodForm();
  document.getElementById('food-search').value = '';
  renderFoodLog();
}

function quickAdd(type) {
  const quickFoods = {
    'protein-shake': { name: 'Whey Protein Shake', cals: 120, protein: 25, carbs: 3, fat: 1.5, serving: 30 },
    'simmer-lean': { name: 'Simmer Eats — Lean', cals: 450, protein: 38, carbs: 40, fat: 12, serving: 400 },
    'simmer-standard': { name: 'Simmer Eats — Standard', cals: 600, protein: 35, carbs: 55, fat: 18, serving: 450 },
    'creatine': { name: 'Creatine (1 scoop)', cals: 0, protein: 0, carbs: 0, fat: 0, serving: 5 },
  };

  const f = quickFoods[type];
  if (!f) return;

  const entry = {
    ...f,
    time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  };

  const key = 'foodlog_' + todayStr();
  const log = getData(key, []);
  log.push(entry);
  setData(key, log);
  renderFoodLog();
}

function removeFood(idx) {
  const key = 'foodlog_' + todayStr();
  const log = getData(key, []);
  log.splice(idx, 1);
  setData(key, log);
  renderFoodLog();
}

function renderFoodLog() {
  const log = getData('foodlog_' + todayStr(), []);
  const el = document.getElementById('food-log');

  if (log.length === 0) {
    el.innerHTML = '<div class="food-log-empty">No food logged yet today.<br>Search above or use quick add buttons.</div>';
  } else {
    el.innerHTML = log.map((f, i) => `
      <div class="food-log-item">
        <div class="food-log-left">
          <div class="food-log-name">${f.name}</div>
          <div class="food-log-macros">${f.time} · ${f.serving}g · P:${f.protein}g · C:${f.carbs}g · F:${f.fat}g</div>
        </div>
        <div class="food-log-right">
          <div class="food-log-cals">${f.cals}<span style="font-size:11px;color:var(--muted)"> kcal</span></div>
          <button class="food-log-delete" onclick="removeFood(${i})">✕</button>
        </div>
      </div>`).join('');
  }

  updateFoodMacros();
}

function updateFoodMacros() {
  const log = getData('foodlog_' + todayStr(), []);
  let totalCals = 0, totalProtein = 0, totalCarbs = 0, totalFat = 0;
  log.forEach(f => {
    totalCals += f.cals;
    totalProtein += f.protein;
    totalCarbs += f.carbs || 0;
    totalFat += f.fat || 0;
  });
  document.getElementById('cals-eaten').textContent = totalCals;
  document.getElementById('protein-eaten').textContent = Math.round(totalProtein);
  document.getElementById('carbs-eaten').textContent = Math.round(totalCarbs);
  document.getElementById('fat-eaten').textContent = Math.round(totalFat);

  // Calorie progress bar (target 2000)
  const pct = Math.min((totalCals / 2000) * 100, 100);
  document.getElementById('cal-bar').style.width = pct + '%';
  if (totalCals > 2100) {
    document.getElementById('cal-bar').style.background = '#ff4444';
  } else {
    document.getElementById('cal-bar').style.background = 'linear-gradient(90deg, var(--green), var(--orange))';
  }
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
  renderFoodLog();
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
