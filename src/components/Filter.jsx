import React, { useState } from "react"
import { Form } from "react-bootstrap"

const Filter = (props) => {
    const [state, setState] = useState({})
    const brands = [...new Set(props.data.map(el => el.brand.toLowerCase()))]

    const filterBrands = (array, e) => {

    }

    const handleSort = e => {
        switch (e.target.value) {
            case 'price_lth':
                setState({ data: state.data.sort(({ price: a }, { price: b }) => a - b) })
                break
            case 'price_htl':
                setState({ data: state.data.sort(({ price: a }, { price: b }) => b - a) })
                break
            default:
                setState({ data: state.data.sort(({ rating: a }, { rating: b }) => a - b) })
        }
    }    

    return (
        <Form.Group className="mb-3">
            <Form.Label>Brands</Form.Label>
            <Form.Select onChange={(e) => filterBrands(brands, e)}>
                <option defaultValue>All Products</option>
                {brands.map(el => (
                    <option key={el}>{el}</option>
                ))}
            </Form.Select>
            <Form.Label>Sort:</Form.Label>
            <Form.Select onChange={(e) => handleSort(e)}>
                <option defaultValue value="rating" key={1}>Rating</option>
                <option value="price_lth" key={2}>Price: low to high</option>
                <option value="price_htl" key={3}>Price: high to low</option>
            </Form.Select>            
        </Form.Group>
    )
}

export default Filter
