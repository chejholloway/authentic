import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Spinner,
} from "@material-tailwind/react";
import {
  DeveloperGrid,
  Developers,
  Main,
  MainContent,
  Title,
  WhiteContainer,
} from "../../styles/TwinStyles.styles";
import { v4 as uuidv4 } from "uuid";

import { Footer } from "../../components/footer/Footer";
import Pagination from "../../components/pagination/Pagination";
import Navbar from "../../components/navbar/Navbar";
import Developer from "../../types/Developer";
import { useGetTopDevelopersQuery } from "../../services/github";

const HomePage: React.FC = () => {
  const { data: developers } = useGetTopDevelopersQuery({
    limit: 20,
  });

  function truncateString(str: string, maxLength: number) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength - 3) + "...";
    }
    return str;
  }

  if (!developers) {
    return <Spinner data-testid="spinner" />;
  }
  return (
    <>
      <Navbar />
      <Main>
        <MainContent>
          <WhiteContainer className="animate-slide-in">
            <Title>Top Github Developers</Title>
            <DeveloperGrid>
              {developers?.items.map((developer: Developer) => (
                <Developers key={uuidv4()}>
                  <Link to={`/developer/${developer.login}`}>
                    <Card>
                      <List>
                        <ListItem className="hover: xl:max-w-[220px] lg:max-w-[175px] md:max-w-[167px] sm:max-w-[180px]">
                          <ListItemPrefix>
                            <Avatar
                              variant="circular"
                              alt={developer.login}
                              src={developer.avatar_url}
                            />
                          </ListItemPrefix>
                          <p className="text-xs">
                            {truncateString(developer.login, 12)}
                          </p>
                        </ListItem>
                      </List>
                    </Card>
                  </Link>
                </Developers>
              ))}
            </DeveloperGrid>
            <div className="flex justify-center mt-8">
              <div className="p-2">
                <Pagination />
              </div>
            </div>
          </WhiteContainer>
        </MainContent>
      </Main>
      <Footer />
    </>
  );
};

export default HomePage;
