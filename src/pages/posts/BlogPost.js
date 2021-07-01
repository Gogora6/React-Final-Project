import { BlogPostList } from '../../data/blog-posts';
import { withAuthProtected } from '../../hoc/withAuthProtected';

function BlogPost(props) {
  return (
    <div>
      <BlogPostList />
    </div>
  );
}

export default withAuthProtected(BlogPost);
