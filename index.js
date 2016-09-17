const app = "I don't do much.";

const digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking: function() {
    setInterval(() => this.time += 1, 1000)
  }
}

function censor(word, sentence) {
  return sentence.split(word).join('BLEEP')
}

const violenceCensor = censor.bind(null, 'violence')
const drugsCensor = censor.bind(null, 'drugs')
