import React from "react";

import { Footer } from "../../components/footer/Footer";
import {
  CenteredContent,
  Container,
  Deleted,
  Flexed,
  Four0Four,
  GoHomeLink,
  Oops,
  PaddedFull,
  Positioning,
  PrimarySection,
  TextCentered,
} from "../../styles/TwinStyles.styles";

const text404 = "404";
const oopsText = "Oops! That page can't be found";
const deletedText = "The page you are looking for it maybe deleted";
const gohomeText = "Go to Home";

const ErrorPage = () => {
  return (
    <>
      <PrimarySection>
        <CenteredContent>
          <Container>
            <Flexed>
              <PaddedFull>
                <TextCentered>
                  <Four0Four data-testid="404">{text404}</Four0Four>
                  <Oops data-testid="Oops">{oopsText}</Oops>
                  <Deleted>{deletedText}</Deleted>
                  <GoHomeLink data-testid="go-home" href="/#" className="">
                    {gohomeText}
                  </GoHomeLink>
                </TextCentered>
              </PaddedFull>
            </Flexed>
          </Container>
          <Positioning>
            <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
            <div className="flex w-1/3 h-full">
              <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
              <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
            </div>
            <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
          </Positioning>
        </CenteredContent>
      </PrimarySection>
      <Footer />
    </>
  );
};

export default ErrorPage;
