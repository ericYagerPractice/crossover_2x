import React from "react";
import {
    MDBBtn,
    MDBIcon,
  } from 'mdbreact';

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <MDBBtn
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <MDBIcon icon="sync" spin />}
      {props.children}
    </MDBBtn>
  );
}