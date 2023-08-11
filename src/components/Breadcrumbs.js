// BreadcrumbsComponent.js
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const BreadcrumbsComponent = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="#description" underline="hover">
        Description
      </Link>
      <Link color="inherit" href="#key_features" underline="hover">
        Key Features
      </Link>
      <Link color="inherit" href="#technology" underline="hover">
        Technologies
      </Link>
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
