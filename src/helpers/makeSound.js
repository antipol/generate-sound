import Tone from "tone";

export const makeSound = index => {
  const soundArr = [
    "C3",
    "D3",
    "E3",
    "F3",
    "G3",
    "A3",
    "B3",
    "C4",
    "D4",
    "E4",
    "F4",
    "G4",
    "A4",
    "B4"
  ];
  const synth = new Tone.Synth().toMaster();
  return synth.triggerAttackRelease(soundArr[index], "0.5");
};
