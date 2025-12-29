//Utility types
// Partial<Type>
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

function updateUser(id: number, userUpdates: Partial<User>): User {
  const existingUser: User = {
    id: id,
    name: "Shubham Varneshiya",
    email: "Shubham.varneshiya@example.com",
    age: 25,
  };
  return { ...existingUser, ...userUpdates };
}

const updatedUser = updateUser(1, { name: "Shivam Varneshiya", age: 30 });

console.log("Updated User:", updatedUser);

// Readonly<Type>
const readonlyUser: Readonly<User> = {
  id: 2,
  name: "Rysun",
  email: "Rysun@example.com",
  age: 28,
};
// readonlyUser.name = "New Name"; // Error: Cannot assign to 'name' because it is a read-only property
console.log("Readonly User:", readonlyUser);

// Pick<Type, Keys>
type UserPreview = Pick<User, "id" | "name">;
const userPreview: UserPreview = {
  id: 3,
  name: "Preview User",
};
console.log("User Preview:", userPreview);

// Omit<Type, Keys>
type UserWithoutEmail = Omit<User, "email">;
const userWithoutEmail: UserWithoutEmail = {
  id: 4,
  name: "User Without Email",
  age: 29,
};

console.log("User Without Email:", userWithoutEmail);

// Record<Keys, Type>
type PageInfo = {
  title: string;
};
type Page = "home" | "about" | "contact";
const pageInfo: Record<Page, PageInfo> = {
  home: { title: "Home Page" },
  about: { title: "About Us" },
  contact: { title: "Contact Us" },
  //sameple: { title: "Sample Page" }
};
console.log("Page Info:", pageInfo);
