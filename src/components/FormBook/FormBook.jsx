import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";


export function FormBook() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };


  const [states, setStates] = useState([]);
  const [cidade, setCidade] = useState([])

  const fecchCidade = (sigla) => {
    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}/municipios`
    fetch(url)
      .then((response) => response.json())
      .then(data => {
        setCidade(data)
      })
  }


  useEffect(() => {
    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setStates(data);
      });

  }, []);


  return (
    <>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Título</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="título"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Autor</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="autor"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Estado</Form.Label>
            <Form.Select aria-label="Default select example"
              onChange={element => {
                let si = element.target.value;
                fecchCidade(si)
              }}>

              <option disabled>Selecione...</option>
              {states.map(estado => <option key={estado.sigla} value={estado.sigla}>{estado.nome}</option>)}

            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Cidade</Form.Label>
            <Form.Select aria-label="Default select example">
              {cidade.map(city => <option key={city.nome} value={city.nome}>{city.nome}</option>)}
            </Form.Select>
          </Form.Group>

        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    </>
  );
}
