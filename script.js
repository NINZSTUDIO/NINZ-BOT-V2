let kalkEkspresi = '';

function kalkInput(val) {
  kalkEkspresi += val;
  document.getElementById('kalk-input').value = kalkEkspresi;
}

function kalkHitung() {
  try {
    const hasil = eval(kalkEkspresi);
    document.getElementById('kalk-input').value = hasil;
    kalkEkspresi = hasil.toString();
  } catch {
    document.getElementById('kalk-input').value = 'Error';
    kalkEkspresi = '';
  }
}

function kalkClear() {
  kalkEkspresi = '';
  document.getElementById('kalk-input').value = '';
}

const dataSoal = {
  // Matematika
  '2+2': '4',
  '5*5': '25',
  '10/2': '5',
  // ...
};

// Tambahkan soal lainnya...
for (let i = 1; i <= 100; i++) {
  dataSoal[`${i}+${i}`] = i + i;
  dataSoal[`${i}*${i}`] = i * i;
}

function jawabSoal() {
  const soal = document.getElementById('soal-input').value;
  document.getElementById('loading').style.display = 'block';
  setTimeout(() => {
    if (dataSoal[soal]) {
      document.getElementById('jawaban').innerText = dataSoal[soal];
    } else {
      try {
        const hasil = eval(soal);
        document.getElementById('jawaban').innerText = hasil;
      } catch {
        document.getElementById('jawaban').innerText = 'Maaf, Ninz Bot tidak tahu 😊';
      }
    }
    document.getElementById('loading').style.display = 'none';
  }, 2000);
}
