import React from "react";
import { Route } from "react-router-dom";
import CategoryPage from "../category/category.component";

import CollectionsOverview from "./../../components/collections-overview/collections-overview.componennt";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} componen={CollectionsOverview} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
);

export default ShopPage;
