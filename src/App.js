// import logo from './logo.svg';
import './App.scss';
import reactions from './images/icon-reaction.svg';
import memories from './images/icon-memory.svg';
import verbals from './images/icon-verbal.svg';
import visuals from './images/icon-visual.svg';


function App() {
  return (
    <div className="container">
      <div className='result'>
        <h3>Your Result</h3>
        <div className='score'>
          <h1>76</h1>
          <p>of 100</p>
        </div>
        <div className='text'>
          <h2>Great</h2>
          <p>Your score higher than 65% of the people who have taken this tests</p>
        </div>
      </div>

      <div className='summary'>
        <div className='content'>
        <h3>Summary</h3>
        <div className='point'>
          <div className='reaction info'>
            <img src={reactions} alt="Deskripsi Gambar" />
            <p>Reaction</p>
            <p><strong>80</strong> / 100</p>
          </div>
          <div className='memory info'>
            <img src={memories} alt="Deskripsi Gambar" />
            <p>Memory</p>
            <p><strong>92</strong> / 100</p>
          </div>
          <div className='verbal info'>
            <img src={verbals} alt="Deskripsi Gambar" />
            <p>Verbal</p>
            <p><strong>61</strong> / 100</p>
          </div>
          <div className='visual info'>
            <img src={visuals} alt="Deskripsi Gambar" />
            <p>Visual</p>
            <p><strong>72</strong> / 100</p>
          </div>
        </div>
        <button><h3>Continue</h3></button>
        </div>
      </div>
    </div>
  );
}

export default App;
