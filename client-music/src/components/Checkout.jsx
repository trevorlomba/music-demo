import { Component, React } from 'react'
import commerce from '../lib/commerce'

class Checkout extends Component {
	constructor(props) {
		super(props)

		this.state = {
			checkoutToken: {},
			// Customer details
			firstName: 'Jane',
			lastName: 'Doe',
			email: 'janedoe@email.com',
			// Shipping details
			shippingName: 'Jane Doe',
			shippingStreet: '123 Fake St',
			shippingCity: 'San Francisco',
			shippingStateProvince: 'CA',
			shippingPostalZipCode: '94107',
			shippingCountry: 'US',
			// Payment details
			cardNum: '4242 4242 4242 4242',
			expMonth: '11',
			expYear: '2023',
			ccv: '123',
			billingPostalZipcode: '94107',
			// Shipping and fulfillment data
			shippingCountries: {},
			shippingSubdivisions: {},
			shippingOptions: [],
			shippingOption: '',
		}
		this.handleFormChanges = this.handleFormChanges.bind(this)
	}

	/**
	 *  Generates a checkout token
	 *  https://commercejs.com/docs/sdk/checkout#generate-token
	 */
	generateCheckoutToken() {
		const { cart } = this.props
		if (cart.line_items.length) {
			return commerce.checkout
				.generateToken(cart.id, { type: 'cart' })
				.then((token) => this.setState({ checkoutToken: token }))
				.then(() => this.fetchShippingCountries(this.state.checkoutToken.id))
				.catch((error) => {
					console.log('There was an error in generating a token', error)
				})
		}
	}

	/**
	 * Fetches a list of countries available to ship to checkout token
	 * https://commercejs.com/docs/sdk/checkout#list-available-shipping-countries
	 *
	 * @param {string} checkoutTokenId
	 */
	fetchShippingCountries(checkoutTokenId) {
		commerce.services
			.localeListShippingCountries(checkoutTokenId)
			.then((countries) => {
				this.setState({
					shippingCountries: countries.countries,
				})
			})
			.catch((error) => {
				console.log(
					'There was an error fetching a list of shipping countries',
					error
				)
			})
	}

	/**
	 * Fetches the subdivisions (provinces/states) in a country which
	 * can be shipped to for the current checkout
	 * https://commercejs.com/docs/sdk/checkout#list-subdivisions
	 *
	 * @param {string} countryCode
	 */
	fetchSubdivisions(countryCode) {
		commerce.services
			.localeListSubdivisions(countryCode)
			.then((subdivisions) => {
				this.setState({
					shippingSubdivisions: subdivisions.subdivisions,
				})
			})
			.catch((error) => {
				console.log('There was an error fetching the subdivisions', error)
			})
	}

	/**
	 * Fetches the available shipping methods for the current checkout
	 * https://commercejs.com/docs/sdk/checkout#get-shipping-methods
	 *
	 * @param {string} checkoutTokenId
	 * @param {string} country
	 * @param {string} stateProvince
	 */
	fetchShippingOptions(checkoutTokenId, country, stateProvince = null) {
		commerce.checkout
			.getShippingOptions(checkoutTokenId, {
				country: country,
				region: stateProvince,
			})
			.then((options) => {
				const shippingOption = options[0] || null
				this.setState({
					shippingOptions: options,
					shippingOption: shippingOption,
				})
			})
			.catch((error) => {
				console.log('There was an error fetching the shipping methods', error)
			})
	}

	sanitizedLineItems = (lineItems) => {
		return lineItems.reduce((data, lineItem) => {
			const item = data
			let variantData = null
			if (lineItem.selected_options.length) {
				variantData = {
					[lineItem.selected_options[0].group_id]:
						lineItem.selected_options[0].option_id,
				}
			}
			item[lineItem.id] = {
				quantity: lineItem.quantity,
				variants: variantData,
			}
			return item
		}, {})
	}

	handleCaptureCheckout = e => {
		e.preventDefault()
		const orderData = {
			line_items: this.sanitizedLineItems(this.props.cart.line_items),
			customer: {
				firstname: this.state.firstName,
				lastname: this.state.lastName,
				email: this.state.email,
			},
			shipping: {
				name: this.state.shippingName,
				street: this.state.shippingStreet,
				town_city: this.state.shippingCity,
				county_state: this.state.shippingStateProvince,
				postal_zip_code: this.state.shippingPostalZipCode,
				country: this.state.shippingCountry,
			},
			fulfillment: {
				shipping_method: this.state.shippingOption.id,
			},
			payment: {
				gateway: 'test_gateway',
				card: {
					number: this.state.cardNum,
					expiry_month: this.state.expMonth,
					expiry_year: this.state.expYear,
					cvc: this.state.ccv,
					postal_zip_code: this.state.billingPostalZipcode,
				},
			},
		}
        console.log(orderData)
        console.log(this.state.checkoutToken)
        console.log(this.state.checkoutToken.id)
		this.props.onCaptureCheckout(this.state.checkoutToken.id, orderData)
	}

