import React, { useState } from "react";
import { TextField, Typography, Grid, Container } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { Button } from "./Button";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .MuiFormHelperText-root": {
      color: "white",
    },
  },
}));
export interface SubmitFormProps {}

export const SubmitForm: React.FC<SubmitFormProps> = () => {
  const classes = useStyles();
  const [feedback, setFeedback] = useState<string>("");
  const [submit, setSubmit] = useState(false);

  const [hasFocus, setHasFocus] = useState(false);
  const handleSubmit = async() => {
    if (feedback !== "") 
        console.log({"feedback": feedback});
        alert("Submitted successfully")
};
  
  return (
    <Container className="form_container">
      <Typography variant="h4">Submit your feedback here!</Typography>
      {submit ? (
        <Grid>
          Congratulations! Your project has been submitted successfully.
        </Grid>
      ) : null}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Project Name"
            fullWidth
            error={hasFocus && feedback === ""}
            value={feedback}
            className={hasFocus && feedback === "" ? "" : classes.root}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </Grid>
      </Grid>
      <Button
        backgroundColor="limegreen"
        label="Submit"
        onClick={handleSubmit}
        primary
        size="medium"
      />
    </Container>
  );
};