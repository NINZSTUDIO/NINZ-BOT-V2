// Loading
setTimeout(() => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
}, 2000);

// Chatbot
function sendMessage() {
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");
  const question = input.value.trim();

  if (!question) return;

  chatbox.innerHTML += `<div><b>You:</b> ${question}</div>`;

  let answer;
  try {
    answer = eval(question);
  } catch {
    answer = "Soal tidak valid. Gunakan format matematika.";
  }

  chatbox.innerHTML += `<div><b>Ninz Bot:</b> ${answer}</div>`;
  chatbox.scrollTop = chatbox.scrollHeight;
  input.value = "";
}

// Calculator
function addCalc(val) {
  document.getElementById("calcDisplay").value += val;
}

function calculate() {
  try {
    document.getElementById("calcDisplay").value =
      eval(document.getElementById("calcDisplay").value);
  } catch {
    document.getElementById("calcDisplay").value = "Error";
  }
}

function clearCalc() {
  document.getElementById("calcDisplay").value = "";
}
