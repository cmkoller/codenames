import codeNamesUrl from '../../constants/codeNamesUrl';

let checkStartedGame = () => {
  return fetch(`${codeNamesUrl}/games`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
}

export default checkStartedGame;
