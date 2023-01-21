import {
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import "./DashboardQuestionPaper.css";
import { Key } from "react";

interface IntrinsicAttributes {
  questionid: number;
  question: string;
  questiontype: string;
  attributetype: number;
  validation: boolean;
  questionoption: any;
}

interface Props {
  currentObject: IntrinsicAttributes;
  onAnswerSelect: (answer: string) => void;
}
const DashboardQuestionPaper = (props: Props) => {
  const { currentObject, onAnswerSelect } = props;

  return (
    <>
      <Typography variant="h5">MCQ</Typography>
      <Divider style={{ margin: 6 }} />

      <Typography>{currentObject?.question}</Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={(e) => onAnswerSelect(e.target.value)}
        >
          {currentObject?.questionoption.map(
            (option: {
              optionid: Key | null | undefined;
              optionvalue: string;
            }) => (
              <FormControlLabel
                key={option.optionid}
                value={option.optionvalue}
                control={<Radio />}
                label={option.optionvalue}
              />
            )
          )}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default DashboardQuestionPaper;
