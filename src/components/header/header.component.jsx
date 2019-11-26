import React from 'react';
import { Link } from 'react-router-dom';
//This is how we can modify our component to have access to redux
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from './../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from './../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>

		<div className="options">
			{currentUser ? (
				<div className="option">
					{' '}
					<span>Welcome {currentUser.displayName}</span>
				</div>
			) : (
				<div />
			)}
			<Link className="option" to="/shop">
				{' '}
				SHOP
			</Link>
			<Link className="option" to="/contact">
				{' '}
				CONTACT
			</Link>

			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					{' '}
					SIGN OUT
				</div>
			) : (
				<Link className="option" to="/signin">
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</div>
		{hidden ? null : <CartDropdown />}
	</div>
);

//How to get the actual value of the user, as of right now is null
// state is the root reduer

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden
});

export default connect(mapStateToProps)(Header);
