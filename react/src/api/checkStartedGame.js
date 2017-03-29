import codeNamesUrl from '../../constants/codeNamesUrl';

let checkStartedGame = () => {
  return fetch(`${codeNamesUrl}/api/v1/games`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
}

export default checkStartedGame;
