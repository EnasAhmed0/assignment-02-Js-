// Set the date we're counting down to
var countDownDate = new Date('Jan 14, 2030 15:37:25').getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById('demo').innerHTML =
    days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('demo').innerHTML = 'EXPIRED';
  }
}, 1000);
let title = document.querySelector('.title');
let turn = 'x';
let squares = [];

function end(num1, num2, num3) {
  title.innerHTML = `${squares[num1]} winner`;
  document.getElementById('item' + num1).style.background = '#222';
  document.getElementById('item' + num2).style.background = '#555';
  document.getElementById('item' + num3).style.background = '#552';

  setInterval(function () {
    title.innerHTML += '.';
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);
}

function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById('item' + i).innerHTML;
  }
  if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
    end(1, 2, 3);
  } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '') {
    end(4, 5, 6);
  } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != '') {
    end(7, 8, 9);
  } else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
    end(1, 4, 7);
  } else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != '') {
    end(2, 5, 8);
  } else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != '') {
    end(3, 6, 9);
  } else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != '') {
    end(1, 5, 9);
  } else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != '') {
    end(3, 5, 7);
  }
}

function game(id) {
  let element = document.getElementById(id);
  if (turn === 'o' && element.innerHTML == '') {
    element.innerHTML = 'o';
    turn = 'x';
    title.innerHTML = 'x';
  } else if (turn === 'x' && element.innerHTML == '') {
    element.innerHTML = 'x';
    turn = 'o';
    title.innerHTML = 'o';
  }
  winner();
}

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 0o0;
let minute = 0o0;
let second = 0o0;
let count = 0o0;

startBtn.addEventListener('click', function () {
  timer = true;
  stopWatch();
});

stopBtn.addEventListener('click', function () {
  timer = false;
});

resetBtn.addEventListener('click', function () {
  timer = false;
  hour = 0;
  minute = 0;
  second = 0;
  count = 0;
  document.getElementById('hr').innerHTML = '00';
  document.getElementById('min').innerHTML = '00';
  document.getElementById('sec').innerHTML = '00';
  document.getElementById('count').innerHTML = '00';
});

function stopWatch() {
  if (timer) {
    count++;

    if (count == 100) {
      second++;
      count = 0;
    }

    if (second == 60) {
      minute++;
      second = 0;
    }

    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }

    let hrString = hour;
    let minString = minute;
    let secString = second;
    let countString = count;

    if (hour < 10) {
      hrString = '0' + hrString;
    }

    if (minute < 10) {
      minString = '0' + minString;
    }

    if (second < 10) {
      secString = '0' + secString;
    }

    if (count < 10) {
      countString = '0' + countString;
    }

    document.getElementById('hr').innerHTML = hrString;
    document.getElementById('min').innerHTML = minString;
    document.getElementById('sec').innerHTML = secString;
    document.getElementById('count').innerHTML = countString;
    setTimeout(stopWatch, 10);
  }
}

var quotes = [
  {
    quote: `“كَیۡفَ تَكۡفُرُونَ بِٱللَّهِ وَكُنتُمۡ أَمۡوَ ٰ⁠تࣰا فَأَحۡیَـٰكُمۡۖ ثُمَّ یُمِیتُكُمۡ ثُمَّ یُحۡیِیكُمۡ ثُمَّ إِلَیۡهِ تُرۡجَعُونَ”`,
    writer: ` [البَقَرَةِ : 28]`,
  },
  {
    quote: `How can you disbelieve in Allāh when you were lifeless and He brought you to life; then He will cause you to die, then He will bring you [back] to life, and then to Him you will be returned.`,
    writer: `[البَقَرَةِ : 28]`,
  },
  {
    quote: `“هُوَ ٱلَّذِی خَلَقَ لَكُم مَّا فِی ٱلۡأَرۡضِ جَمِیعࣰا ثُمَّ ٱسۡتَوَىٰۤ إِلَى ٱلسَّمَاۤءِ فَسَوَّىٰهُنَّ سَبۡعَ سَمَـٰوَ ٰ⁠تࣲۚ وَهُوَ بِكُلِّ شَیۡءٍ عَلِیمࣱ .”`,
    writer: `[البَقَرَةِ : 29]`,
  },
  {
    quote: `“It is He who created for you all of that which is on the earth. Then He directed Himself[16] to the heaven, [His being above all creation], and made them seven heavens, and He is Knowing of all things.”`,
    writer: `[البَقَرَةِ : 29]`,
  },
  {
    quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    writer: `― Bernard M. Baruch`,
  },
  {
    quote: `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”`,
    writer: `― William W. Purkey`,
  },
];
const generateQuote = function () {
  const quotes = [
    {
      quote:
        'اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ',
      author: ' [آية الكرسى - البقرة 255]. ',
    },
    {
      quote:
        'أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر',
      author: 'من قالها موقنا بها حين يمسى ومات من ليلته دخل الجنة وكذلك حين يصبح',
    },
    {
      quote:
        'اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ',
      author: 'من قالها موقنا بها حين يمسى ومات من ليلته دخل الجنة وكذلك حين يصبح',
    },
    {
      quote:
        'رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً',
      author: 'من قالها حين يصبح وحين يمسى كان حقا على الله أن يرضيه يوم القيامة.',
    },
    {
      quote:
        'للّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
      author: 'من قالها أعتقه الله من النار.',
    },
    {
      quote:
        'اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر',
      author: 'من قالها حين يصبح أدى شكر يومه.',
    },
    {
      quote:
        'حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
      author: 'من قالها كفاه الله ما أهمه من أمر الدنيا والأخرة.',
    },
    {
      quote:
        'سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه..',
      author: '',
    },
    {
      quote: 'اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد',
      author: '',
    },
  ];

  let arrayIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quotes').innerHTML = quotes[arrayIndex].quote;
  document.getElementById('author').innerHTML = quotes[arrayIndex].author;
};
window.onload = function () {
  generateQuote();
  document.getElementById('generate').addEventListener('click', generateQuote);
};
let counter = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');


// To increment the value of counter
incrementBtn.addEventListener('click', () => {
  counter++;
  counterValue.innerHTML = counter;
});

// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
  counter--;
  counterValue.innerHTML = counter;
});

// To reset the counter to zero
resetBtn.addEventListener('click', reset);

function reset() {
  counter = 0;
  counterValue.innerHTML = counter;
}
