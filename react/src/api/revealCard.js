import codeNamesUrl from '../../constants/codeNamesUrl';

let revealCard = (id) => {
  let body = JSON.stringify({ card: {
      revealed: true
    }
  });

  return fetch(`${codeNamesUrl}/api/v1/cards/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body
  });
}

export default revealCard;
