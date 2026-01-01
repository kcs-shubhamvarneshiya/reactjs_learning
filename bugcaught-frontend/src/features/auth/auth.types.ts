/**
 * User roles available in the system
 * ADMIN  → Full access (projects, teams, employees, reports)
 * EMPLOYEE → Limited access (assigned projects, bugs, dashboard)
 */
export type UserRole = "ADMIN" | "EMPLOYEE";

/**
 * Authenticated user model (frontend view)
 */
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
}

/**
 * Authentication state stored in Redux
 */
export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}
