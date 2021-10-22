import { Link } from "react-router-dom";

function UserAccount() {
  return (
    <Link to="/Account">
      <button className="UserIcon">
        <i className="fas fa-user"></i>
      </button>
    </Link>
  );
}

export default UserAccount;
