import { Redirect } from "@docusaurus/router";

// make default landing page as docs
export default function Home() {
  return <Redirect to="/prompt-eng-tech-doc/docs/introduction/intro" />;
}
