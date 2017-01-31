import codeNamesUrl from '../../constants/codeNamesUrl';

let postTeamRole = (userData) => {
  let { username, team, role, ready } = userData;

  let body = JSON.stringify({ player: {
      team: team,
      role: role,
      ready: ready
    }
  });

  return fetch(`${codeNamesUrl}/players/${username}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body
  });
}

export default postTeamRole;
