import React from "react"
import { Container, Row, Col, Button, Badge } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useCart } from "react-use-cart"

const Cart = () => {
	const {
		isEmpty,
		totalUniqueItems,
		items,
		totalItems,
		cartTotal,
		updateItemQuantity,
		removeItem
	} = useCart()

	const buy = () => {
		alert("GIVE ME YOUR MONEY!")
	}

	if (isEmpty) return <h1 className="text-center">Cart is empty</h1>
	return (
		<Container
			className="mb-5"
		>
			<h1 className="mb-5">Cart</h1>
			<Row>
				<Col
					xs={12}
					lg={7}
				>
					{items.map((item, index) => {
						return (
							<Row key={index} className="mb-2 align-items-center"
							>
								<Col
									className="product"
									xs={2}
								>
									<LinkContainer to={`/shop/${item.id}`}>
										<img
											className="product-image"
											width={50}
											height={50}
											src={item.thumbnail}
											alt={item.title}
										/>
									</LinkContainer>
								</Col>
								<Col xs={5}>
									<LinkContainer to={`/shop/${item.id}`}>
										<span>
											{item.title}
										</span>
									</LinkContainer>
								</Col>
								<Col
									xs={1}
									className="text-center"
								>
									{item.quantity}
								</Col>
								<Col
									xs={2}
									className="text-center"
								>
									<strong>
										<Badge
											pill
											bg="light"
											text="dark"
											onClick={() =>
												updateItemQuantity(item.id, item.quantity - 1)
											}
										>
											-
										</Badge>
										{' '}
										<Badge
											pill
											bg="light"
											text="dark"
											onClick={() =>
												updateItemQuantity(item.id, item.quantity + 1)
											}
										>
											+
										</Badge>
										{' '}
									</strong>
								</Col>
								<Col
									xs={2}
									className="d-grid justify-content-end"
								>
									<strong>
										${item.price}
									</strong>
								</Col>
							</Row>
						)
					})}
				</Col>
				<Col
					xs={12}
					lg={{ span: 3, offset: 2 }}
				>
					<Row
						className="h-100"
					>
						<Col
							xs={12}
							className="justify-content-end d-grid"
						>
							<strong>
								Total: ${cartTotal}
							</strong>
						</Col>
						<Col
							className="align-content-end d-grid"
						>
							<Button
								className="w-100 mb-2"
								onClick={buy}>
								Checkout
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	)
}

export default Cart
