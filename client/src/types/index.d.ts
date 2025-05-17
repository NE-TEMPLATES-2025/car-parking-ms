export type IAuthContext ={
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    user: {
        id: string;
        email: string;
        name: string;
        role: string;
    } | null;
    setUser: React.Dispatch<React.SetStateAction<{
        id: string;
        email: string;
        name: string;
        role: string;
    } | null>>;
}

type User ={
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

type LoginResponse ={
  message: string;
  status: number;
  data: {
    user: User;
    token: string;
  };
}