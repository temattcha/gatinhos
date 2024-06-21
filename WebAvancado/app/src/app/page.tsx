import Feed from "@/components/feed/feed";
import catsJson from "../json-data/cats.json";
import userGet from "@/actions/user-get";

export default function Home() {
  // const response = await fetch('http://localhost:5001/api/cats')
  // const data = await response.json();

  const data = catsJson;

  return (
    <section className="container mainContainer">
      <Feed photos={data} />
    </section>
  );
}
