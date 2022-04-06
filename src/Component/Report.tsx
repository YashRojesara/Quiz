import Chart from "react-google-charts"

interface IReportProps {
  numberOfCorrectAnswers: number,
  numberOfIncorrectAnswers: number
  questions: IQuestion[]
  userInput: string | string[]
}

interface IQuestion {
    questionIndex: number
    answers: string[]
    question: string
    correctAnswer: string | string[]
}

const Report = (obj: IReportProps) => {
    const {numberOfCorrectAnswers, numberOfIncorrectAnswers, questions, userInput} = obj;    
    console.log(questions)
    return (
        <>
            <Chart 
                chartType='PieChart'
                options={{
                    title: 'Result'
                }}
                data={
                    [
                        ['Question', 'Answer'],
                        ['Correct Answer', numberOfCorrectAnswers],
                        ['InCorrect Answer', numberOfIncorrectAnswers]
                    ]
                }
            />
            <div>
                {
                    questions?.map((question: IQuestion, index: number) => {
                        return(
                            <>
                                <div>
                                    {question.questionIndex}: {question.question}
                                </div>
                                <div style={{marginLeft: '2em'}}>
                                    Options: 
                                </div>
                                <div style={{marginLeft: '5em'}}>
                                {
                                    question.answers.map((answer, index) => {
                                        return (
                                            <div>
                                                <div>
                                                    {index+1}: {answer}
                                                </div>                                                
                                            </div>
                                        )
                                    })
                                }
                                </div>
                                <br />
                                <div style={{marginLeft: '5em'}}>
                                    Correct Answer(s): {question.correctAnswer}
                                </div>
                                <div style={{marginLeft: '5em'}}>
                                    User Input: {userInput[index]}
                                </div>
                                <br />
                            </>
                        )
                    })
                }
            </div>
        </>
        
    )
}

export default Report;