import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { fetchAll } from './ducks';
import { Post } from './types';
import { State } from '../../store/rootReducer';
import { Loading } from '../../common/components/Loading';
import { PostCard } from './PostCard';

class Blog extends React.Component<RouteComponentProps<any> & StateProps & DispatchProps, {}> {
  componentDidMount() {
    this.props.fetchAll();
  }

  render() {
    const { loading, posts } = this.props;
    return (
      <div>
        <h1>Blog post</h1>
        <div className="blog-wrapper">
          {!loading && posts.map(post => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
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
  posts: Array<Post>
  loading: boolean
}

interface DispatchProps {
  fetchAll: () => void
}

const mapStateToProps = (state: State): StateProps => ({
  posts: state.blog.posts,
  loading: state.blog.loading,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  fetchAll: () => dispatch(fetchAll())
});

export const BlogListPage = connect(mapStateToProps, mapDispatchToProps)(Blog);