import React, { useContext } from 'react';
import iconClose from '@icons/icon_close.png';
import AppContext from '../context/AppContext';
import Image from 'next/image';
import styles from '../styles/OrderItem.module.scss';

const OrderItem = ({ product, indexValue }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (index) => {
		console.log(index);
		removeFromCart(index);
	};

	return (
		<div className={styles.OrderItem}>
			<figure>
				{product?.images[0] && (
					<Image
						src={product?.images[0]}
						alt={product?.title}
						width={240}
						height={240}
					/>
				)}
			</figure>
			<p>{product?.title}</p>
			<p>{product?.price}</p>
			<Image
				className={(styles.pointer, styles['more-clickable-area'])}
				src={iconClose}
				alt="close"
				onClick={() => handleRemove(indexValue)}
			/>
		</div>
	);
};

export default OrderItem;
