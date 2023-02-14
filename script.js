let title = document.querySelector(".title_screen");
let sound1=document.querySelector(".prehistoric-soldier");
let begin = document.querySelector(".begin");
let story_opening = document.querySelector(".story-opening");
let letsgo = document.querySelector(".lets-go-button");
let cutscene1 = document.querySelector(".cutscene1");
let continue1 = document.querySelector(".continue-button-1");
let map1 = document.querySelector(".map-screen");
let volcanic1 = document.querySelector(".volcanic1");
let plant1 = document.querySelector(".plant1");
let gradius1 = document.querySelector(".gradius1");
let cutscenev1 = document.querySelector(".cutscene-volcanic1");
let debrisshoot = document.querySelector(".shoot-debris-a");
let debrisdodge = document.querySelector(".dodge-debris-a");
let cutscenev2 = document.querySelector(".debris-dodge");
let pyrofinish = document.querySelector(".g01");
let pyrodeath = document.querySelector(".game-over-pyro");
let cutscenev3a = document.querySelector(".debris-shoot");
let continue2 = document.querySelector(".continue-button-2");
let cutscenev3b = document.querySelector(".debris-shoot-end-boss");
let returnaftermathp = document.querySelector(".map-button-1");
let cutscenep1 = document.querySelector(".cutscene-flora1");
let continue3 = document.querySelector(".continue-button-3");
let cutscenep2 = document.querySelector(".army-conflict");
let capsuleignore = document.querySelector(".capsule-ignore");
let capsulecollect = document.querySelector(".capsule-collect");
let cutscenep3 = document.querySelector(".army-cignore-end");
let florafinish =document.querySelector(".g02");
let floradeath = document.querySelector(".game-over-flora");
let cutscenep4a = document.querySelector(".army-ccollect");
let continue4 = document.querySelector(".continue-button-4");
let cutscenep4b = document.querySelector(".flora-end-boss");
let returntoaftermathf=document.querySelector(".map-button-2");
let cliffhanger = document.querySelector(".aftermath");
let continue5 = document.querySelector(".continue-button-5");
let plotwist = document.querySelector(".plot-twist");
let continue6 = document.querySelector(".continue-button-6");
let cliffhanger2 = document.querySelector(".cliffhanger2");
let continue7 = document.querySelector(".continue-button-7");
let endgame=document.querySelector(".game-over-special");

console.log(sound1);

begin.onclick = function() {
    console.log("click");
    story_opening.style.display = "block";
    title.style.display = "none";
    sound1.src="https://vgmsite.com/soundtracks/gradius-ultimate-collection/enxpgqsy/6-42%20-%20A%20Journey%20to%20the%20Start%20%28Air%20Battle%202%29.mp3";
    sound1.load();
};

letsgo.onclick = function() {
    map1.style.display = "block";
    story_opening.style.display = "none";
    sound1.src="https://vgmsite.com/soundtracks/gradius-ultimate-collection/furkuiqh/1-15%20-%20Equipment%20%28Select%29.mp3";
    sound1.load();
};

gradius1.onclick = function() {
    cutscene1.style.display = "block";
    map1.style.display = "none";
    sound1.src="https://vgmsite.com/soundtracks/gradius-ultimate-collection/sqiouzjo/4-41%20-%20Strangers%20in%20Time%20Space%20%28Warp%20Demo%29.mp3";
    sound1.load();
};

continue1.onclick = function() {
    map1.style.display = "block";
    cutscene1.style.display = "none";
    sound1.src="https://vgmsite.com/soundtracks/gradius-ultimate-collection/furkuiqh/1-15%20-%20Equipment%20%28Select%29.mp3";
    sound1.load();
};

volcanic1.onclick = function() {
    cutscenev1.style.display = "block";
    map1.style.display = "none";
    sound1.src="https://vgmsite.com/soundtracks/gradius-ultimate-collection/rniobsmt/1-17%20-%20Burning%20Heat%20%28Stage%201%20BGM%29.mp3";
    sound1.load();
};

debrisdodge.onclick = function() {
    cutscenev2.style.display = "block";
    cutscenev1.style.display = "none";
    
};

pyrofinish.onclick = function(){
pyrodeath.style.display = "block";
    cutscenev2.style.display = "none";
    sound1.src="https://vgmsite.com/soundtracks/gradius-ultimate-collection/lpckejvd/6-51%20-%20Mirage%20%28Game%20Over%29.mp3";
    sound1.load();
};

debrisshoot.onclick = function() {
    cutscenev3a.style.display = "block";
    cutscenev1.style.display = "none";
};

continue2.onclick = function() {
    cutscenev3b.style.display = "block";
    cutscenev3a.style.display = "none";
    sound1.src="https://vgmsite.com/soundtracks/gradius-ultimate-collection/anlfaost/1-42%20-%20Dark%20Force%20%28Boss%29.mp3";
    sound1.load();
    
};

returnaftermathp.onclick = function() {
    cliffhanger.style.display = "block";
    cutscenev3b.style.display = "none";
    sound1.src="https://vgmsite.com/soundtracks/gradius-ultimate-collection/hustywux/1-66%20-%20NO%20USE%203%20%28Unused%203%29.mp3";
    sound1.load();

};


plant1.onclick = function() {
    cutscenep1.style.display = "block";
    map1.style.display = "none";
    sound1.src="https://vgmsite.com/soundtracks/gradius-ultimate-collection/qjpjnsnn/1-49%20-%20Cosmo%20Plant%20%28Stage%208%20BGM%29.mp3";
    sound1.load();
};

continue3.onclick = function() {
    cutscenep2.style.display = "block";
    cutscenep1.style.display = "none";
};

capsuleignore.onclick=function(){
    cutscenep3.style.display="block";
    cutscenep2.style.display="none";
};

florafinish.onclick=function(){
floradeath.style.display="block";
    cutscenep3.style.display="none";
    sound1.src="https://vgmsite.com/soundtracks/gradius-ultimate-collection/lpckejvd/6-51%20-%20Mirage%20%28Game%20Over%29.mp3";
    sound1.load();
};

capsulecollect.onclick=function(){
    cutscenep4a.style.display="block";
    cutscenep2.style.display="none";
};

continue4.onclick=function(){
    cutscenep4b.style.display="block";
    cutscenep4a.style.display="none";
    sound1.src="https://vgmsite.com/soundtracks/gradius-ultimate-collection/yvhoihmf/1-53%20-%20Boss%20on%20Parade%20BGM%203%20%28Boss%20on%20Parade%203%29.mp3";
    sound1.load();
};

returntoaftermathf.onclick=function(){
cliffhanger.style.display="block";
    cutscenep4b.style.display="none";
    sound1.src="https://vgmsite.com/soundtracks/gradius-ultimate-collection/hustywux/1-66%20-%20NO%20USE%203%20%28Unused%203%29.mp3";
    sound1.load();
};

continue5.onclick=function(){
plotwist.style.display="block";
    cliffhanger.style.display="none";
    sound1.src="https://vgmsite.com/soundtracks/gradius-ultimate-collection/zsizsyxo/6-35%20-%20Odysseus%20%28Story%20Demo%202%29.mp3";
    sound1.load();
};

continue6.onclick=function(){
cliffhanger2.style.display="block";
    plotwist.style.display="none";
};

continue7.onclick=function(){
endgame.style.display="block";
    cliffhanger2.style.display="none";
    sound1.src="https://vgmsite.com/soundtracks/gradius-ultimate-collection/lpckejvd/6-51%20-%20Mirage%20%28Game%20Over%29.mp3";
    sound1.load();
};