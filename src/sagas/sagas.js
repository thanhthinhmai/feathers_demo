import { takeEvery } from 'redux-sagas';
import { fork, call, put } from 'redux-sagas/effects';
import { getRecentRecipes } from '../services/api';
import { browserHistory } from 'react-router';

function* fetchRecentRecipes(feathersApp){
    const recipes = yield call(getRecentRecipes, feathersApp);
    yield put({type:"RECENT_RECIPES_SUCCEE"})
}
function* recentRecipesSaga(feathersApp){
    yield takeEvery("RECENT_RECIPES_REQUESTED", fetchRecentRecipes, feathersApp)
}

export default function root(feathersApp){
    yield [
        fork(recentRecipesSaga, feathersApp)
    ]
}