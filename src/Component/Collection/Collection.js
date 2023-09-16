import React from "react";
import "../AllDestination/allDestination.css";
import {
  NorthPackages,
  SouthPackages,
  EastPackages,
  WestPackages,
} from "../AllDestination/ToursPackagesList";
import PackageCard from "../PackageCard/PackageCard";


function AllDestination() {
  return (
    <div className="allDestination">
      <div className="destination-banner">
        <div className="destination-content-container">
          <h1 className="destination-title">All Packages Collection</h1>
        </div>
      </div>

      <div className="container">
        {/* <SearchBar/> */}
        <div className="allDestination-block-container">
          {[...NorthPackages,...SouthPackages,...EastPackages,...WestPackages].map((tourPackage, index) => (
            <PackageCard key={index} tourPackage={tourPackage} />
          ))}

        </div>
      </div>
    </div>
  );
}

export default AllDestination;
