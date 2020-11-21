import React from 'react';
import { render } from 'react-dom';
import Joke from './Joke/index.jsx';
import { jokes } from './jokes.js';

import './index.html';
import './style.css';

const App = () => {
  return (
    <>
      <div className="container">
        {jokes.map((jokes) => (
          <Joke
            userId={jokes.id}
            userName={jokes.name}
            text={jokes.text}
            likes={jokes.likes}
            dislikes={jokes.dislikes}
          />
        ))}
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
