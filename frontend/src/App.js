import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormsListPage from "./views/FormsListPage";
import AboutPage from "./views/AboutPage";
import FormBuilderPage from "./views/FormBuilderPage";
import SubmitForm from "./views/SubmitForm";
import FormSubs from "./views/FormSubs";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={FormsListPage}></Route>
          <Route exact path="/formBuilder" component={FormBuilderPage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/submitSubForForm/:id" component={SubmitForm}></Route>
          <Route path="/retrieveFormSubsById/:id" component={FormSubs}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
