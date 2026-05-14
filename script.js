const scenarios = [
    {
      title: "7:12 AM",
      subtitle: "Before the day starts, the numbers are already there.",
      background: "assets/bedroom.jpg",
      text: "You wake up and check your glucose before you properly feel awake. You are hungry, a bit late, and already calculating what your body might do next.",
      quote: "The first decision arrives before the first thought has even settled",
      tags: ["morning", "food", "routine"],
      pressure: "low",
      choices: [
        {
          label: "Eat breakfast and take insulin for it.",
          effect: { glucose: 12, insulin: -12, stress: 4, irritation: 0 },
          result: "You eat, but the decision follows you. Was it enough insulin? Too much? Will it hit before you leave?"
        },
        {
          label: "Skip breakfast because you are running late.",
          effect: { glucose: -16, insulin: 0, stress: 10, irritation: 6 },
          result: "You save time, but your body does not forget. The morning becomes lighter in food, heavier in risk."
        },
        {
          label: "Wait and check again before deciding.",
          effect: { glucose: -6, insulin: 0, stress: 8, irritation: 3 },
          result: "You try to be careful, but careful still takes time"
        }
      ]
    },
    {
      title: "8:03 AM",
      subtitle: "You are about to leave the house.",
      background: "assets/leaving-home.jpg", 
      text: "Keys. Phone. Wallet. Then the extra list: glucose tablets, pump supplies, sensor patches, spare cannula, something sweet just in case. Leaving is never just leaving.",
      quote: "Preparation becomes a quiet kind of survival.",
      tags: ["leaving home", "supplies", "planning"],
      pressure: "low",
      choices: [
        {
          label: "Pack everything, even though it slows you down.",
          effect: { glucose: 0, insulin: 0, stress: 4, irritation: 3 },
          result: "You feel safer, but also tired of needing to carry a backup plan for your body."
        },
        {
          label: "Take only the basics and hope that is enough.",
          effect: { glucose: 0, insulin: 0, stress: 12, irritation: 5 },
          result: "You leave faster, but the uncertainty comes with you."
        },
        {
          label: "Rush out and deal with it later.",
          effect: { glucose: -8, insulin: 0, stress: 16, irritation: 8 },
          result: "You gain a few minutes, but lose some control."
        }
      ]
    },
    {
      title: "10:18 AM",
      subtitle: "Your sensor starts peeling.",
      background: "assets/sensor.jpg", 
      text: "You feel the edge lifting under your sleeve. It is small, but not small. If it falls off, you lose data. If you lose data, every decision becomes more uncertain.",
      quote: "Sometimes the problem is not the illness itself, but everything needed to keep watching it.",
      tags: ["sensor", "money", "comfort"],
      pressure: "medium",
      choices: [
        {
          label: "Use extra adhesive patches you bought yourself.",
          effect: { glucose: 0, insulin: 0, stress: -6, irritation: 4 },
          result: "It helps, but it reminds you that comfort often costs extra."
        },
        {
          label: "Ignore it and hope it stays on.",
          effect: { glucose: 0, insulin: 0, stress: 14, irritation: 8 },
          result: "You try to forget it, but your attention keeps returning to the same small corner of skin."
        },
        {
          label: "Keep checking it every few minutes.",
          effect: { glucose: 0, insulin: 0, stress: 10, irritation: 10 },
          result: "It stays attached, but so does the anxiety."
        }
      ]
    },
    {
      title: "12:41 PM",
      subtitle: "Lunch is porridge. Approx. 60g carbs.",
      background: "assets/lunch.jpg", 
      text: "You are hungry now. The carb ratio is 1 unit of insulin for every 7.9g of carbs. You need to work out the dose before you can eat.",
      quote: "Even hunger asks for maths first.",
      tags: ["carb counting", "insulin", "calculation"],
      pressure: "medium",
      calculator: true,
      carbs: 60,
      ratio: 7.9,
      choices: [
        {
          label: "Take the calculated dose and eat.",
          requiresInsulin: 8,
          effect: { glucose: 10, insulin: -8, stress: 4, irritation: 0 },
          result: "You eat, but only after turning food into numbers."
        },
        {
          label: "Guess the dose because you are tired of calculating.",
          requiresInsulin: 5,
          effect: { glucose: 18, insulin: -5, stress: 12, irritation: 8 },
          result: "Guessing is quicker, but it leaves uncertainty behind."
        },
        {
          label: "Do not eat yet because you are unsure.",
          effect: { glucose: -12, insulin: 0, stress: 15, irritation: 12 },
          result: "You avoid one risk, but create another."
        }
      ]
    },
    {
      title: "2:06 PM",
      subtitle: "Someone notices your pump.",
      background: "assets/public.jpg", 
      text: "Their eyes pause. Then the question comes. You know they probably mean well, but suddenly your body feels public.",
      quote: "The device keeping you safe can also make you feel exposed.",
      tags: ["social", "embarrassment", "visibility"],
      pressure: "medium",
      choices: [
        {
          label: "Explain what it is.",
          effect: { glucose: 0, insulin: 0, stress: 7, irritation: 5 },
          result: "You explain calmly, but part of you wishes you did not have to."
        },
        {
          label: "Laugh it off and change the subject.",
          effect: { glucose: 0, insulin: 0, stress: 10, irritation: 8 },
          result: "The moment passes, but the embarrassment stays longer than the question."
        },
        {
          label: "Hide it under your clothes.",
          effect: { glucose: 0, insulin: 0, stress: 12, irritation: 10 },
          result: "You feel less seen, but not necessarily better."
        }
      ]
    },
    {
      title: "4:33 PM",
      subtitle: "You are running low on insulin.",
      background: "assets/medication.jpg", 
      text: "A safe choice earlier used more insulin. Now the level is low. You need to think about prescriptions, delivery, storage, timing, and whether someone will be home.",
      quote: "The medicine that keeps you alive also becomes something you have to chase, store, and protect.",
      tags: ["medication", "delivery", "planning"],
      pressure: "medium",
      choices: [
        {
          label: "Order more and rearrange your plans to be home.",
          effect: { glucose: 0, insulin: 20, stress: 8, irritation: 8 },
          result: "You solve one problem by creating another task."
        },
        {
          label: "Delay it and hope the current supply lasts.",
          effect: { glucose: 0, insulin: 0, stress: 18, irritation: 12 },
          result: "Nothing changes immediately, which almost makes it easier to ignore. Almost."
        },
        {
          label: "Try to use less insulin for the rest of the day.",
          effect: { glucose: 18, insulin: 0, stress: 20, irritation: 16 },
          result: "You preserve insulin, but your glucose starts carrying the cost."
        }
      ]
    },
    {
      title: "6:12 PM",
      subtitle: "Your glucose is high and everything feels louder.",
      background: "assets/high-glucose.jpg", 
      text: "Your body feels heavy. Messages irritate you. Small sounds feel sharp. You know it is probably your glucose, but knowing that does not make it easier to be kind to yourself.",
      quote: "A number on a screen becomes a mood you have to apologise for.",
      tags: ["high glucose", "mood", "irritation"],
      pressure: "high",
      choices: [
        {
          label: "Correct with insulin and wait.",
          requiresInsulin: 4,
          effect: { glucose: -18, insulin: -4, stress: 8, irritation: -8 },
          result: "You do the right thing, then wait inside the discomfort."
        },
        {
          label: "Push through and pretend you are fine.",
          effect: { glucose: 8, insulin: 0, stress: 16, irritation: 18 },
          result: "You keep moving, but everything feels harder than it should."
        },
        {
          label: "Snap at someone and regret it later.",
          effect: { glucose: 4, insulin: 0, stress: 20, irritation: 20 },
          result: "The feeling passes eventually, but the guilt arrives after."
        }
      ]
    },
    {
      title: "9:57 PM",
      subtitle: "You are out, and you have been drinking.",
      background: "assets/night-out.jpg",
      text: "Alcohol makes everything less predictable. You are trying to enjoy yourself, but part of your mind is still watching your body from a distance.",
      quote: "Even fun has a second layer when your body needs monitoring.",
      tags: ["alcohol", "public", "uncertainty"],
      pressure: "high",
      choices: [
        {
          label: "Check your glucose and slow down.",
          effect: { glucose: -4, insulin: 0, stress: 8, irritation: 6 },
          result: "You stay safer, but the night becomes less simple."
        },
        {
          label: "Ignore it because you just want to feel normal.",
          effect: { glucose: -18, insulin: 0, stress: 20, irritation: 14 },
          result: "For a moment, you feel free. Then the uncertainty catches up."
        },
        {
          label: "Eat something random just in case.",
          effect: { glucose: 20, insulin: 0, stress: 13, irritation: 10 },
          result: "You avoid one fear by creating another possible spike."
        }
      ]
    },
    {
      title: "11:26 PM",
      subtitle: "You feel low in public.",
      background: "assets/crowd.jpg",
      text: "Your hands feel strange. Your thoughts slow down. You need sugar, but you are surrounded by people and trying not to look scared.",
      quote: "Panic is louder when you are trying to hide it.",
      tags: ["low glucose", "panic", "public"],
      pressure: "high",
      timed: true,
      duration: 12,
      choices: [
        {
          label: "Find sugar immediately.",
          effect: { glucose: 22, insulin: 0, stress: 6, irritation: 2 },
          result: "You act fast. The panic does not disappear straight away, but it has somewhere to go."
        },
        {
          label: "Pretend you are okay and wait.",
          effect: { glucose: -20, insulin: 0, stress: 25, irritation: 16 },
          result: "The low gets heavier. Your body becomes harder to negotiate with."
        },
        {
          label: "Ask someone for help.",
          effect: { glucose: 18, insulin: 0, stress: 10, irritation: 8 },
          result: "You are helped, but needing help feels complicated."
        }
      ]
    },
    {
      title: "3:08 AM",
      subtitle: "The alarm is too loud. You are too tired.",
      background: "assets/night-bedroom.jpg",
      text: "Your glucose is low again. The room is dark. The alarm cuts through sleep. You have to wake up enough to make a decision your body cannot wait for.",
      quote: "Rest is interrupted by survival.",
      tags: ["night low", "alarm", "24/7"],
      pressure: "high",
      timed: true,
      duration: 10,
      choices: [
        {
          label: "Get up and treat the low.",
          effect: { glucose: 24, insulin: 0, stress: 10, irritation: 10 },
          result: "You do what you need to do. Then you wait in the dark to feel safe enough to sleep again."
        },
        {
          label: "Silence the alarm for a minute.",
          effect: { glucose: -20, insulin: 0, stress: 24, irritation: 18 },
          result: "The silence feels good for a second. Then fear fills it."
        },
        {
          label: "Panic and search for anything sweet.",
          effect: { glucose: 30, insulin: 0, stress: 20, irritation: 12 },
          result: "You find sugar, but the panic stays in your chest long after."
        }
      ]
    }
  ];
  
  let current = 0;
  let timerInterval = null;
  
  const state = {
    glucose: 62,
    insulin: 55,
    stress: 18,
    irritation: 12,
    decisions: 0,
    blocked: 0,
    history: []
  };
  
  const screen = document.getElementById("screen");
  const pressureFrame = document.getElementById("pressureFrame");
  
  function clamp(value) {
    return Math.max(0, Math.min(100, value));
  }
  
  function renderIntro() {
    document.body.style.backgroundImage = "";
    pressureFrame.className = "pressure-frame";
  
    screen.innerHTML = `
      <div class="view intro">
        <div class="eyebrow">Creative Project</div>
        <h1>Invisible Decisions</h1>
        <p>
          A web experience about the constant decisions, calculations, interruptions and emotional pressure of living with type 1 diabetes
        </p>
        <p class="quote">
          Created by Anri Grisins
        </p>
  
        <div class="hero-buttons">
          <button onclick="startExperience()" class="start-btn">Start</button>
          <button onclick="renderInstructions()" class="secondary-btn">How it works</button>
        </div>
      </div>
    `;
  }
  function renderInstructions() {
    pressureFrame.className = "pressure-frame medium";
  
    screen.innerHTML = `
      <div class="view instructions-view">
        <div class="instructions-map">
  
          <div class="instruction-card card-one">
            <div class="eyebrow">Before you begin</div>
            <h2>How it works</h2>
            <p>
              Invisible Decisions is an interactive web experience where you move through one day of living with type 1 diabetes.
            </p>
          </div>
  
          <div class="instruction-card card-two">
            <h3>1. Read the scenario</h3>
            <p>
              Each screen gives you a moment from the day. Some are calm, some are stressful, and some are timed.
            </p>
          </div>
  
          <div class="instruction-card card-three">
            <h3>2. Make a choice</h3>
            <p>
              Your decisions affect blood sugar, insulin left, stress, and irritation. Some choices may disappear if you do not have enough insulin.
            </p>
          </div>
  
          <div class="instruction-card card-four">
            <h3>3. Notice the impact</h3>
            <p>
              The aim is not to win. It is to show how small invisible decisions build up across the day.
            </p>
          </div>
  
          <svg class="flow-lines" viewBox="0 0 1400 700" preserveAspectRatio="none">

  <path
    d="M525 180 C 630 180, 700 245, 875 245"
    class="flow-path"
  />

  <path
    d="M620 510 C 650 510, 705 590, 820 590"
    class="flow-path"
  />

  <circle cx="525" cy="180" r="9" class="flow-dot" />
  <circle cx="875" cy="245" r="9" class="flow-dot" />

  <circle cx="620" cy="510" r="9" class="flow-dot" />
  <circle cx="820" cy="590" r="9" class="flow-dot" />

</svg>
  
        </div>
  
        <div class="instruction-buttons">
          <button onclick="startExperience()">Start Experience</button>
          <button onclick="renderIntro()" class="secondary-btn">Back</button>
        </div>
      </div>
    `;
  }
  
  function startExperience() {
    current = 0;
    renderScenario();
  }
  
  function updatePressureFrame(pressure) {
    pressureFrame.className = "pressure-frame";
  
    if (pressure === "medium") {
      pressureFrame.classList.add("medium");
    }
  
    if (pressure === "high") {
      pressureFrame.classList.add("high");
    }
  }
  
  function renderStats() {
    return `
      <div class="panel stats">
        ${statBlock("Blood sugar", state.glucose, "glucose")}
        ${statBlock("Insulin left", state.insulin, "insulin")}
        ${statBlock("Stress", state.stress, "stress")}
        ${statBlock("Irritation", state.irritation, "irritation")}
      </div>
    `;
  }
  
  function statBlock(label, value, className) {
    return `
      <div class="stat">
        <div class="stat-top">
          <span>${label}</span>
          <strong>${value}%</strong>
        </div>
        <div class="bar">
          <div class="bar-fill ${className}" style="width:${value}%"></div>
        </div>
      </div>
    `;
  }
  
  function renderCalculator(scenario) {
    if (!scenario.calculator) return "";
  
    return `
      <div class="calculator">
        <strong>Carb calculation</strong>
        <p style="margin-bottom:8px;">
          This meal is approximately ${scenario.carbs}g carbs. Ratio: 1 unit for every ${scenario.ratio}g carbs.
        </p>
        <input id="doseInput" type="number" step="0.1" placeholder="Type the insulin dose: ${scenario.carbs} ÷ ${scenario.ratio}" />
        <button onclick="checkDose(${scenario.carbs}, ${scenario.ratio})">Check calculation</button>
        <div class="calc-result" id="calcResult"></div>
      </div>
    `;
  }
  
  function checkDose(carbs, ratio) {
    const input = document.getElementById("doseInput");
    const result = document.getElementById("calcResult");
    const correct = carbs / ratio;
    const answer = Number(input.value);
  
    if (!answer) {
      result.textContent = "Type your answer first.";
      return;
    }
  
    if (Math.abs(answer - correct) <= 0.4) {
      result.textContent = `Close. ${carbs} ÷ ${ratio} is about ${correct.toFixed(1)} units.`;
    } else {
      result.textContent = `Not quite. ${carbs} ÷ ${ratio} is about ${correct.toFixed(1)} units. Even eating can become maths.`;
      state.stress = clamp(state.stress + 5);
      state.irritation = clamp(state.irritation + 4);
    }
  }
  
  function renderScenario() {
    clearTimer();
  
    const s = scenarios[current];
    document.body.style.backgroundImage = s.background
  ? `
    linear-gradient(rgba(11,19,32,0.78), rgba(11,19,32,0.9)),
    url('${s.background}')
  `
  : "";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
    updatePressureFrame(s.pressure);
  
    const timerHTML = s.timed ? `
      <div class="timer-wrap">
        <div class="timer-info">
          <span>Timed decision</span>
          <strong id="timerCount">${s.duration}s</strong>
        </div>
        <div class="timer-bar">
          <div class="timer-fill" id="timerFill"></div>
        </div>
      </div>
    ` : "";
  
    screen.innerHTML = `
      <div class="view">
        <div class="layout">
          <div>
            <div class="eyebrow">Scenario ${current + 1} of ${scenarios.length}</div>
            <h2>${s.title}</h2>
            <p><strong style="color:#F5F7FB;">${s.subtitle}</strong></p>
  
            <div class="tags">
              ${s.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
            </div>
  
            <div class="context">
              <p>${s.text}</p>
              <div class="quote">${s.quote}</div>
            </div>
  
            ${renderCalculator(s)}
            ${timerHTML}
  
            <div class="options">
              ${s.choices.map((choice, index) => renderChoice(choice, index)).join("")}
            </div>
          </div>
  
          <div>
            ${renderStats()}
          </div>
        </div>
      </div>
    `;
  
    if (s.timed) {
      startTimer(s.duration);
    }
  }
  
  function renderChoice(choice, index) {
    const disabled = choice.requiresInsulin && state.insulin < choice.requiresInsulin;
  
    return `
      <div>
        <button ${disabled ? "disabled" : ""} onclick="choose(${index})">
          ${choice.label}
        </button>
        ${disabled ? `
          <div class="disabled-note">
            Not enough insulin left for this option. The choice disappears, but the hunger/stress does not.
          </div>
        ` : ""}
      </div>
    `;
  }
  
  function choose(index) {
    clearTimer();
  
    const scenario = scenarios[current];
    const choice = scenario.choices[index];
  
    if (choice.requiresInsulin && state.insulin < choice.requiresInsulin) {
      state.blocked += 1;
      state.stress = clamp(state.stress + 10);
      state.irritation = clamp(state.irritation + 8);
      renderScenario();
      return;
    }
  
    applyEffect(choice.effect);
    state.decisions += 1;
    state.history.push({
      scenario: scenario.title,
      choice: choice.label,
      result: choice.result
    });
  
    renderResult(choice.result);
  }
  
  function applyEffect(effect) {
    state.glucose = clamp(state.glucose + (effect.glucose || 0));
    state.insulin = clamp(state.insulin + (effect.insulin || 0));
    state.stress = clamp(state.stress + (effect.stress || 0));
    state.irritation = clamp(state.irritation + (effect.irritation || 0));
  }
  
  function renderResult(resultText) {
    const isLast = current >= scenarios.length - 1;
  
    screen.innerHTML = `
      <div class="view">
        <div class="layout">
          <div>
            <div class="eyebrow">Consequence</div>
            <h2>It follows you.</h2>
            <p>${resultText}</p>
            <p class="quote">One decision ends. Another waits.</p>
            <button onclick="${isLast ? "renderEnding()" : "nextScenario()"}" style="margin-top:24px; max-width:280px; text-align:center;">
              ${isLast ? "Finish" : "Continue"}
            </button>
          </div>
  
          <div>
            ${renderStats()}
          </div>
        </div>
      </div>
    `;
  }
  
  function nextScenario() {
    current += 1;
    renderScenario();
  }
  
  function startTimer(duration) {
    let timeLeft = duration;
    const timerFill = document.getElementById("timerFill");
    const timerCount = document.getElementById("timerCount");
  
    timerInterval = setInterval(() => {
      timeLeft -= 1;
  
      timerCount.textContent = `${timeLeft}s`;
      timerFill.style.width = `${(timeLeft / duration) * 100}%`;

      if (timeLeft <= 5) {
        screen.classList.add("shake-pressure");
      }
  
      if (timeLeft <= 0) {
        clearTimer();
        applyEffect({ glucose: -18, stress: 18, irritation: 12 });
        state.decisions += 1;
        state.history.push({
          scenario: scenarios[current].title,
          choice: "No decision in time",
          result: "You froze. The body still needed an answer."
        });
        renderResult("You froze. The body still needed an answer. Waiting was also a decision.");
      }
    }, 1000);
  }
  
 function clearTimer() {
  screen.classList.remove("shake-pressure");

  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}
  
  function renderEnding() {
    document.body.style.backgroundImage = "";
    clearTimer();
    pressureFrame.className = "pressure-frame high";
  
    const historyHTML = state.history.slice(-5).map(item => `
      <div class="history-item">
        <strong>${item.scenario}</strong>
        <p>${item.choice}</p>
      </div>
    `).join("");
  
    screen.innerHTML = `
      <div class="view ending-cinematic">
        <div class="ending-glow"></div>
  
        <div class="eyebrow">Final Reflection</div>
  
        <h1>Invisible Decisions</h1>
  
        <p class="ending-line">
          The day is over, but the decisions are not.
        </p>
  
        <p class="ending-body">
          Every choice you made left something behind: a number changed, a risk shifted,
          a worry stayed in the back of your mind. Some decisions looked small from the outside,
          but inside the body, they carried weight.
        </p>
  
        <p class="ending-body">
          You made <strong>${state.decisions}</strong> decisions in this experience.
          Some were calm. Some were rushed. Some were made under pressure.
          Some were not really choices at all — just the safest option left.
        </p>
  
        <div class="ending-stats">
          <div>
            <span>Blood sugar</span>
            <strong>${state.glucose}%</strong>
          </div>
          <div>
            <span>Insulin left</span>
            <strong>${state.insulin}%</strong>
          </div>
          <div>
            <span>Stress</span>
            <strong>${state.stress}%</strong>
          </div>
          <div>
            <span>Irritation</span>
            <strong>${state.irritation}%</strong>
          </div>
        </div>
  
        <p class="ending-quote">
          This is not about one dramatic moment. It is about the constant background noise of managing a body that never fully switches off.
        </p>
  
        <div class="history-panel">
          <h3>What followed you</h3>
          ${historyHTML}
        </div>
  
        <p class="ending-final">
          24 hours a day. 7 days a week. 365 days a year.
        </p>
  
        <button onclick="restart()" class="restart-cinematic">
          Begin Again
        </button>
      </div>
    `;
  }
  
  function startExperience() {
    clearTimer();
  
    current = 0;
    state.glucose = 62;
    state.insulin = 55;
    state.stress = 18;
    state.irritation = 12;
    state.decisions = 0;
    state.blocked = 0;
    state.history = [];
  
    renderScenario();
  }
  function restart() {
    clearTimer();
  
    document.body.style.backgroundImage = "";
  
    current = 0;
  
    state.glucose = 62;
    state.insulin = 55;
    state.stress = 18;
    state.irritation = 12;
    state.decisions = 0;
    state.blocked = 0;
    state.history = [];
  
    renderIntro();
  }
  renderIntro();