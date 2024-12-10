// Stats
let health = 10;
let morality = 10;
let influence = 10;
let addiction = 0;

// Current card index
let currentCard = 0;

// Cards array (example with a few scenarios)
  const cards = [
    // 1
    {
      text: "A suspicious package lies in front of you. Do you open it?",
      leftCaption: "Leave it alone",
      rightCaption: "Open the package",
      left: { health: 1, morality: -1 },
      right: { influence: 1, health: -1 }
    },
    // 2
    {
      text: "A man begs for food outside your apartment. Do you help him?",
      leftCaption: "Give him food",
      rightCaption: "Refuse",
      left: { health: -1, morality: 1 },
      right: { influence: 1, morality: -1 }
    },
    // 3
    {
      text: "The power in your district goes out. A neighbor asks for your help. Do you assist?",
      leftCaption: "Try to fix it",
      rightCaption: "Stay home",
      left: { morality: 1, health: -1 },
      right: { health: 1, morality: -1 }
    },
    // 4
    {
      text: "A gang demands money for protection. Do you pay them?",
      leftCaption: "Pay the fee",
      rightCaption: "Refuse",
      left: { health: 1, influence: -1 },
      right: { health: -2, morality: 1 }
    },
    // 5
    {
      text: "A hacker offers to share N.E.O. secrets. Do you log in?",
      leftCaption: "Log in",
      rightCaption: "Ignore",
      left: { influence: 1, addiction: 1 },
      right: { morality: 1, influence: -1 }
    },
    // 6
    {
      text: "You find extra water in an abandoned building. Do you share it?",
      leftCaption: "Share it",
      rightCaption: "Keep it",
      left: { morality: 1, influence: -1 },
      right: { influence: 1, morality: -1 }
    },
    // 7
    {
      text: "An injured neighbor knocks on your door. Do you let them in?",
      leftCaption: "Let them in",
      rightCaption: "Turn them away",
      left: { health: -1, morality: 1 },
      right: { influence: 1, morality: -1 }
    },
    // 8
    {
      text: "A VR pod vendor offers you free sessions for a week. Accept?",
      leftCaption: "Decline the offer",
      rightCaption: "Accept the sessions",
      left: { health: 1, morality: 1 },
      right: { addiction: 1, influence: 1 }
    },
    // 9
    {
      text: "A surveillance drone watches your block. Do you report it?",
      leftCaption: "Report it",
      rightCaption: "Ignore it",
      left: { influence: 1, morality: -1 },
      right: { morality: 1, influence: -1 }
    },
    // 10
    {
      text: "A co-worker accuses you of stealing rations. Do you defend yourself?",
      leftCaption: "Defend yourself",
      rightCaption: "Stay silent",
      left: { influence: 1, morality: -1 },
      right: { morality: 1, influence: -1 }
    },
    // 11
    {
      text: "A child asks you to fix their broken toy. Do you help?",
      leftCaption: "Fix the toy",
      rightCaption: "Ignore the child",
      left: { morality: 1, health: -1 },
      right: { influence: 1, morality: -1 }
    },
    // 12
    {
      text: "You overhear a rebel plotting against N.E.O. Do you report them?",
      leftCaption: "Report them",
      rightCaption: "Stay silent",
      left: { influence: 1, morality: -1 },
      right: { morality: 1, influence: -1 }
    },
    // 13
    {
      text: "A rebel group asks you to smuggle supplies. Do you agree?",
      leftCaption: "Help the rebels",
      rightCaption: "Refuse",
      left: { morality: 1, health: -1 },
      right: { health: 1, morality: -1 }
    },
    // 14
    {
      text: "A wealthy citizen offers you a bribe to turn a blind eye to their crime. Do you accept?",
      leftCaption: "Accept the bribe",
      rightCaption: "Refuse",
      left: { influence: 1, morality: -2 },
      right: { morality: 1, influence: -1 }
    },
    // 15
    {
      text: "A child offers you a scavenged item in exchange for food. Do you trade?",
      leftCaption: "Make the trade",
      rightCaption: "Refuse the trade",
      left: { health: -1, influence: 1 },
      right: { morality: 1, health: 1 }
    },
    // 16
    {
      text: "N.E.O. announces a mandatory curfew. Do you comply?",
      leftCaption: "Follow the curfew",
      rightCaption: "Defy the curfew",
      left: { morality: -1, health: 1 },
      right: { influence: 1, health: -1 }
    },
    // 17
    {
      text: "A vendor sells cheap counterfeit meds. Do you buy them?",
      leftCaption: "Buy the meds",
      rightCaption: "Avoid the scam",
      left: { health: 1, morality: -1 },
      right: { morality: 1, health: -1 }
    },
    // 18
    {
      text: "A gang member asks for shelter for the night. Do you help them?",
      leftCaption: "Provide shelter",
      rightCaption: "Refuse",
      left: { morality: 1, health: -1 },
      right: { influence: 1, morality: -1 }
    },
    // 19
    {
      text: "N.E.O. offers a reward for citizens who report suspicious activity. Do you participate?",
      leftCaption: "Report someone",
      rightCaption: "Avoid the program",
      left: { influence: 1, morality: -2 },
      right: { morality: 1, health: 1 }
    },
    // 20
    {
      text: "A black-market dealer offers you illegal supplies. Do you deal with them?",
      leftCaption: "Make the deal",
      rightCaption: "Walk away",
      left: { influence: 2, morality: -2 },
      right: { morality: 1, addiction: -1 }
    },
  // 21
  {
    text: "A rebel asks for help sabotaging a N.E.O. checkpoint. Do you assist?",
    leftCaption: "Help sabotage",
    rightCaption: "Refuse",
    left: { morality: 1, health: -2 },
    right: { influence: 1, morality: -1 }
  },
  // 22
  {
    text: "You find a stash of ration cards. Do you keep them?",
    leftCaption: "Keep the stash",
    rightCaption: "Turn them in",
    left: { health: 2, morality: -2 },
    right: { morality: 2, health: -1 }
  },
  // 23
  {
    text: "A neighbor is caught hoarding supplies. Do you take some?",
    leftCaption: "Take some supplies",
    rightCaption: "Refuse",
    left: { health: 1, morality: -1 },
    right: { morality: 1, influence: -1 }
  },
  // 24
  {
    text: "N.E.O. officials interrogate you about your recent activity. Do you cooperate?",
    leftCaption: "Cooperate",
    rightCaption: "Stay silent",
    left: { influence: 2, morality: -1 },
    right: { health: -1, morality: 1 }
  },
  // 25
  {
    text: "A black-market dealer offers you a high-value VR module. Do you buy it?",
    leftCaption: "Buy the module",
    rightCaption: "Decline",
    left: { addiction: 2, influence: 1 },
    right: { morality: 1, addiction: -1 }
  },
  // 26
  {
    text: "A N.E.O. officer offers you a deal to spy on your neighbors. Do you accept?",
    leftCaption: "Spy for N.E.O.",
    rightCaption: "Refuse",
    left: { influence: 2, morality: -2 },
    right: { morality: 2, influence: -1 }
  },
  // 27
  {
    text: "Your workplace offers a bonus for overtime, but it risks your health. Do you take it?",
    leftCaption: "Take the overtime",
    rightCaption: "Decline",
    left: { influence: 1, health: -2 },
    right: { health: 2, morality: 1 }
  },
  // 28
  {
    text: "A rebel leader offers to smuggle you out of Rivers. Do you go?",
    leftCaption: "Accept the escape",
    rightCaption: "Stay in Rivers",
    left: { health: -2, morality: 1 },
    right: { influence: 1, morality: -1 }
  },
  // 29
  {
    text: "A family member asks you to lie to N.E.O. officials for their safety. Do you lie?",
    leftCaption: "Lie for them",
    rightCaption: "Refuse to lie",
    left: { morality: -1, influence: 1 },
    right: { morality: 1, health: -1 }
  },
  // 30
  {
    text: "You’re offered a place in a high-level N.E.O. program at the cost of abandoning your ideals. Do you accept?",
    leftCaption: "Join the program",
    rightCaption: "Stick to your ideals",
    left: { influence: 3, morality: -3 },
    right: { morality: 2, health: -1 }
  }
];

