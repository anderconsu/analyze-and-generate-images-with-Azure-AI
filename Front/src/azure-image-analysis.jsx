
const key = import.meta.env.VITE_VISION_KEY;
const endpoint = import.meta.env.VITE_VISION_ENDPOINT;

const analizeImage = async (imageUrl) => {
    try {        
        const response = await fetch(`${endpoint}/computervision/imageanalysis:analyze?features=caption,read&model-version=latest&language=en&api-version=2023-02-01-preview`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': key
            },
            body: JSON.stringify({
                "url": imageUrl
            })
        });
        console.log('response:', response)
        const data = await response.json();
        console.log(data)
        return data    
    }
    catch (error) {
        console.log('error:', error)
    }
}

export default analizeImage