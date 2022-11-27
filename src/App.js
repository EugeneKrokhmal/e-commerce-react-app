import React, { useEffect, useState } from "react"
import axios from "axios"
import './App.css';
import Navigation from './components/Navigation'
import { CartProvider } from "react-use-cart"

function App() {
	const [state, setState] = useState({
		data: []
	})

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/`)
            .then(res => {
                setState({ data: res.data.products, loading: true })
            })
            .catch(() => {

            })
    }, [])
	
	return (
		<div>
			<CartProvider>
				<Navigation data={state.data} />
			</CartProvider>
		</div>
	);
}

export default App;
