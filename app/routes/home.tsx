import type { Route } from "./+types/home";
import Welcome from "./welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  return (

<div className="bg-hover text-white  w-full h-[20px]">
  <p className="text-paragraph-h3">pene</p>

<Welcome />;
</div>
)


}
