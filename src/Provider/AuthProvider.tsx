import React, { createContext, useEffect, useState } from 'react';
import useAuth, { AuthState } from '../Hooks/useAuth';

interface AuthContextType {
    user: any;
    login: () => void;
    logout: () => void;
}

const AuthContext = React.createContext({} as AuthState);

interface AuthProviderProps {
    children: React.ReactNode;
}
function AuthProvider({ children }: AuthProviderProps) {
    const auth = useAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
