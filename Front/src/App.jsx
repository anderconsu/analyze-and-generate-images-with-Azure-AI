import './App.css'
import analizeImage from './azure-image-analysis'
import { useState } from 'react'

function App() {
  const [imageUrl, setImageUrl] = useState("")
  const [response, setResponse] = useState("")
  const [image, setImage] = useState("")
  const analize = async () => {
    try {
      const fetchResponse = await analizeImage(imageUrl)
      setResponse(fetchResponse)
      setImage(imageUrl)
    }
    catch (error) {
      console.log('error:', error)
    }
  }
  return (
    <>
      <h1>Computer vision</h1>
      <p>Insert URL, or type prompt</p>
      <input type="text" name="prompt" onChange={(e) => setImageUrl(e.target.value)} />
      <br />
      <button onClick={analize}>Analize</button>
      <button>Generate</button>
      {image && (
        <img src={image} />
      )}
      {response && (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      )}

    </>
  )
}

export default App
