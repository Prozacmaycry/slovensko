import {audioFiles} from './audio-data.js';
let currentAudio;
let runtimeAudio={};
export function setLessonAudio(words){runtimeAudio=Object.fromEntries(words.filter(w=>w.audio).map(w=>[w.sk,w.audio]))}
export function stopAudio(){currentAudio?.pause();currentAudio=null;window.speechSynthesis?.cancel()}
export function hasAudio(text){return Boolean(runtimeAudio[text]||audioFiles[text])}
export function playAudio(text,onError){
  stopAudio();
  const source=runtimeAudio[text]||audioFiles[text];
  if(source){
    currentAudio=new Audio(source);
    currentAudio.play().catch(()=>onError('Не удалось воспроизвести запись. Проверьте подключение и попробуйте ещё раз.'));
    return;
  }
  const voice=window.speechSynthesis?.getVoices().find(v=>/^sk(?:[-_]|$)/i.test(v.lang));
  if(!voice){onError('Для собственного слова нужен словацкий голос на устройстве. У слов курса есть готовые записи.');return}
  const utterance=new SpeechSynthesisUtterance(text);utterance.voice=voice;utterance.lang=voice.lang;utterance.rate=.85;
  utterance.onerror=()=>onError('Озвучка недоступна. Попробуйте ещё раз.');
  speechSynthesis.speak(utterance);
}
