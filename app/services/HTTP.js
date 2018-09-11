

export function post(url, data) {
  return fetch(
    url, 
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
  ).then(res => {
    return res.json()
  })
  .then(res => {
    return res
  })
  .catch(error => {
    return {
      status: 500
    }
  })
}

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
      status: 500
    }
  })
}