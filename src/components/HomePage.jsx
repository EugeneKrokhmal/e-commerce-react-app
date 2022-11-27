import React from "react"
import { Container, Carousel, Col, Row } from "react-bootstrap"
import Product from "./Product"

const HomePage = (props) => {
	return (
		<Container
			className="d-flex flex-column justify-content-center align-items-center"
		>
			<h1 className="mb-5">Hello, mate!</h1>
			<hr />
			<Carousel variant="dark w-100">
				{props.data.map((item, index) => (
					<Carousel.Item>
						<Row>

								<Col xs={6}>
									<Product
										className="mb-4 product"
										item={item}
									/>
								</Col>

								<Col
									xs={6}>
									<Product
										className="mb-4 product"
										item={item}
									/>
								</Col>

						</Row>
					</Carousel.Item>
				))}
			</Carousel>
		</Container>
	)
}

export default HomePage
