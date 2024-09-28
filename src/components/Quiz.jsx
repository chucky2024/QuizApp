import { useState } from "react";
import {Questions} from "./Question";

const Quiz = () => {

    const  [currentQuestions,setCurrentQuestions] = useState(0);
    const [scores,setScores] = useState(0);
    

    return (
      <>
        
          <div>
            <h2>{Questions[currentQuestions].questionText}</h2>
            {/* {currentQuestion.options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))} */}
          </div>
        
          <div>
            <h2>Quiz Finished!</h2>
            {/* <p>Your score: {score} out of {questions.length}</p>
            <button onClick={restartQuiz}>Restart Quiz</button>  */}
          </div>
      
      </>
    );
  }
  
  export default  Quiz