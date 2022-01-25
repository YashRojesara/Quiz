import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router-dom";
import Quiz from 'react-quiz-component';
import { englishQuiz, hindiQuiz } from "./constants";
import Report from "./Report";
// import CustomResultPage from "./CustomResultPage";

const useStyles = makeStyles({
    main: {
        display: "flex",
    }
})

const Quizz: React.FC = () => {
    const classes = useStyles();
    const { state} = useLocation();
    const data = state as any;

    const {selectedLanguage} = data;
    const reactQuiz = selectedLanguage === 'Hindi' ? hindiQuiz : englishQuiz;

    return (
        <div className={classes.main}>
            <Quiz quiz={reactQuiz} showDefaultResult={false} customResultPage={(obj: any) => Report(obj)} />
        </div>
    )
}

export default Quizz;