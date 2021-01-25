import {useState} from 'react'
function App() {
  const [songs, setSongs] = useState([
    {
      Title: "Wake up",
      Artist: "Arcade Fire",
      img_src: "./img/image.jpg",
      src: "public/audio/What a beautiful Sunset! (radio mix) - Angelwing.wav"
    },
    {
      Title: "Song2",
      Artist: "Arcade Fire",
      img_src: "./img/image.jpg",
      src: "public/audio/What a beautiful Sunset! (radio mix) - Angelwing.wav"
    },
    {
      Title: "Song3",
      Artist: "Arcade Fire",
      img_src: "./img/image.jpg",
      src: "public/audio/What a beautiful Sunset! (radio mix) - Angelwing.wav"
    },
    {
      Title: "Song5",
      Artist: "Arcade Fire",
      img_src: "./img/image.jpg",
      src: "public/audio/What a beautiful Sunset! (radio mix) - Angelwing.wav"
    }
  ])
  return (
    <div className="App">
      COMPOMENETS HERE
    </div>
  );
}

export default App;
