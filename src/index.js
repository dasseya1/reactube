import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1n027DP0_5Ss';

const App = () => (
  <div>
      <SearchBar />
  </div>
    
);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
