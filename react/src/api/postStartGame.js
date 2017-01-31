import codeNamesUrl from '../../constants/codeNamesUrl';

let postStartGame = () => {
  return fetch(`${codeNamesUrl}/games`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
}

export default postStartGame;
