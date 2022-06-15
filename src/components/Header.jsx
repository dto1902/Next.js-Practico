/** @format */

import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/Menu';
import AppContext from '@context/AppContext';
import iconMenu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import MyOrder from '@containers/MyOrder';
import styles from '@styles/Header.module.scss';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toogleOrders, setToogleOrders] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggle);
	};

	return (
		<nav className={styles.Nav}>
			<Image src={iconMenu} alt="menu" className={styles.menu} />
			<div className={styles['navbar-left']}>
				<Link href="/">
					<Image
						src={logo}
						alt="logo"
						className={styles['nav-logo']}
					/>
				</Link>
				<ul>
					<li>
						<Link href="/" onClick={() => console.log('hola')}>
							All
						</Link>
					</li>
					<li>
						<Link href="/" onClick={() => console.log('hola')}>
							Clothes
						</Link>
					</li>
					<li>
						<Link href="/" onClick={() => console.log('hola')}>
							Electronics
						</Link>
					</li>
					<li>
						<Link href="/" onClick={() => console.log('hola')}>
							Furnitures
						</Link>
					</li>
					<li>
						<Link href="/" onClick={() => console.log('hola')}>
							Toys
						</Link>
					</li>
					<li>
						<Link href="/" onClick={() => console.log('hola')}>
							Others
						</Link>
					</li>
				</ul>
			</div>
			<div className={styles['navbar-right']}>
				<ul>
					<li
						className={styles['navbar-email']}
						onClick={handleToggle}
						onKeyDown={handleToggle}
						aria-hidden="true"
					>
						platzi@example.com
					</li>
					<li
						className={styles['navbar-shopping-cart']}
						onClick={() => setToogleOrders(!toogleOrders)}
                        onKeyDown={() => setToogleOrders(!toogleOrders)}
                        aria-hidden="true"
					>
						<Image src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? (
							<div>{state.cart.length}</div>
						) : null}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toogleOrders && <MyOrder />}
		</nav>
	);
};

export default Header;
