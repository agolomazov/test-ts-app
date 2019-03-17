import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { fetchCurrent } from './ducks';
import { Post } from './types';
import { State } from '../../store/rootReducer';
import { Loading } from '../../common/components/Loading';

class BlogPage extends React.Component<RouteComponentProps<any> & StateProps & DispatchProps> {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetch(id);
  }

  render() {
    const { loading, currentPost } = this.props;
    return (
      <div>
        {currentPost && (
          <Fragment>
            <h1 className="post-card__title">{currentPost.title}</h1>
            <div className="post__content">{currentPost.body}</div>
          </Fragment>
        )}
        {loading && (
          <Loading>
            <span>Загрузка данных...</span>
          </Loading>
        )}
      </div>
    );
  }
}

interface StateProps {
  currentPost: Post | null
  loading: boolean
}

interface DispatchProps {
  fetch: (id: number) => void
}

const mapStateToProps = (state: State): StateProps => ({
  currentPost: state.blog.currentPost,
  loading: state.blog.loading,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  fetch: (id) => dispatch(fetchCurrent(id)),
});

export const BlogArticlePage = connect(mapStateToProps, mapDispatchToProps)(BlogPage);