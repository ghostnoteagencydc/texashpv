import Link from "next/link";
import Header from "../components/header";
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
  <main>
    <Header menudata={props.menudata} />
    <section>
      <Link href="/about">
        <a>Go to About Me</a>
      </Link>
    </section>
  </main>
);

Index.getInitialProps = async function () {
  const res = await fetch('https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/pages');
  const menu = await fetch('https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/menus/main');
  const data = await res.json()
  const menudata = await menu.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data,
    menudata,
  }
}

export default Index;
