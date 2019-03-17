import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from './types';

export const PostCard = ({
  id,
  title,
  body
}: Post): React.ReactElement => (
    <div className="post-card">
      <h4 className="post-card__title">
        <Link to={`/blog/${id}`}>{title}</Link>
      </h4>
      <p>{body}</p>
    </div>
  );