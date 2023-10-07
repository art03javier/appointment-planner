//Root.js
import {  Outlet, NavLink } from "react-router-dom";
import ErrorBoundary from '../../components/errorBoundary/ErrorBoundary'; // Adjust the path accordingly



export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  function Root() {
    return (
      <>
        <nav>
        <NavLink to={ROUTES.CONTACTS} className="nav-link">Contacts</NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} className="nav-link">Appointments</NavLink>
        </nav>
        <ErrorBoundary> {/* Wrap the Outlet with ErrorBoundary */}
          <Outlet />
        </ErrorBoundary>
      </>
    );
  }
  
  export default Root;
  