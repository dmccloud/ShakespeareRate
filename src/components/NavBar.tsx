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
    <EuiHeader position="fixed">
      <EuiHeaderSectionItem border="right">
        {/* Shakeaspear's outline  */}
        <EuiIcon
          type={williamSvg}
          size="xl"
          title="William SVG"
          aria-label="william's outline"
        />
        Shakespeare's Stories
      </EuiHeaderSectionItem>

      {/* Links on the right of the nav bar */}
      <EuiHeaderSectionItem>
        <EuiHeaderLinks aria-label="App navigation links">
          <EuiHeaderLink
            onClick={() => {
              window.location.href = `/`;
            }}
          >
            Home
          </EuiHeaderLink>
        </EuiHeaderLinks>
      </EuiHeaderSectionItem>
    </EuiHeader>
  );
};
