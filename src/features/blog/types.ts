export interface Post {
  userId: number
  id: number
  title: string
  body: string
};

export interface Blog {
  posts: Array<Post>,
  currentPost: Post | null,
  loading: boolean
};

export interface Action {
  type: string,
  payload?: any
};
