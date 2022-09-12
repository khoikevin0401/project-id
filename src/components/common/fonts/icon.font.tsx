import React from "react"
import { Global } from "@emotion/react"

export const IconFont = () => (
  <Global
    styles={
      `
      @font-face {
        font-family: 'project-id-icon';
        src:  url('fonts/icon/project-id-icon.eot?8z8duf');
        src:  url('fonts/icon/project-id-icon.eot?8z8duf#iefix') format('embedded-opentype'),
          url('fonts/icon/project-id-icon.ttf?8z8duf') format('truetype'),
          url('fonts/icon/project-id-icon.woff?8z8duf') format('woff'),
          url('fonts/icon/project-id-icon.svg?8z8duf#project-id-icon') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display: block;
      }
      
      [class^="ic-"], [class*=" ic-"] {
        /* use !important to prevent issues with browser extensions that change fonts */
        font-family: 'project-id-icon' !important;
        speak: never;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
      
        /* Better Font Rendering =========== */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      .ic-home:before {
        content: "\e901";
      }
      .ic-home2:before {
        content: "\e902";
      }
      .ic-pacman:before {
        content: "\e916";
      }
      `
    }
  />
)


