//import fetch from 'unfetch';
//import useSWR from 'swr';
import fetch from 'isomorphic-unfetch';
import MyLayout from '../components/MyLayout';
const Index = ({ stars }) => {
  return (
    <MyLayout>
      <p>Next stars: {stars}</p>
    </MyLayout>
  );
};
Index.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const json = await res.json();
  return { stars: json.stargazers_count };
};
// const API_URL = 'https://api.github.com';
// const fetcher = async path => {
//   const res = await fetch(API_URL + path);
//   const json = await res.json();
//   return json;
// };
// const Index = () => {
//   const { data, error } = useSWR('/repos/zeit/next.js', fetcher);
//   if (error) return <div>failed to load</div>;
//   if (!data) return <div>loading...</div>;
//   return <div>Next stars: {data.stargazers_count}</div>;
// };
export default Index;
