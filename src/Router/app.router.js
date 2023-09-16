import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import ScrollTop from "../Component/ScrollTop/ScrollTop";
import Blog from "../Component/Blog/Blog";

import Collection from "../Component/Collection/Collection";
import Loader from "../Component/Loader/Loader";
import AppRoute from "../utils/router";
const HomeComp = lazy(() => import("../Component/Home/Home"));
const AllDestination = lazy(() =>
  import("../Component/AllDestination/AllDestination")
);
const AboutUs = lazy(() => import("../Component/AboutUs/AboutUs"));
const Destination = lazy(() => import("../Component/Destination/Destination"));
const Contact = lazy(() => import("../Component/Contact/Contact"));
const PrivacyPolicy = lazy(() => import("../Component/Policy/PrivacyPolicy"));
const TermsAndCondition = lazy(() =>
  import("../Component/Policy/TermsAndCondition")
);
const AddPackages = lazy(() => import("../PackageConfiguration/AddPackages"));

const BlogVaransai = lazy(()=> import ("../Component/Blog/BlogVaransai"));
const BlogTopDestination = lazy(()=> import ("../Component/Blog/BlogTopDestination"));
const BlogTopSightseeingDehradun = lazy(()=> import ("../Component/Blog/BlogTopSightseeingDehradun"));




const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <div className="body-container">
          <Routes>
            <Route exact path={AppRoute.HOME} element={<HomeComp />} />
            <Route exact path={AppRoute.ABOUT} element={<AboutUs />} />
            <Route exact path={AppRoute.CONTACT} element={<Contact />} />
            <Route exact path={AppRoute.BLOG} element={<Blog />} />
            <Route exact path={AppRoute.COLLECTION} element={<Collection />} />
            <Route exact path={AppRoute.BLOG_SINGLE} element={<BlogVaransai/>} /> 
            <Route exact path={'/blog/top6Destination'} element={<BlogTopDestination />}/>
            <Route exact path={'/blog/top6SightseeingDehradun'} element={<BlogTopSightseeingDehradun />}/>

            {[AppRoute.ADD_PACKAGE,AppRoute.EDIT_PACKAGE].map((path,index) => (
                <Route
                  key={index}
                  exact
                  path={path}
                  element={<AddPackages />}
                />
            ))}
            
            <Route
              exact
              path={AppRoute.PRIVACY_POLICY}
              element={<PrivacyPolicy />}
            />
            <Route
              exact
              path={AppRoute.ALL_DESTINATION}
              element={<AllDestination />}
            />
            <Route
              exact
              path={AppRoute.SINGLE_DESTINATION}
              element={<Destination />}
            />
            <Route
              exact
              path={AppRoute.TERMS_CONDITION}
              element={<TermsAndCondition />}
            />
          </Routes>
        </div>
        <ScrollTop />
        <Footer />
      </Suspense>
    </Router>
  );
};

export default AppRouter;
