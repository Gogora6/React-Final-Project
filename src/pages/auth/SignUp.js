import SignUpForm from '../../components/forms/SignUpForm';
import { withNoAuth } from '../../hoc/withNoAuth';

function SignUp(props) {
  return (
    <div className="container col-6 mt-5">
      <SignUpForm />
    </div>
  );
}
export default withNoAuth(SignUp);
