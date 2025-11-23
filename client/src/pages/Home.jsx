import { useEffect, useState } from 'react'
import { getWelcome, getHealth } from '../api'


export default function Home() {
const [message, setMessage] = useState('')
const [health, setHealth] = useState(null)


useEffect(() => {
getWelcome().then(d => setMessage(d.message)).catch(() => setMessage('Could not reach API'))
}, [])


const checkHealth = async () => {
try {
const h = await getHealth()
setHealth(h)
} catch (err) {
setHealth({ status: 'DOWN' })
}
}


return (
<div>
<h1>BioVerse Academy</h1>
<p className="lead">Learn biology with clear lessons and practical examples.</p>
<section>
<h2>API Message</h2>
<p>{message || 'Loading...'}</p>
</section>


<section>
<h2>Health Check</h2>
<button onClick={checkHealth}>Run Health Check</button>
{health && <pre>{JSON.stringify(health, null, 2)}</pre>}
</section>
</div>
)
}