import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
//This is how we can modify our component to have access to redux
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from './../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from './../../redux/user/user.selector';
import { signOutStart } from './../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>

		<div className="options">
			{currentUser ? (
				<div className="option">
					{' '}
					<span>WELCOME {currentUser.displayName}</span>
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
				<div className="option" onClick={signOutStart}>
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

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
