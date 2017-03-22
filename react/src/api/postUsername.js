import codeNamesUrl from '../../constants/codeNamesUrl';

let postUsername = (username) => {
  let body = JSON.stringify({ player: {
      username: username
    }
  });

  return fetch(`${codeNamesUrl}/api/v1/players`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body
  });
}

export default postUsername;
