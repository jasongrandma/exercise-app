import React, { useState } from 'react';

function RepetitionExercise({ name }) {
    const [reps, setReps] = useState(0);

    return (
        <div className="exercise-component">
            <h1 className="exercise-title">{name}</h1>
            <div className="counter">{reps}</div>
            <div className="exercise-controls">
                <button className="exercise-btn-action btn-increment" onClick={() => setReps(reps + 1)}>
                    + Rep
                </button>
                <button className="exercise-btn-action btn-reset" onClick={() => setReps(0)}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default RepetitionExercise;
