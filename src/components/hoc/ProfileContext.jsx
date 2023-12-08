import {
  createContext, useContext, useMemo, useState,
} from 'react';
import { loginUser } from '../../utils/api/authApi';
import { fetchHome } from '../../utils/api/homeApi';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);

  const login = async (input) => {
    const user = await loginUser(input);
    const home = await fetchHome(user.homeId);

    setProfile({ ...user, home });
    return user;
  };

  const logout = () => {
    // Perform the logout logic and update the profile state
    setProfile(null);
  };

  const state = useMemo(() => ({
    profile, login, logout,
  }), [profile]);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <ProfileContext.Provider value={state}>
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);
