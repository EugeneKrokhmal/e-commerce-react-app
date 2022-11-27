import React, { useState, useEffect } from "react"
import axios from "axios"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"
import { Nav, Navbar, NavDropdown, Container, Offcanvas, Row } from "react-bootstrap"
import { useCart } from "react-use-cart"

import HomePage from "./HomePage"
import ShopAll from "./ShopAll/ShopAll"
import ProductPage from "./ProductPage"
import AboutScreen from "./AboutScreen"
import Blog from "./Blog"
import Cart from "./Cart"
import Minicart from "./Minicart"
import LoginScreen from "./LogInScreen"
import ProductCategoryList from "./ProductCategoryList"
import BlogPost from "./BlogPost"

const Navigation = (props) => {
	const { totalUniqueItems, totalItems } = useCart()
	const [show, setShow] = useState(false)
	const [state, setState] = useState([])
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const renderCategories = data => {
		let categories = []

		data.forEach(element => {
			categories.push(element.category)
		})

		return [...new Set(categories)]
	}

	return (
		<Router>
			<Navbar
				fixed="top"
				collapseOnSelect
				expand="lg"
				bg="light"
				variant="white"
			>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>Hello, Mate!</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle
						aria-controls="responsive-navbar-nav"
						className="border-0"
					/>
					<Row className="w-100">
						<Navbar.Collapse
							id="responsive-navbar-nav"
						>
							<Nav className="me-auto">
								<LinkContainer to="/shop">
									<Nav.Link>Shop All</Nav.Link>
								</LinkContainer>
								<NavDropdown title="Shop Category" id="collasible-nav-dropdown">
									{renderCategories(props.data).map((el, i) => {
										return (
											<LinkContainer
												to={`/${el}`}
												key={i}
											>
												<NavDropdown.Item
													className="text-capitalize"
												>
													{el}
												</NavDropdown.Item>
											</LinkContainer>
										)
									})}
								</NavDropdown>
								<LinkContainer to="/about">
									<Nav.Link>About</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/blog">
									<Nav.Link>Blog</Nav.Link>
								</LinkContainer>
							</Nav>
							<Nav
								className="align-items-lg-center minicart"
							>
								<span
									className="minicart-icon"
									onClick={handleShow}
								>
									{totalItems > 0 ?
										<label>{totalItems}</label> : ''
									}
									<svg
										width="26px"
										height="26px"
										viewBox="0 0 96 96"
										xmlns="http://www.w3.org/2000/svg"
									>
										<defs>
											<clipPath id="clip-cart">
												<rect width="96" height="96" />
											</clipPath>
										</defs>
										<g id="cart" clipPath="url(#clip-cart)">
											<g id="pills" transform="translate(0 -116)">
												<g id="Group_154" data-name="Group 154">
													<path id="Path_188" data-name="Path 188" d="M92,132H84.619a8.361,8.361,0,0,0-7.956,5.47L63.712,174.53A8.364,8.364,0,0,1,55.755,180H21.321a8.4,8.4,0,0,1-7.773-4.994l-8.925-21C2.387,148.746,6.445,143,12.4,143H57" fill="none" stroke="#58595b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
													<circle id="Ellipse_335" data-name="Ellipse 335" cx="4.5" cy="4.5" r="4.5" transform="translate(20 187)" fill="none" stroke="#58595b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
													<circle id="Ellipse_336" data-name="Ellipse 336" cx="4.5" cy="4.5" r="4.5" transform="translate(49 187)" fill="none" stroke="#58595b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
												</g>
											</g>
										</g>
									</svg>
								</span>
								<Offcanvas
									placement={'end'}
									show={show}
									onHide={handleClose}
								>
									<Offcanvas.Header closeButton>
										<Offcanvas.Title>
											<LinkContainer to="/cart">
												<Nav.Link>Cart</Nav.Link>
											</LinkContainer>
										</Offcanvas.Title>
									</Offcanvas.Header>
									<Offcanvas.Body>
										<Minicart />
									</Offcanvas.Body>
								</Offcanvas>
								<LinkContainer to="/login">
									<Nav.Link>Login</Nav.Link>
								</LinkContainer>
							</Nav>
						</Navbar.Collapse>
					</Row>
				</Container>
			</Navbar>

			<div className="main-content">
				<Routes>
					<Route exact path="/" element={<HomePage data={props.data} />} />
					<Route path="/shop" element={<ShopAll data={props.data} />} />
					<Route path="/shop/:productId" element={<ProductPage data={props.data} />} />
					<Route path="/blog/:postId" element={<BlogPost />} />
					<Route path=":category" element={<ProductCategoryList data={props.data} />} />
					<Route path="/about" element={<AboutScreen />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/login" element={<LoginScreen />} />
				</Routes>
			</div>
		</Router>
	)
}

export default Navigation
