import React from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from './../../components/collections-overview/collections-overview.componennt';
import WithSpinner from './../../components/with-spinner/with-spinner.component';
import { fetchCollectionsStartAsync } from './../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}

	render() {
		const { match, isCollectionFetching, selectIsCollectionsLoaded } = this.props;

		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => <CollectionPageWithSpinner isLoading={!selectIsCollectionsLoaded} {...props} />}
				/>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching,
	selectIsCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => fetchCollectionsStartAsync()
});
export default connect(null, mapStateToProps, mapDispatchToProps)(ShopPage);
