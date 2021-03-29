import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Option1 } from "./Option1";
import { Option2 } from "./secondOption/Option2";

export const Menu = () => {

    return (
        <>
            <div className="conteinerMenu"   style={{"marginBottom":20}}>
            <Router>
                <div>
                    <Link to="/">
                    <Button variant="secondary"> Inicio </Button>
                    </Link>

                    <Link to="/Option1">
                    <Button variant="primary">Presión Directa</Button>
                    </Link>

                    <Link to="/Option2">

                    <Button variant="primary">Datos extra</Button>

                    </Link>

                </div>

                <Switch>
                    <Route path="/Option1">
                        <Option1 />
                    </Route>
                    <Route path="/Option2">
                        <Option2 />
                    </Route>

                </Switch>
            </Router>
            </div>
        </>
    )


}