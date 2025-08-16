import React, { useEffect, useState } from 'react'

export default function App() {
  const [message, setMessage] = useState('Loading from backend...')

  useEffect(() => {
    fetch('/api/hello')
      .then(r => r.json())
      .then(d => setMessage(d.message))
      .catch(err => setMessage('Error: ' + err))
  }, [])

  return (
    <div style={{fontFamily: 'sans-serif', padding: 24}}>
      <h1>Sample React Frontend</h1>
      <p>Backend says: <b>{message}</b></p>
      <p>Try local dev:</p>
      <pre>npm install && npm run dev</pre>
    </div>
  )
}
