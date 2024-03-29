import React from 'react'
import PropTypes from 'prop-types'
import ProductItem from './ProductItem'

const ProductsList = ({ products, onAddToCart }) => {
	return (
		<div className='products' id='products'>
			{products.map((product) => (
				<ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
			))}
		</div>
	)
}

ProductsList.propTypes = {
	products: PropTypes.array,
}

export default ProductsList
