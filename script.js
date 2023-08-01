
let grandReport = document.querySelector('p')
const quiet = document.getElementById('quiet')
const loud = document.getElementById('loud')
const xloud = document.getElementById('badloud')
const study = document.getElementById('study')
const goodhw = document.getElementById('goodhw')
const badhw = document.getElementById('badhw')
const songs = document.getElementById('songs')
const confident = document.getElementById('confident')
const sp = document.getElementById('sp')
const rw = document.getElementById('rw')
const sankan = document.getElementById('sankan')
const helpful = document.getElementById('helpful')
const summer = document.getElementById('summer')
const male = document.getElementById('boy')
const female = document.getElementById('girl')
const winter = document.getElementById('winter')

let boy = ["He", "his", "he", "him"];
let girl = ["She", "her", "she", "her"]


document.getElementById('myButton').onclick = function(){

  let studentName = document.getElementById('name').value;
  let term = document.querySelector('input[type="radio"][class="term"]:checked').value;
  let role = document.getElementById('role').value;

  if (male.checked === true){
    let genderStart = boy[0];
    let genderPosessive = boy[1];
    let genderMid = boy[2];
    let genderSubject = boy[3];

    grandReport.innerText = `${studentName} did a really great job during the ${term}! ${genderStart} did a wonderful job during our play Thumbelina as ${role}.`
    if (sankan.checked === true) {
      grandReport.innerText += ` ${genderStart} prepared really hard for the ${term} sankan, and I'm glad that you all got to see ${genderSubject} speak English so proudly. `;}
    if (quiet.checked === true) {
      grandReport.innerText += ` ${genderStart} started out really quiet during the lessons, but has started talking a lot more in smaller groups.`;}
    if (loud.checked === true) {
      grandReport.innerText += ` ${genderStart} does a really good job answering questions with a big voice in class. ${studentName} has shown to be a great leader during our lessons. `;}
    if (xloud.checked === true) {
      grandReport.innerText += ` ${genderStart} is often speaking up in class and is very energetic. Sometimes, it can distract the kids, but I am happy that ${genderMid} boosts the confidence of ther students in class. `;}
    if (study.checked === true) {
      grandReport.innerText += ` ${genderStart} has been studying really hard in class, and is always paying attention during the lesson. I think this helped them learn new sight word cards really quickly.`;}
    if (goodhw.checked === true) {
      grandReport.innerText += ` I am really happy to see how beautifully ${studentName} writes in English.${genderStart} always writes letters in the correct order and takes the time to make ${genderPosessive} sentences look nice. `} 
    if (badhw.checked === true) {
      grandReport.innerText += `I can tell there has been some improvement, but ${studentName} could still use more help with ${genderPosessive} handwriting skills. Keep on practicing hard! `}
    if (songs.checked === true) {
      grandReport.innerText += ` ${genderStart} also has been learning the words to the songs we've been studying in the ${term}. I hope that ${genderMid} keeps on doing well in the next term too!` }
    if (sp.checked === true) {
      grandReport.innerText += ` I am also happy that ${studentName} is in my Special English class too. I can tell that ${genderPosessive} speaking has gotten better thanks to these classes. ` }
    if (rw.checked === true) {
      grandReport.innerText += ` ${genderStart} has also been doing really well in the Reading/Writing classes. Keep on studying hard! ` }
    if (helpful.checked === true) {
      grandReport.innerText += ` ${genderStart} is really kind in our class too. ${studentName} is always willing to help me and other students with activities and cleaning. ` }
    if (summer.checked === true) {
      grandReport.innerText += ` Thank you for doing your best in the ${term}! Please have a safe summer and take care!  ` }
    if (winter.checked === true) {
      grandReport.innerText += ` Please be safe during the winter vacation! Have a Merry Christmas and Happy New Year! See you in 2023!`
    }
  }
  if (female.checked === true){
    let genderStart = girl[0];
    let genderPosessive = girl[1];
    let genderMid = girl[2];
    let genderSubject = girl[3];

    grandReport.innerText = `${studentName} did a really great job during the ${term}! ${genderStart} did a wonderful job during our play Thumbelina as ${role}.`
    if (sankan.checked === true) {
      grandReport.innerText += ` ${genderStart} prepared really hard for the ${term} sankan, and I'm glad that you all got to see ${genderSubject} speak English so proudly. `;}
    if (quiet.checked === true) {
      grandReport.innerText += ` ${genderStart} started out really quiet during the lessons, but has started talking a lot more in smaller groups.`;}
    if (loud.checked === true) {
      grandReport.innerText += ` ${genderStart} does a really good job answering questions with a big voice in class. ${studentName} has shown to be a great leader during our lessons. `;}
    if (xloud.checked === true) {
      grandReport.innerText += ` ${genderStart} is often speaking up in class and is very energetic. Sometimes, it can distract the kids, but I am happy that ${genderMid} boosts the confidence of ther students in class. `;}
    if (study.checked === true) {
      grandReport.innerText += ` ${genderStart} has been studying really hard in class, and is always paying attention during the lesson. I think this helped them learn new sight word cards really quickly.`;}
    if (goodhw.checked === true) {
      grandReport.innerText += ` I am really happy to see how beautifully ${studentName} writes in English.${genderStart} always writes letters in the correct order and takes the time to make ${genderPosessive} sentences look nice. `} 
    if (badhw.checked === true) {
      grandReport.innerText += `I can tell there has been some improvement, but ${studentName} could still use more help with ${genderPosessive} handwriting skills. Keep on practicing hard! `}
    if (songs.checked === true) {
      grandReport.innerText += ` ${genderStart} also has been learning the words to the songs we've been studying in the ${term}. I hope that ${genderMid} keeps on doing well in the next term too!` }
    if (sp.checked === true) {
      grandReport.innerText += ` I am also happy that ${studentName} is in my Special English class too. I can tell that ${genderPosessive} speaking has gotten better thanks to these classes. ` }
    if (rw.checked === true) {
      grandReport.innerText += ` ${genderStart} has also been doing really well in the Reading/Writing classes. Keep on studying hard! ` }
    if (helpful.checked === true) {
      grandReport.innerText += ` ${genderStart} is really kind in our class too. ${studentName} is always willing to help me and other students with activities and cleaning. ` }
    if (summer.checked === true) {
      grandReport.innerText += ` Thank you for doing your best in the ${term}! Please have a safe summer and take care!  ` }
    if (winter.checked === true) {
      grandReport.innerText += ` Please be safe during the winter vacation! Have a Merry Christmas and Happy New Year! See you in 2023!`
    }
  }

}
