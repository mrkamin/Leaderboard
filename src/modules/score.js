import { newScoreList, apiEndpoint, apiGameUrl } from './varibles.js';
import { displayFeeback } from './feedback.js';

export const showScores = ({ user, score }) => {
  const myelement = document.createElement('div');
  myelement.className = 'score__item__par';
  myelement.innerHTML = `
  <div class="score__item"><i class="fa-solid fa-user-tie"></i><p class="name">${user}</p><p class="score">${score}</p></div>
    `;

  return myelement;
};

export const getAllMyGameScores = async () => {
  try {
    const rest = await fetch(apiEndpoint);
    const myData = await rest.json();

    if (!rest.ok) {
      return myData;
    }

    const myScores = myData.result;

    newScoreList.innerHTML = '';
    myScores.forEach((element) => {
      newScoreList.append(showScores(element));
    });

    return myScores;
  } catch (error) {
    return error;
  }
};

export const addMyNewScore = async (myNewScore) => {
  try {
    const rest = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myNewScore),
    });
    const myData = await rest.json();

    if (!rest.ok) {
      displayFeeback(myData.message);
      return myData;
    }

    displayFeeback(myData.result);
    return myData;
  } catch (error) {
    return error;
  }
};

export const createMyNewGame = async () => {
  const newGame = {
    name: 'Mohammad Rafi Amin Game',
  };

  try {
    const rest = await fetch(apiGameUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newGame),
    });

    const myData = await rest.json();

    if (!rest.ok) {
      return myData;
    }
    return myData;
  } catch (error) {
    return error;
  }
};