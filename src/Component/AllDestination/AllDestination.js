import React, { useEffect, useState } from "react";
import "./allDestination.css";
// import SearchBar from '../SearchBar/SearchBar';
import {
  NorthPackages,
  SouthPackages,
  EastPackages,
  WestPackages,
} from "./ToursPackagesList";
import { useLocation } from "react-router-dom";
import PackageCard from "../PackageCard/PackageCard";

const packageSelector = (part) => {
  switch (part) {
    case "North":
      return {
        name: "North",
        package: NorthPackages,
      };
    case "South":
      return {
        name: "South",
        package: SouthPackages,
      };
    case "East":
      return {
        name: "East",
        package: EastPackages,
      };
    case "West":
      return {
        name: "West",
        package: WestPackages,
      };
    default:
      return "All";
  }
};

function AllDestination() {
  const [tourPackage, setTourPackage] = useState({});
  const location = useLocation();

  useEffect(() => {
    const locationArray = location.search.split("");
    const part = locationArray.slice(1).join("");
    setTourPackage(packageSelector(part));
  }, [location.search]);


  return (
    <div className="allDestination">
      <div className="destination-banner">
        <div className="destination-content-container">
          <h1 className="destination-title">{tourPackage.name} Packages</h1>
        </div>
      </div>

      <div className="container">
        {/* <SearchBar/> */}
        <div className="allDestination-block-container">
          {tourPackage.package?.map((tourPackage, index) => (
            <PackageCard key={index} tourPackage={tourPackage} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllDestination;
