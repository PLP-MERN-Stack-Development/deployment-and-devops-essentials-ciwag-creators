fetch(`${import.meta.env.VITE_BACKEND_URL}/api/congrats`)
  .then(res => res.json())
  .then(data => console.log(data));



export async function getWelcome() {
const res = await fetch(`${API_URL}/api`)
if (!res.ok) throw new Error('API request failed')
return res.json()
}


export async function getHealth() {
const res = await fetch(`${API_URL}/health`)
if (!res.ok) throw new Error('Health check failed')
return res.json()
}