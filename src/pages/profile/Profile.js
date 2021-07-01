import { useEffect, useState } from "react";
import { withAuthProtected } from "../../hoc/withAuthProtected";
import { getUserInfo } from "../../services";
import "./index.css";

function Profile(props) {
  const [ProfileData, setProfileData] = useState([]);

  const LoadProfileData = async () => {
    const result = await getUserInfo();
    if (result) {
      setProfileData(result.data);
    }
  };

  useEffect(() => {
    LoadProfileData();
  }, []);
  console.log(ProfileData);

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-3">
        <div className="d-flex align-items-center">
          <div className="image">
            <img
              src={ProfileData.avatar}
              className="rounded profile-img"
              width="155"
            />
          </div>
          <div className="ml-3 w-100">
            <h4 className="mb-0 mt-0">
              {ProfileData.first_name} {ProfileData.last_name}
            </h4>
            <span>User</span>
            <div className="button mt-2 d-flex flex-row align-items-center">
              <h6>{ProfileData.email} </h6>
            </div>
            <div className="button mt-2 d-flex flex-row align-items-center">
              <button className="btn btn-sm btn-outline-primary w-100">
                Order History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuthProtected(Profile);
