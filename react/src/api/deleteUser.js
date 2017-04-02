import codeNamesUrl from '../../constants/codeNamesUrl';

let deleteUser = (username) => {
  return fetch(`${codeNamesUrl}/api/v1/players/${username}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
}

export default deleteUser;
