import "../styles/auth.css";

const Profile = () => {
  return (
    <div className="screen">
      <h2>Account Settings</h2>

      <div className="profile-card">
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
        />
        <div>
          <h4>Marry Doe</h4>
          <p>marry@example.com</p>
        </div>
      </div>

      <p className="bio">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default Profile;
