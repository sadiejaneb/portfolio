// BreadcrumbsComponent.js
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";

function BreadcrumbsComponent() {
    const theme = useTheme();

  return (
    <Breadcrumbs
      sx={{ color: theme.palette.primary.contrastText }}
      aria-label="breadcrumb"
    >
      <Link
        sx={{ color: theme.palette.primary.contrastText }}
        href="#description"
        underline="hover"
      >
        Description
      </Link>
      <Link
        sx={{ color: theme.palette.primary.contrastText }}
        href="#key_features"
        underline="hover"
      >
        Key Features
      </Link>
      <Link
        sx={{ color: theme.palette.primary.contrastText }}
        href="#technology"
        underline="hover"
      >
        Technologies
      </Link>
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
