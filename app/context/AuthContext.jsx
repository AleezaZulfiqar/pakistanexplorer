// // "use client";

// // import { createContext, useContext, useState, useEffect } from "react";
// // import axios from "axios";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   const fetchUser = async () => {
// //     try {
// //       const res = await axios.get("http://localhost:5000/api/auth/me", { withCredentials: true });
// //       setUser(res.data.user);
// //     } catch (err) {
// //       setUser(null);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchUser();
// //   }, []);

// //   const logout = async () => {
// //     await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
// //     setUser(null);
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, setUser, loading, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);








// "use client";

// import { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // user object {name, email, etc}
//   const [loading, setLoading] = useState(true);

//   // ✅ Check authentication on page load
//   const checkAuth = async () => {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     setUser(null);
//     setLoading(false);
//     return;
//   }

//   try {
//     const res = await axios.get("http://localhost:5000/api/auth/me", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     setUser(res.data.user); // user set ho jaaye
//   } catch (err) {
//     setUser(null);
//   } finally {
//     setLoading(false);
//   }
// };


//   const isAuthenticated = !!user; // ✅ convert user object to boolean

//   return (
//     <AuthContext.Provider value={{ user, loading, loginUser, logoutUser, checkAuth, isAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);












// "use client";

// import { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // user object
//   const [loading, setLoading] = useState(true);

//   // Check auth on page load
//   const checkAuth = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setUser(null);
//         return;
//       }
//       const res = await axios.get("http://localhost:5000/api/auth/me", {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setUser(res.data.user);
//     } catch (err) {
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ loginUser function define
//   const loginUser = (userData) => {
//     setUser(userData);
//   };

//   // ✅ logoutUser function
//   const logoutUser = async () => {
//     try {
//       localStorage.removeItem("token");
//       setUser(null);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     checkAuth();
//   }, []);

//   const isAuthenticated = !!user;

//   return (
//     <AuthContext.Provider
//       value={{ user, loading, loginUser, logoutUser, checkAuth, isAuthenticated }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);




















"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user object
  const [loading, setLoading] = useState(true);

  // Check auth on page load
  const checkAuth = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setUser(null);
        return;
      }
      const res = await axios.get("http://localhost:5000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // ✅ loginUser function update (token bhi save hoga)
  const loginUser = (userData, token) => {
    if (token) {
      localStorage.setItem("token", token);
    }
    setUser(userData);
  };

  // ✅ logoutUser function
  const logoutUser = async () => {
    try {
      localStorage.removeItem("token");
      setUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        loginUser,
        logoutUser,
        checkAuth,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
