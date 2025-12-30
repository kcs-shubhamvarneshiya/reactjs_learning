type AdminCardProps = {
  name: string;
  role: string;
  permissions: string[];
};

const AdminCard = ({ name, role, permissions }: AdminCardProps) => {
  return (
    <div
      style={{
        border: "2px solid #000",
        padding: 12,
        backgroundColor: "#f8f8f8",
      }}
    >
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <h3>Permissions:</h3>
      <ul>
        {permissions.map((permission) => (
          <li key={permission}>{permission}</li>
        ))}
      </ul>
    </div>
  );
};
export default AdminCard;