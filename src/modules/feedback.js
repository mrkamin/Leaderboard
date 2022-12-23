import { newScoreForm } from "./varibles.js";

export const displayFeeback = (massege) => {
    const massegeContent = document.createElement('p');

    if (massege.includes('provide')) {
        massegeContent.className = 'error__massege';
        massegeContent.textContent = `You have to add both a user name and a scoror`;
        newScoreForm.append(massegeContent);
    } else {
        massegeContent.className = 'success__massege';
        massegeContent.textContent = `a leaderboard added successfully`;
        newScoreForm.append(massegeContent);
    }

    setTimeout(() => {
        newScoreForm.removeChild(massegeContent);
    }, 3000);
};