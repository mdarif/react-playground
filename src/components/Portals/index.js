import React from "react";
import ReactDOM from "react-dom";

/**
 * Portals - Portal is a recommended way to render children into a DOM node that exists
 * outside the DOM hierarchy of the parent component.
 *
 * ReactDOM.createPortal(child, container)
 */

export default function PortalExample() {
  return ReactDOM.createPortal(
    <h1>Portals Demo</h1>,
    document.getElementById("portal-root")
  );
}
