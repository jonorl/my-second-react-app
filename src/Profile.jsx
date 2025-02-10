import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here: {name}</h2>
      <Outlet />
    </div>
  );
};

export default Profile;
