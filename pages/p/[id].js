import Layout from '../../components/MyLayout';
//import fetch from 'isomorphic-unfetch';
import fetch from 'node-fetch';

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    {props.show.image ? <img src={props.show.image.medium} /> : null}
  </Layout>
);



export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  
  return {
    props: {show}, // will be passed to the page component as props
  }
}
export default Post;