import codeNamesUrl from '../../constants/codeNamesUrl';

let postStartGame = () => {
  return fetch(`${codeNamesUrl}/api/v1/games`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
}

export default postStartGame;
