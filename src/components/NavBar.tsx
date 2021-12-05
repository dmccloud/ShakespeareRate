import React from "react";

import {
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiIcon,
} from "@elastic/eui";

import williamSvg from "../assets/shakespeare-silhouette-by-Vexels.svg";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  return (
    <EuiHeader>
      <EuiHeaderSectionItem border="right">
        <EuiIcon type={williamSvg} size="xl" title="William SVG" />
        Shakespeare's Stories
      </EuiHeaderSectionItem>

      <EuiHeaderSectionItem>
        <EuiHeaderLinks aria-label="App navigation links">
          <EuiHeaderLink isActive>Home</EuiHeaderLink>

          <EuiHeaderLink iconType="help">Help</EuiHeaderLink>
        </EuiHeaderLinks>
      </EuiHeaderSectionItem>
    </EuiHeader>
  );
};
