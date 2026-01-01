import UserCard from "./components/UserCard";
import AdminCard from "./components/AdminCard";
import MouseTracker from "./components/MouseTracker";
import Counter from "./components/Counter";
import type { UserCardProps } from "./types/UserCardTypes";
import type { AdminCardProps } from "./types/AdminCardTypes";
import React from "react";
import Search from "./components/Search";

const userCardData: UserCardProps[] = [
  {
    name: "Shubham Varneshiya",
    age: 25,
    isActive: true,
    skills: ["JavaScript", "TypeScript", "React"],
  },
  {
    name: "Rysun",
    age: 28,
    isActive: false,
    skills: ["Node.js", "Express", "MongoDB"],
  },
];

const adminCardData: AdminCardProps[] = [
  {
    name: "Shivam Varneshiya",
    role: "Super Admin",
    permissions: ["Manage Users", "Edit Settings", "View Reports"],
  },
  {
    name: "Kalpesh Varneshiya",
    role: "Admin",
    permissions: ["View Reports", "Manage Users"],
  },
];



function App() {
  const [isActive, setIsActive] = React.useState<boolean>(true);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setIsActive(!isActive)}>Toggle Theme</button>
      <h1>User Profile</h1>
      {userCardData.map((user) => (
        <UserCard
          key={user.name}
          name={user.name}
          age={user.age}
          isActive={user.isActive}
          skills={user.skills}
        />
      ))}

      <h1 style={{ marginTop: 40 }}>Admin Profile</h1>
      {adminCardData.map((admin) => (
        <AdminCard
          key={admin.name}
          name={admin.name}
          role={admin.role}
          permissions={admin.permissions}
        />
      ))}

      <h1 style={{ marginTop: 40 }}>Mouse Tracker</h1>
      <MouseTracker
        render={(position) => (
          <p>
            Mouse at: {position.x}, {position.y}
          </p>
        )}
      />
      <h5>Counter</h5>
      <Counter initialCount={0} />
      <h6>Search for : </h6>
      <Search onSearch={(query) => console.log("Searching for:", query)} />
    </div>
  );
}

export default App;
