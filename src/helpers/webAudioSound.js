const AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();
const osc = ctx.createOscillator();

export const startTone = (freq, e) => {
  osc.frequency.value = 100;
  osc.start(0);
  osc.connect(ctx.destination);
};

export const endTone = e => osc.stop(0);
