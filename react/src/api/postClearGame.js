import codeNamesUrl from '../../constants/codeNamesUrl';

let postClearGame = () => {
  return fetch(`${codeNamesUrl}/games/1`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
}

export default postClearGame;
