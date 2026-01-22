import react from 'react'
import './App.css'
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Track from './components/Track';

function App() {

  const TrackListing  = [{name : '', artist: '', album:''}];

  return (
    <>
  
      <div>
        <input type="text" /><br />
        <button>Search</button>
      </div>
      <div>
        <button>Save To Spotify </button>
      </div>
       <SearchResults TrackListing={TrackListing} />
       <Playlist TrackListing={TrackListing}/>
       <Track />
    </>
  )
}

export default App
