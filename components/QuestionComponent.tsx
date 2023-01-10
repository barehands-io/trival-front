import styles from "../styles/Home.module.css";

export default function QuestionComponent({ question }: any) {
  // defince choice class for styling
  const choiceStyle = {
    color: "white",
    backgroundColor: "pink",
    padding: "10px",
    fontFamily: "Arial",
  };

  function handleClickChoice(answer: any, e: any) {
    // check if the answer is correct

    const isCorrect = e.target.textContent === answer;

    // if correct, change the background color to green
    if (isCorrect) {
      e.target.style.backgroundColor = "green";
    } else {
      // if incorrect, change the background color to red
      e.target.style.backgroundColor = "red";
    }


    // console.log(e.target.textContent, answer);
  }

  return (
    <div className="space-y-4">
      <div className={`${styles.thirteen} p-4 text-3xl`}>
        {question.question}
      </div>

      <div className="grid grid-cols-4">
        {question.choices.map((choice: any, index: any) => {
          return (
            <div key={index}>
              <div
                onClick={(e) => handleClickChoice(question.answer, e)}
                className="border-2 cursor-pointer border-blue-400 my-10 mx-4 p-4 text-center rounded-lg"
              >
                {choice}
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
