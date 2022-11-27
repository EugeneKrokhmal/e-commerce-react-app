import React from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

function LoginScreen(response) {
	console.log(response)

	return (
		<Container>
			<Row className="justify-content-center">
				<Col xs={6}>
					<h1>Login with Email</h1>
					<Form className="mb-5">
						<Form.Group
							className="mb-3"
							controlId="formBasicEmail"
						>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
							/>
						</Form.Group>

						<Form.Group
							className="mb-3"
							controlId="formBasicPassword"
						>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
							/>
						</Form.Group>
						<Button
							variant="primary"
							type="submit"
						>
							Submit
						</Button>
					</Form>
					<h2>Login with Google</h2>
					<Form>
					</Form>
				</Col>
			</Row>
		</Container>
	)
}

export default LoginScreen