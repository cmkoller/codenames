import codeNamesUrl from '../../constants/codeNamesUrl';

let deleteUser = (username) => {
  let body = JSON.stringify({ player: {
      username: username
    }
  });

  return fetch(`${codeNamesUrl}/players/${username}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body
  });
}

export default deleteUser;
