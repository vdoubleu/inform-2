import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

import "../../../styles/components/Pages/landing.css";

const LandingPage = props => {
    const history = useHistory();

    const login = () => {
        history.push("/feed");
    }

    return (
        <div className="container" >
            <div className="row justify-content-center landing-style landing-placement" >
                <Card>
                    <CardBody>
                        <CardTitle> Sign in to use Inform </CardTitle>
                        <CardBody> Choose one of the following sign in methods </CardBody>
                    </CardBody>
                    
                    <button onClick={login} > login </button>
                </Card>
            </div>
        </div>
    );
}

export default LandingPage;
