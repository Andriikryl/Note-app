import { Form, FormGroup, Stack, Col, Row } from "react-bootstrap";

export function NoteForm() {
  return (
    <Form>
      <Stack gap={4}>
        <Row>
          <Col>
            <FormGroup controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup controlId="tags">
              <Form.Label>Tags</Form.Label>
              <Form.Select required />
            </FormGroup>
          </Col>
        </Row>
      </Stack>
    </Form>
  );
}
