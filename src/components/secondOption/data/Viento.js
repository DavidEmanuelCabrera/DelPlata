import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';


export const Viento = () => {
    const [turnOn, setTurnOn] = useState(false)//change the state of the button
    const [api, setApi] = useState("")

    const handleButton = () => {//change the state of the button
        setTurnOn(!turnOn)
    }

    useEffect(
        () => {

            fetch("http://api.tenlek.com/a70da940ce76c1217f03376a3ac725fc/t")
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setApi(data)
                })
        },
        [],
    );



    return (
        <div className="buttonConteiner d-inline-flex p-2 bd-highlight" style={{ "marginTop": "40px" }} >
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Viento</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">información actualizada</Card.Subtitle>
                    <Card.Text>
                        <h3>
                            {api["Viento"]}
                        </h3>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}