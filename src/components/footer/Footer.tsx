import React from "react";
import { Typography } from "@material-tailwind/react";
import { FooterStyles } from "../../styles/TwinStyles.styles";

const FooterText = "© 2023 Made with ❤️ by Che' J. Holloway";

export function Footer() {
  return (
    <FooterStyles>
      <Typography color="blue-gray" className="font-normal text-center">
        {FooterText}
      </Typography>
    </FooterStyles>
  );
}
