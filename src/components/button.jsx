import React, { Component } from "react";
import Button from "@material/react-button";
import "@material/react-button/dist/button.css";

class Buttonm extends Component {
  render() {
    return (
      <Button class="mdc-button mdc-button--raised">
        <div class="mdc-button__ripple"></div>
        <i class="material-icons mdc-button__icon" aria-hidden="true">
          bookmark
        </i>
        <span class="mdc-button__label">Contained Button plus Icon</span>
      </Button>
    );
  }
}
export default Buttonm;
