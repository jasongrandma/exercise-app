import React, { useState } from 'react';
import './App.css';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';

function App() {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { id: 1, name: 'Push-ups', type: 'repetition' },
    { id: 2, name: 'Running', type: 'duration' },
    { id: 3, name: 'Squats', type: 'repetition' },
    { id: 4, name: 'Plank Hold', type: 'duration' },
    { id: 5, name: 'Burpees', type: 'repetition' },
    { id: 6, name: 'Jumping Jacks', type: 'duration' },
  ];

  const renderTypeSelection = () => (
    <div className="menu-container">
      <h1 className="app-title">Select Exercise Type</h1>
      <div className="type-buttons">
        <button
          className="type-btn type-btn-repetition"
          onClick={() => setSelectedType('repetition')}
        >
          Repetition
        </button>
        <button
          className="type-btn type-btn-duration"
          onClick={() => setSelectedType('duration')}
        >
          Duration
        </button>
      </div>
    </div>
  );

  const renderExerciseList = () => {
    const filteredExercises = exercises.filter((ex) => ex.type === selectedType);

    return (
      <div className="menu-container">
        <button
          className="back-btn"
          onClick={() => setSelectedType(null)}
        >
          ← Back
        </button>
        <h1 className="app-title">{selectedType === 'repetition' ? 'Repetition' : 'Duration'} Exercises</h1>
        <div className="exercises-grid">
          {filteredExercises.map((exercise) => (
            <button
              key={exercise.id}
              className={`exercise-btn exercise-btn-${exercise.type}`}
              onClick={() => setSelectedExercise(exercise)}
            >
              <div className="exercise-name">{exercise.name}</div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderExerciseScreen = () => {
    if (!selectedExercise) return null;

    const { name, type } = selectedExercise;

    return (
      <div className="exercise-screen">
        <button
          className="back-btn"
          onClick={() => setSelectedExercise(null)}
        >
          ← Back
        </button>
        {type === 'repetition' ? (
          <RepetitionExercise name={name} />
        ) : (
          <DurationExercise name={name} />
        )}
      </div>
    );
  };

  let screen = renderTypeSelection();
  if (selectedType && !selectedExercise) {
    screen = renderExerciseList();
  } else if (selectedExercise) {
    screen = renderExerciseScreen();
  }

  return <div className="App">{screen}</div>;
}

export default App;
