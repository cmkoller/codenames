import codeNamesUrl from '../../constants/codeNamesUrl';

let postTeamRole = (userData) => {
  let { username, team, role, ready } = userData;

  let body = JSON.stringify({
    team: team,
    role: role,
    ready: ready
  });

  return fetch(`${codeNamesUrl}/api/v1/players/${username}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body
  });
}

export default postTeamRole;
