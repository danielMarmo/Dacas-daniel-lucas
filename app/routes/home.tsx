import type { Route } from "./+types/home";
import Welcome from "./welcome";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  return (

<div>
<Header />

<Welcome />

<Footer />


</div>





)
}
