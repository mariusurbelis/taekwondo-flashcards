import React, {
  Component
} from 'react';
import './App.css';
import Flashcard from './components/Flashcard';

class App extends Component {

  state = {
    flashcards: [
      {
        id: 1,
        english: 'Inner Forearm',
        korean: 'An Palmok',
        flip: false
      },
      {
        id: 2,
        english: 'Outer Forearm',
        korean: 'Bakat Palmok',
        flip: false
      },
      {
        id: 3,
        english: 'Obverse Punch',
        korean: 'Baro Jirugi',
        flip: false
      },
      {
        id: 4,
        english: 'Hand Parts',
        korean: 'Sang Bansin',
        flip: false
      },
      {
        id: 5,
        english: 'Obverse',
        korean: 'Baro',
        flip: false
      },
      {
        id: 6,
        english: 'Reverse',
        korean: 'Bandae',
        flip: false
      },
      {
        id: 7,
        english: 'Forefist High Front Punch',
        korean: 'Napunde Ap Jirugi',
        flip: false
      },
      {
        id: 8,
        english: 'Side Piercing Kick',
        korean: 'Yop Cha Jirugi',
        flip: false
      },
      {
        id: 9,
        english: 'Turning Kick',
        korean: 'Dollyo Chagi',
        flip: false
      }
    ]
  }

  flipCard = (id) => {
    this.setState({flashcards: this.state.flashcards.map(card => {
      if(card.id === id) {
        card.flip = !card.flip
      }
      return card;
    })});
    console.log(id)
  }

  render() {

    console.log(this.state.todos)

    return ( 
      <div className = "App" >
        <h1>Taekwondo Flashcards</h1>
        <Flashcard flashcards = {this.state.flashcards} flipCard = {this.flipCard} />
        <p>More cards coming soon</p>
      </div>
    );
  }
}

export default App;