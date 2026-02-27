import React, { useState, useEffect } from 'react';

function DurationExercise({ name }) {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        const paddedMinutes = minutes.toString().padStart(2, '0');
        const paddedSeconds = secs.toString().padStart(2, '0');
        return `${paddedMinutes}:${paddedSeconds}`;
    };

    return (
        <div className="exercise-component">
            <h1 className="exercise-title">{name}</h1>
            <div className="timer">{formatTime(seconds)}</div>
            <div className="exercise-controls">
                <button
                    className={`exercise-btn-action ${isRunning ? 'btn-stop' : 'btn-start'}`}
                    onClick={() => setIsRunning(!isRunning)}
                >
                    {isRunning ? 'Stop' : 'Start'}
                </button>
                <button className="exercise-btn-action btn-reset" onClick={() => {
                    setIsRunning(false);
                    setSeconds(0);
                }}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default DurationExercise;
