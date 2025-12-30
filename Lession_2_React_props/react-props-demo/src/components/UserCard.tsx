type UserCardProps = {
  name: string;
  age: number;
  isActive: boolean;
  skills: string[];
};

const UserCard = ({ name, age, isActive, skills }: UserCardProps) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: 12 }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isActive ? "Active" : "Inactive"}</p>

      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserCard;
