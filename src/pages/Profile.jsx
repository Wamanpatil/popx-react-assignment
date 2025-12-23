export default function Profile() {
  return (
    <div className="page">
      {/* Header */}
      <h2 style={styles.title}>Account Settings</h2>

      {/* Profile Card */}
      <div style={styles.profileCard}>
        <div style={styles.avatar}></div>

        <div>
          <h4 style={styles.name}>Marry Doe</h4>
          <p style={styles.email}>marry.doe@email.com</p>
        </div>
      </div>

      {/* Description */}
      <p style={styles.description}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam.
      </p>
    </div>
  );
}

const styles = {
  title: {
    fontSize: "22px",
    marginBottom: "20px"
  },
  profileCard: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "20px"
  },
  avatar: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    backgroundColor: "#ddd"
  },
  name: {
    margin: 0,
    fontSize: "16px"
  },
  email: {
    margin: "4px 0 0",
    fontSize: "14px",
    color: "#666"
  },
  description: {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#555"
  }
};
