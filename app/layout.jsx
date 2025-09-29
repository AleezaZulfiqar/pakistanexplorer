// yeh styling bht achi hai 

// import { ok } from "assert";
// import "./globals.css";

// export const metadata = {
//   title: "Travel App",
//   description: "Travel booking website",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         {children}   {/* saare pages yahan render hote hain */}
//       </body>
//     </html>
//   );
// }


















// yeh new hai ok


import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import Header from "../components/Header"
import { icons } from "lucide-react";

export const metadata = {
  title: "Trektrips",
  icons: {
     icon: "/favicon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          <main className="pt-6">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
