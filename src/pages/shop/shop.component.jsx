import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

import CollectionsOverview from './../../components/collections-overview/collections-overview.componennt';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

class ShopPage extends React.Component {
	unsubscribeFromSnapshot = null;

	componentWillMount() {
		const collectionRef = firestore.collection('collections');
		collectionRef.onSnapshot(async (snapshot) => {
			convertCollectionsSnapshotToMap(snapshot);
		});
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} componen={CollectionsOverview} />
				<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
			</div>
		);
	}
}

export default ShopPage;
