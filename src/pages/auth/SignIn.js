import SignInForm from '../../components/forms/SignInForm';
import { withNoAuth } from '../../hoc/withNoAuth';

function SignIn(props) {
  return (
    <div className="container col-6 mt-5">
      <SignInForm />
    </div>
  );
}
export default withNoAuth(SignIn);