// Dynamic Endings
function getEnding() {
  if (addiction > 10) {
    return "You succumbed to the temptations of VR. Your body remains, but your mind is lost.";
  } else if (morality > 15) {
    return "Your ideals inspired others to rise up. You’ve sparked hope for the future.";
  } else if (influence > 15) {
    return "Your cunning secured you a place of power, but your allies are few and your enemies many.";
  } else if (health > 15) {
    return "You survived, but only by putting yourself first. You live to see another day, but at what cost?";
  } else {
    return "Your story ends here. The city of Rivers forgets another soul.";
  }
}

// Intro and character selection
function showCharacterSelect() {
  document.getElementById("intro-screen").classList.add("hidden");
  document.getElementById("character-select-screen").classList.remove("hidden");
}

function selectCharacter(character) {
  if (character === "survivor") {
    health = 15; morality = 10; influence = 5; addiction = 0;
  } else if (character === "activist") {
    health = 8; morality = 15; influence = 5; addiction = 0;
  } else if (character === "opportunist") {
    health = 8; morality = 5; influence = 15; addiction = 0;
  }
  updateStats();
  document.getElementById("character-select-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  updateCard();
}

// Stats and game progression
function updateStats() {
  document.getElementById("health").innerText = health;
  document.getElementById("morality").innerText = morality;
  document.getElementById("influence").innerText = influence;
  document.getElementById("addiction").innerText = addiction;
}

function updateCard() {
  const cardText = document.getElementById("card-text");
  const leftButton = document.getElementById("left-button");
  const rightButton = document.getElementById("right-button");
  const feedback = document.getElementById("feedback");
  const nextButton = document.getElementById("next-button");

  feedback.innerText = "";
  nextButton.style.display = "none";

  if (currentCard < cards.length) {
    cardText.innerText = cards[currentCard].text;
    leftButton.innerText = cards[currentCard].leftCaption;
    rightButton.innerText = cards[currentCard].rightCaption;

    leftButton.style.display = "inline-block";
    rightButton.style.display = "inline-block";
  } else {
    cardText.innerText = getEnding();
    document.querySelectorAll("button").forEach((btn) => btn.style.display = "none");
  }
}

function showFeedback(choice, effects) {
  const feedback = document.getElementById("feedback");
  const nextButton = document.getElementById("next-button");

  let result = `You chose to ${choice}. `;
  if (effects.health) result += `Health: ${effects.health > 0 ? '+' : ''}${effects.health}. `;
  if (effects.morality) result += `Morality: ${effects.morality > 0 ? '+' : ''}${effects.morality}. `;
  if (effects.influence) result += `Influence: ${effects.influence > 0 ? '+' : ''}${effects.influence}. `;
  if (effects.addiction) result += `Addiction: ${effects.addiction > 0 ? '+' : ''}${effects.addiction}. `;

  feedback.innerText = result.trim();
  nextButton.style.display = "inline-block";
}

// Handle choices
function swipeLeft() {
  const effects = cards[currentCard].left;
  health += effects.health || 0;
  morality += effects.morality || 0;
  influence += effects.influence || 0;
  addiction += effects.addiction || 0;
  showFeedback(cards[currentCard].leftCaption, effects);
  updateStats();

  document.getElementById("left-button").style.display = "none";
  document.getElementById("right-button").style.display = "none";
}

function swipeRight() {
  const effects = cards[currentCard].right;
  health += effects.health || 0;
  morality += effects.morality || 0;
  influence += effects.influence || 0;
  addiction += effects.addiction || 0;
  showFeedback(cards[currentCard].rightCaption, effects);
  updateStats();

  document.getElementById("left-button").style.display = "none";
  document.getElementBy
  Id("right-button").style.display = "none"; }

function nextCard() { currentCard++; updateCard(); }

// Initialize the game updateStats(); updateCard();
