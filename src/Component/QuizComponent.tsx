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

    let selectedLanguage = 'Hindi';
    if (data) {
        selectedLanguage = data.selectedLanguage;
    }

    const reactQuiz = selectedLanguage === 'Hindi' ? hindiQuiz : englishQuiz;

    return (
        <div data-testid='quiz' className={classes.main}>
            <Quiz quiz={reactQuiz} showDefaultResult={false} customResultPage={(obj: any) => Report(obj)} />
        </div>
    )
}

export default QuizComponent;