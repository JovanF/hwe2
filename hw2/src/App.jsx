import React, { useState } from 'react';
import Flashcard from './Flashcard';

const cards = [
  { question: 'What is the science of the Earth?', answer: 'Geology' },
  { question: 'What is the science of living organisms?', answer: 'Biology' },
  { question: 'What is the science of matter and its interactions?', answer: 'Chemistry' },
  { question: 'What is the science of celestial objects and phenomena beyond Earth?', answer: 'Astronomy' },
  { question: 'What is the science of the physical and natural world?', answer: 'Science' },  
  { question: 'What is the science of motion and forces?', answer: 'Physics' },
  { question: 'What is the science of the environment and ecosystems?', answer: 'Ecology' },
  { question: 'What is the science of heredity and variation in living organisms?', answer: 'Genetics' },
  { question: 'What is the science of microorganisms?', answer: 'Microbiology' },
  { question: 'What is the science of Earth\'s atmosphere?', answer: 'Meteorology' },
  { question: 'What is the science of the smallest particles and their behavior?', answer: 'Physics' },
    { question: 'What is the science of the study of Earth\'s atmosphere and weather?', answer: 'Meteorology' },
    { question: 'What is the science of the study of Earth\'s structure and processes?', answer: 'Geophysics' },
    { question: 'What is the science of the study of the brain and nervous system?', answer: 'Neuroscience' },
    { question: 'What is the science of the study of the origin and evolution of the universe?', answer: 'Cosmology' },
    { question: 'What is the science of the study of ancient life through fossil records?', answer: 'Paleontology' },
    { question: 'What is the science of the study of the interactions between organisms and their environment?', answer: 'Ecology' },
    { question: 'What is the science of the study of the Earth\'s atmosphere and its phenomena?', answer: 'Atmospheric Science' },
    { question: 'What is the science of the study of the origin, evolution, and behavior of celestial objects?', answer: 'Astrophysics' },
    { question: 'What is the science of the study of the motion and properties of fluids?', answer: 'Fluid Dynamics' },

];




const App = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [showQuestion, setShowQuestion] = useState(true);
    const card = cards[currentCardIndex];

    

    const nextCard = () => {
        const newIndex = Math.floor(Math.random() * cards.length);
        setShowQuestion(true);
        setCurrentCardIndex(newIndex);
        console.log(showQuestion);
        <Flashcard card={card} showQuestion={showQuestion}/>
    };

    return (
        <div className = 'app-container'>
          <div className ='headings'>
            <h1> Sciences of the World 🧪 </h1>
            <p>Do you know all these sciences?</p>
          </div>
          <div className = 'card-container'>
            {currentCardIndex === -1 ? (
                <CardSet onStart={() => setCurrentCardIndex(0)}/>) 
                : 
                (<Flashcard card={card} showQuestion={showQuestion}/>
            )}
            <br></br>
            </div>
          <button onClick={nextCard}>Next Card</button>

          <div className='headings'>
            <p>Total Cards in Set: {cards.length}</p>
          </div>
        </div>
    );
};

export default App;