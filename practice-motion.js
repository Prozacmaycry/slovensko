// Small, cancellable practice transitions. No animation library is needed.
const running=new Set();
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const easeOut='cubic-bezier(0.23, 1, 0.32, 1)';
export function cancelPracticeMotion(){for(const animation of running)animation.cancel();running.clear()}
function animate(element,frames,duration,keyboard=false){
 if(!element||keyboard||!element.animate)return Promise.resolve();
 const animation=element.animate(frames,{duration:reduced.matches?120:duration,easing:easeOut});
 running.add(animation);
 return animation.finished.catch(()=>{}).finally(()=>running.delete(animation));
}
export function enterQuestion(keyboard=false){return animate(document.querySelector('.question-card, .practice-shell .empty-state'),reduced.matches?[{opacity:0},{opacity:1}]:[{opacity:0,transform:'perspective(1000px) translateY(40px) translateZ(40px) scale(0.94) rotateX(-5deg)'},{opacity:1,transform:'perspective(1000px) translateY(0) scale(1) rotateX(0deg)'}],450,keyboard)}
export function exitQuestion(keyboard=false){return animate(document.querySelector('.question-card'),reduced.matches?[{opacity:1},{opacity:0}]:[{opacity:1,transform:'perspective(1000px) translateY(0) scale(1) rotateX(0deg)'},{opacity:0,transform:'perspective(1000px) translateY(-48px) translateZ(-160px) scale(0.9) rotateX(8deg)'}],400,keyboard)}
export function answerFeedback(keyboard=false){return animate(document.querySelector('.feedback'),reduced.matches?[{opacity:0},{opacity:1}]:[{opacity:0,transform:'scale(0.97)'},{opacity:1,transform:'scale(1)'}],180,keyboard)}
export function enterSurface(element,keyboard=false){return animate(element,reduced.matches?[{opacity:0},{opacity:1}]:[{opacity:0,transform:'translateY(6px)'},{opacity:1,transform:'translateY(0)'}],180,keyboard)}
export function modalMotion(element,opening,keyboard=false){const frames=reduced.matches?[{opacity:0},{opacity:1}]:[{opacity:0,transform:'scale(0.97)'},{opacity:1,transform:'scale(1)'}];return animate(element,opening?frames:[...frames].reverse(),opening?200:160,keyboard)}
