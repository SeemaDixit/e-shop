import { createSelector } from 'reselect';
import collectionItem from '../../components/collection-item/collection-item';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => {
        return shop.collections
    }
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(
        key => collectionItem[key]
    )
)

export const selectCollection = (collectionUrlParam) => createSelector (
    [selectCollections],
    (collections) => {
        //console.log(collectionUrlParam);
        return collections[collectionUrlParam]
    }
)