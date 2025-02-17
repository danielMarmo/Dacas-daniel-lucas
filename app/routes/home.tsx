import type { Route } from "./+types/home";
import Welcome from "./welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  return (

    <div>
      <div className="bg-hover text-white w-full h-[100px] flex justify-between">
        <div className="flex">
          <h1 className="text-heading-h1">Hello</h1>
          <p className="text-paragraph-h3">hola</p>
        </div>
        <div className="flex">
          <h1 className="text-heading-h1">Hello</h1>
          <p className="text-paragraph-h3">hola</p>
        </div>
      </div>

      <Welcome />
    </div>
  )


}
