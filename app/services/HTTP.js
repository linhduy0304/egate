

export function get(url) {
  return fetch(
    url, 
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }
  ).then(res => {
    return res.json()
  })
  .then(res => {
    return res
  })
  .catch(error => {
    return {
      code: 500
    }
  })
}