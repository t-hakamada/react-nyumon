import {connect} from 'react-redux';
import Ranking from '../components/Ranking';
import * as actions from '../actions/Ranking';

// Reducerを定義後に実装
const mapStateToProps = (state: any, ownProps: any) => ({
  categoryId: ownProps.categoryId
});

const mapDispatchToProps = (dispatch: any) => ({
  // onMountとonUpdateとfetchRankingを継続
  onMount(categoryId: any) {
    dispatch(actions.fetchRanking(categoryId));
  },
  onUpdate(categoryId: any) {
    dispatch(actions.fetchRanking(categoryId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
