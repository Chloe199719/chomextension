// import { useState } from "react";

import {
  RedirectToSignIn,
  SignUp,
  SignedIn,
  SignedOut,
} from "@clerk/chrome-extension";
import { Route, Routes } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className=" min-w-[600px] space-y-3">
        <h1 className="text-center  text-fuchsia-500 text-2xl">
          Chloe Password Manager
        </h1>

        {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
        <Routes>
          <Route path="/" element={<SignUpRoute />} />
          <Route
            path="/protected"
            element={
              <>
                <SignedIn>
                  <Home />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

// function Layout() {
//   return (
//     <div>
//       {/* A "layout route" is a good place to put markup you want to
//           share across all the pages on your site, like navigation. */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/sign-up/">Sign Up</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/nothing-here">Nothing Here</Link>
//           </li>
//         </ul>
//       </nav>

//       <hr />

//       {/* An <Outlet> renders whatever child route is currently active,
//           so you can think about this <Outlet> as a placeholder for
//           the child routes we defined above. */}
//       <Outlet />
//     </div>
//   );
// }

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

// function NoMatch() {
//   return (
//     <div>
//       <h2>Nothing to see here!</h2>
//       <p>
//         <Link to="/">Go to the home page</Link>
//       </p>
//     </div>
//   );
// }

function SignUpRoute() {
  return <SignUp />;
}
