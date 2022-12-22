import './index.css';
import { addMyNewScore, getAllMyGameScores } from './modules/score';
import { newScoreForm, newRefBtn } from './modules/varibles.js';

newScoreForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const myUserInput = newScoreForm.elements.user;
  const myScoreInput = newScoreForm.elements.score;

  const newScore = {
    user: myUserInput.value,
    score: Number(myScoreInput.value),
  };

  addMyNewScore(newScore);

  myUserInput.value = '';
  myScoreInput.value = '';
});

newRefBtn.addEventListener('click', getAllMyGameScores);

window.onload = () => {
  getAllMyGameScores();
};