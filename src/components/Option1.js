import React, { useEffect, useState } from 'react';
import { Button,Card } from 'react-bootstrap';

export const Option1 = () => {
    const [turnOn, setTurnOn] = useState(false)
    const [api, setApi] = useState("")

    const handleButton = () => {
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
        <div className="d-inline-flex p-2 bd-highlight" style={{ "marginTop": "40px" }} >

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Presión Directa</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted ">información actualizada</Card.Subtitle>
                    <Card.Text>
                        <Button variant="secondary" onClick={handleButton} > Obtener Datos </Button>

                        <div className="infoConteiner" style={{ "marginTop": "20px", "color":"#0789FC " }}>
                            {turnOn && <h3>
                                {api["Presion Directa"]}
                            </h3>}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )



}