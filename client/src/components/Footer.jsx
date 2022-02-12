import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { Box, Stack } from "@chakra-ui/react";
import {faAt} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer" style={{height: "20px"}}>
      <footer className="p-1 bg-dark fixed-bottom">
        <div className="container">
          <p className="m-0 text-center text-white">
            Follow Us
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
