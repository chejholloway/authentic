/* eslint-disable no-nested-ternary */
import './App.css';
import { useGetUserByLoginQuery } from '../services/usersService';

export default function App() {
  const { data, error, isLoading } = useGetUserByLoginQuery('chejholloway');

  return (
    <div className='App'>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        // eslint-disable-next-line tailwindcss/no-custom-classname
        <div className='user-card'>
          <h3>{data.login}</h3>
          <p>Avatar URL: {data.avatar_url}</p>
          <p>Bio: {data.bio}</p>
          <p>Blog: {data.blog}</p>
          <p>Company: {data.company}</p>
          <p>Created At:{data.created_at}</p>
          <p>Email: {data.email}</p>
          <p>Events URL:{data.events_url}</p>
          <p>Followers: {data.followers}</p>
          <p>Followers URL{data.followers_url}</p>
          <p>Following: {data.following}</p>
          <p>Following URL: {data.following_url}</p>
          <p>Gists URL:{data.gists_url}</p>
          <p> Gravatar ID URL: {data.gravatar_id}</p>
          <p>Hireable: {data.hireable}</p>
          <p>HTML URL: {data.html_url}</p>
          <p>ID: {data.id}</p>
          <p>Location: {data.location}</p>
          <p>Name: {data.name}</p>
          <p>Node ID: {data.node_id}</p>
          <p>Organizations URL: {data.organizations_url}</p>
          <p>Public Gists: {data.public_gists}</p>
          <p>Public Repos: {data.public_repos}</p>
          <p>Received Events URL: {data.received_events_url}</p>
          <p>Repos URL: {data.repos_url}</p>
          <p>Site Admin: {data.site_admin}</p>
          <p>Starred URL: {data.starred_url}</p>
          <p>Subscriptions URL: {data.subscriptions_url}</p>
          <p>Twitter Username: {data.twitter_username}</p>
          <p>Type: {data.type}</p>
          <p>Updated AT: {data.updated_at}</p>
        </div>
      ) : null}
    </div>
  );
}




// import tw, { styled } from 'twin.macro';
// import logo from './logo.svg';
// const Container = tw.div`bg-blue-500 p-4`;
/* const Button = styled.button`
  ${tw`bg-green-500 text-white font-bold py-2 px-4 rounded`}
  ${tw`bg-blue-500`}
`; */
