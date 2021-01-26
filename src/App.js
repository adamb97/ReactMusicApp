import {useState} from 'react'
import Player from './components/Player'
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
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState[0];

  const [nextSongIndex, setNextSongIndex] = useState[currentSongIndex + 1];
  
  return (
    <div className="App">
      <Player song={songs[currentSongIndex]} nextSong={songs[nextSongIndex]}> </Player>
    </div>
  );
}

export default App;
