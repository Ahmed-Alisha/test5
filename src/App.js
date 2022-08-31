import { useRef } from 'react'



function App() {


  const localVideoRef = useRef()
  const remoteVideoRef = useRef()

  const getUserMedia = () => 
  {
    const constraints = {
                        audio: false,
                        video: true,
                        }
  
    navigator.mediaDevices.getUserMedia(constraints)

    .then(stream => {localVideoRef.current.srcObject = stream}) // display video
    
    .catch(e => {console.log('getUserMedia Error ...', e)})

  }

  return (
    <div style={{ margin: 10 }}>
      <button onClick={() => getUserMedia()}> Vedio access </button>
      <video 
            style={{
                    width: 1280,height: 720, 
                    margin: 5, backgroundColor: 'black'
                  }} ref={localVideoRef} autoPlay> </video>

      <video 
            style={{
              width: 1280,height: 720, 
              margin: 5, backgroundColor: 'black'
            }} ref={remoteVideoRef} autoPlay> </video>
    </div>
  );
}

export default App;