	renderCheckoutForm() {
		return (
			<form className='checkout__form'>
				<h4 className='checkout__subheading'>Customer information</h4>

				<label className='checkout__label' htmlFor='firstName'>
					First name
				</label>
				<input
					className='checkout__input'
					type='text'
					value={this.state.firstName}
					onChange={this.handleFormChanges}
					name='firstName'
					placeholder='Enter your first name'
					required
				/>

				<label className='checkout__label' htmlFor='lastName'>
					Last name
				</label>
				<input
					className='checkout__input'
					type='text'
					value={this.state.lastName}
					name='lastName'
					onChange={this.handleFormChanges}
					placeholder='Enter your last name'
					required
				/>

				<label className='checkout__label' htmlFor='email'>
					Email
				</label>
				<input
					className='checkout__input'
					type='text'
					value={this.state.email}
					name='email'
					onChange={this.handleFormChanges}
					placeholder='Enter your email'
					required
				/>

				<h4 className='checkout__subheading'>Shipping details</h4>

				<label className='checkout__label' htmlFor='shippingName'>
					Full name
				</label>
				<input
					className='checkout__input'
					type='text'
					value={this.state.shippingName}
					name='shippingName'
					onChange={this.handleFormChanges}
					placeholder='Enter your shipping full name'
					required
				/>

				<label className='checkout__label' htmlFor='shippingStreet'>
					Street address
				</label>
				<input
					className='checkout__input'
					type='text'
					value={this.state.shippingStreet}
					name='shippingStreet'
					onChange={this.handleFormChanges}
					placeholder='Enter your street address'
					required
				/>

				<label className='checkout__label' htmlFor='shippingCity'>
					City
				</label>
				<input
					className='checkout__input'
					type='text'
					value={this.state.shippingCity}
					name='shippingCity'
					onChange={this.handleFormChanges}
					placeholder='Enter your city'
					required
				/>

				<label className='checkout__label' htmlFor='shippingPostalZipCode'>
					Postal/Zip code
				</label>
				<input
					className='checkout__input'
					type='text'
					value={this.state.shippingPostalZipCode}
					name='shippingPostalZipCode'
					onChange={this.handleFormChanges}
					placeholder='Enter your postal/zip code'
					required
				/>

				<label className='checkout__label' htmlFor='shippingCountry'>
					Country
				</label>
				<select
					value={this.state.shippingCountry}
					name='shippingCountry'
					onChange={this.handleShippingCountryChange}
					className='checkout__select'>
					<option disabled>Country</option>
					{Object.keys(this.state.shippingCountries).map((index) => {
						return (
							<option value={index} key={index}>
								{this.state.shippingCountries[index]}
							</option>
						)
					})}
					;
				</select>

				<label className='checkout__label' htmlFor='shippingStateProvince'>
					State/province
				</label>
				<select
					value={this.state.shippingStateProvince}
					name='shippingStateProvince'
					onChange={this.handleSubdivisionChange}
					className='checkout__select'>
					<option className='checkout__option' disabled>
						State/province
					</option>
					{Object.keys(this.state.shippingSubdivisions).map((index) => {
						return (
							<option value={index} key={index}>
								{this.state.shippingSubdivisions[index]}
							</option>
						)
					})}
					;
				</select>

				<label className='checkout__label' htmlFor='shippingOption'>
					Shipping method
				</label>
				<select
					value={this.state.shippingOption.id}
					name='shippingOption'
					onChange={this.handleFormChanges}
					className='checkout__select'>
					<option className='checkout__select-option' disabled>
						Select a shipping method
					</option>
					{this.state.shippingOptions.map((method, index) => {
						return (
							<option
								className='checkout__select-option'
								value={method.id}
								key={
									index
								}>{`${method.description} - $${method.price.formatted_with_code}`}</option>
						)
					})}
					;
				</select>

				<h4 className='checkout__subheading'>Payment information</h4>

				<label className='checkout__label' htmlFor='cardNum'>
					Credit card number
				</label>
				<input
					className='checkout__input'
					type='text'
					name='cardNum'
					onChange={this.handleFormChanges}
					value={this.state.cardNum}
					placeholder='Enter your card number'
				/>

				<label className='checkout__label' htmlFor='expMonth'>
					Expiry month
				</label>
				<input
					className='checkout__input'
					type='text'
					name='expMonth'
					onChange={this.handleFormChanges}
					value={this.state.expMonth}
					placeholder='Card expiry month'
				/>

				<label className='checkout__label' htmlFor='expYear'>
					Expiry year
				</label>
				<input
					className='checkout__input'
					type='text'
					name='expYear'
					onChange={this.handleFormChanges}
					value={this.state.expYear}
					placeholder='Card expiry year'
				/>

				<label className='checkout__label' htmlFor='ccv'>
					CCV
				</label>
				<input
					className='checkout__input'
					type='text'
					name='ccv'
					onChange={this.handleFormChanges}
					value={this.state.ccv}
					placeholder='CCV (3 digits)'
				/>

			<button onClick={this.handleCaptureCheckout} className="checkout__btn-confirm">Confirm order</button>
            </form>
		)
	}

	handleFormChanges(e) {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	handleShippingCountryChange(e) {
		const currentValue = e.target.value
		this.fetchSubdivisions(currentValue)
	}

	handleSubdivisionChange(e) {
		const currentValue = e.target.value
		this.fetchShippingOptions(
			this.state.checkoutToken.id,
			this.state.shippingCountry,
			currentValue
		)
	}

	componentDidMount() {
		this.generateCheckoutToken()
        console.log('Checkout component')
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.shippingCountry !== prevState.shippingCountry) {
			this.fetchShippingOptions(
				this.state.checkoutToken.id,
				this.state.shippingCountry
			)
		}
	}

	render() {
		return this.renderCheckoutForm()
	}
}

export default Checkout
