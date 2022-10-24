import {Howl} from "howler";

export const playKeyPressSound = () => keyPressSound.play();
const keyPressSound = new Howl({src: "sound/keyPress.mp3"})

export const playWrongSound = () => inputWrongSound.play();
const inputWrongSound = new Howl({src: "sound/inputWrong.mp3", volume: 0.4})