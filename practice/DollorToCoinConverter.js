import { useState, useEffect } from 'react';

function DollorToCoinConverter() {
	const [loading, setLoading] = useState(true); // is coinAPI loaded
	const [isSelect, setIsSelect] = useState(false); // is valid option selected
	const [coins, setCoins] = useState([]); // coin infor object array
	const [input, setInput] = useState(0); // user input(dollors)
	const [coinProps, setCoinProps] = useState({ price: 0, name: '' }); // selected coin object that has 2 field: price, name

	useEffect(() => {
		fetch('https://api.coinpaprika.com/v1/tickers')
			.then((response) => response.json())
			.then((json) => {
				setCoins(json);
				setLoading(false);
			});
	}, []);

	function onChange(event) {
		setInput(event.target.value);
	}

	function onSelect(event) {
		const coinInfor = JSON.parse(event.target.value);
		setInput(0);

		setIsSelect(true);
		setCoinProps((prevState) => {
			return { ...prevState, price: coinInfor.quotes.USD.price, name: coinInfor.name };
		});
	}

	return (
		<div>
			<h1>Converter: Dollors to Coins</h1>
			{loading ? (
				<strong>Loading...</strong>
			) : (
				<select onChange={onSelect}>
					<option key="initial" disabled={isSelect}>
						Select which coin do you want
					</option>
					{coins.map((item, index) => (
						<option key={index} value={JSON.stringify(item)}>
							{item.name} ({item.symbol}): {item.quotes.USD.price} USD
						</option>
					))}
				</select>
			)}

			<hr />
			<div>
				<div>
					<span>How much do you have?</span>
					<input onChange={onChange} value={input} type="number" />
				</div>
				<h1>You have '{input}' $</h1>
				{isSelect ? (
					<h1>
						You can buy <span style={{ color: 'red' }}>'{Math.floor(input / coinProps.price)}'</span> {coinProps.name}
					</h1>
				) : null}
			</div>
		</div>
	);
}

export default DollorToCoinConverter;
