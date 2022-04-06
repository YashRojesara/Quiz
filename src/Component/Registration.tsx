import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    main: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    margin: {
        marginTop: '1em',        
    }
})

const Registration: React.FC = () => {
    const classes = useStyles()
    const navigate = useNavigate();

    const [name, setName] = useState<string>('');
    const GenderArray = ['Male', 'Female']
    const [gender, setGender] = useState<string>(GenderArray[0]);    
    const LanguageArray = ['English', 'Hindi']
    const [selectedLanguage, setSelectedLanguage] = useState(LanguageArray[0])

    const onButtonClick = () => {
        const data = {
            name,selectedLanguage,gender
        }
        
        navigate('/quiz', { state: data})
    }

    return (
        <div className={classes.main}>
            <Typography variant="h2">
                Registration Form
            </Typography>
            <TextField inputProps={{ 'data-testid': 'name-search-input' }}  margin="normal" value={name} onChange={(e) => setName(e.target.value)} label="Enter Your Name" variant="outlined" />

            <div data-testid='gender' className={classes.margin}>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    value={gender}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    onChange={(x) => setGender(x.target.value)}
                >
                    {GenderArray.map((x) => {
                        return (
                            <FormControlLabel key={x} value={x} control={<Radio />} label={x} />
                        )})
                    }
                </RadioGroup>
            </FormControl>        
            </div>
            
            <div data-testid='language' className={classes.margin}>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedLanguage}
                    label="Age"
                    onChange={(e) => {setSelectedLanguage(e.target.value)}}
                >
                    {LanguageArray.map((x) => {
                        return (
                            <MenuItem key={x} value={x}>{x}</MenuItem>
                        )
                    })
                    }                
                </Select>
            </FormControl>
            </div>
            <div className={classes.margin}>
                <Button data-testid="next" onClick={onButtonClick} variant='outlined' color='secondary' disabled={name ? false : true} >Next</Button>
            </div>
        </div>
    )
}
    
export default Registration;