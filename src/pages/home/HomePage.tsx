import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
} from "@material-tailwind/react";
import {
  Main,
  WhiteContainer,
  Developers,
  DeveloperGrid,
  MainContent,
  Title,
} from "./HomePage.styles";
import { v4 as uuidv4 } from "uuid";

import Navbar from "../../components/navbar/Navbar";
import Developer from "../../types/Developer";
import { useGetTopDevelopersQuery } from "../../services/github";

const HomePage: React.FC = () => {
  const { data: developers } = useGetTopDevelopersQuery({
    limit: 20,
  });

  if (!developers) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Navbar />
      <Main>
        <MainContent>
          <WhiteContainer className="translate-y-20 animate-slide-in">
            <Title>Top Github Developers</Title>
            <DeveloperGrid>
              {developers?.items.map((developer: Developer) => (
                <Developers key={uuidv4()}>
                  <Link to={`/developer/${developer.login}`}>
                    <Card className="w-half">
                      <List>
                        <ListItem>
                          <ListItemPrefix>
                            <Avatar
                              variant="circular"
                              alt={developer.login}
                              src={developer.avatar_url}
                            />
                          </ListItemPrefix>
                          <p className="font-normal ">{developer.login}</p>
                        </ListItem>
                      </List>
                    </Card>
                  </Link>
                </Developers>
              ))}
            </DeveloperGrid>
          </WhiteContainer>
        </MainContent>
      </Main>
    </>
  );
};

export default HomePage;
