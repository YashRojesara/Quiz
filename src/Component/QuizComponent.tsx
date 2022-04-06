import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router-dom";
import Quiz from 'react-quiz-component';
import { englishQuiz, hindiQuiz } from "./constants";
import Report from "./Report";

const useStyles = makeStyles({
    main: {
        display: "flex",
    }
})

const QuizComponent: React.FC = () => {
    const classes = useStyles();
    const { state} = useLocation();
    const data = state as any;

    let selectedLanguage = 'English';
    let name = '';
    let gender = '';
    if (data) {
        selectedLanguage = data.selectedLanguage;
        name = data.name;
        gender = data.gender
    }

    const reactQuiz = selectedLanguage === 'Hindi' ? hindiQuiz : englishQuiz;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div data-testid='identity' style={{fontSize: '20px', fontWeight: 'bold'}}>Hello {name}-{gender}</div>
            <div data-testid='quiz' className={classes.main}>
                <Quiz quiz={reactQuiz} showDefaultResult={false} customResultPage={(obj: any) => Report(obj)} />
            </div>
        </div>
        
    )
}

export default QuizComponent;