import React, { Fragment, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ScrollToTop from "react-router-scroll-top";
import { TransactionsProvider } from "./context/TransactionsContext";
import Routes from "./components/routing/Routes";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Contact from "./components/layout/Contact";
import { ToastContainer } from "react-toastify";
import "./toast.css";
import "./App.css";
import { AuthContext } from "./context/AuthContext";
import { motion } from "framer-motion";

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, []);

  return (
    <AuthProvider>
      <TransactionsProvider>
        <ToastContainer />
        <Router>
          <ScrollToTop>
            <Fragment>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
              >
                <Navbar />

                <Switch>
                  <Route exact path="/" component={Landing} />

                  <Route component={Routes} />
                </Switch>
                <Contact />
              </motion.div>
            </Fragment>
          </ScrollToTop>
        </Router>
      </TransactionsProvider>
    </AuthProvider>
  );
};

export default App;
