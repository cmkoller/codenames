import codeNamesUrl from '../../constants/codeNamesUrl';

let postUsername = (username) => {
  let body = JSON.stringify({ player: {
      username: username
    }
  });

  return fetch(`${codeNamesUrl}/players`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body
  });
}

export default postUsername;
