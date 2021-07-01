import PostItem from './BlogPostItem';
function BlogList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">title</th>
          <th scope="col">text</th>
          <th scope="col">author</th>
        </tr>
      </thead>
      <tbody>
        {BlogPostData.map((post) => {
          return <PostItem post={post} key={post.id} />;
        })}
      </tbody>
    </table>
  );
}

export default BlogList;
