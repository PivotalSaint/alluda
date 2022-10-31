async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      const script = document.createElement('script');
      script.setAttribute('id', 'script');
    }
    
    const create = document.body.appendChild(script);
    create
  }

document.querySelector('#logout').addEventListener('click', logout);