import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = (item) => {
		addToCart(item);
	};

	return (
		<div className={styles.ProductItem} alt={product.title}>
			{product.images[0] && (
				<Image
					src={product.images[0]}
					alt={product.title}
					width={240}
					height={240}
				/>
			)}
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure
					onClick={() => handleClick(product)}
					onKeyDown={() => handleClick(product)}
					aria-hidden="true"
				>
					<Image src={addToCartIcon} alt="" />
				</figure>
			</div>
		</div>
	);
};

export default ProductItem;
