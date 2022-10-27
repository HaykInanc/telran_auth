export const auth = (auth_data, callback) => {
    fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(auth_data)
    }).then(resp => resp.json())
      .then(data => callback(data))
}