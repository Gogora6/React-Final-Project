import PropTypes from 'prop-types';

function PostItem({ post }) {
  return (
    <tr>
      <th scope="row">{post.id}</th>
      <td>{post.title}</td>
      <td>{post.text}</td>
      <td>{post.author}</td>
    </tr>
  );
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};
export default PostItem;
