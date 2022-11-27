import React from "react"
import { Row, Col, Button, Badge } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useCart } from "react-use-cart"

const Minicart = () => {
	const {
		isEmpty,
		items,
		cartTotal,
		updateItemQuantity,
	} = useCart()

	if (isEmpty) return <h1 className="text-center">Cart is empty</h1>
	return (
		<div
			className="mb-5"
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
								<small>
									{item.title}
								</small>
							</LinkContainer>
						</Col>
						<Col
							xs={1}
							className="text-center p-0"
						>
							<small>{item.quantity}</small>
						</Col>
						<Col
							xs={2}
							className="text-center p-0"
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
							className="d-flex justify-content-end"
						>
							<strong>
								${item.price}
							</strong>
						</Col>
					</Row>
				)
			})}
			<Row
				className="pt-5 mb-2"
			>
				<Col
					xs={12}
					className="justify-content-end d-flex mb-5"
				>
					<strong>
						Total: ${cartTotal}
					</strong>
				</Col>
				<Col
				>
                <LinkContainer to="/cart">
					<Button
						className="w-100"
					>
						View Cart
					</Button>
                </LinkContainer>
				</Col>
			</Row>
		</div>
	)
}

export default Minicart
