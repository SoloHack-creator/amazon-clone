import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from 'react-router-dom';
import "./Final.css"

function Final() {

    const history = useHistory()
    return (
        <div>
            <h1><strong>ThanK You For Shopping With Us.</strong></h1>

            <Button className="final__button" onClick={() => { history.goBack() }} variant="contained" color="primary">
                Go Back
          </Button>
        </div>
    );
}

export default Final;
