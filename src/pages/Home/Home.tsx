import { Navbar, Featured, List } from "../../components";
import "./home.scss";
export default function Home(params: any): JSX.Element {
  return (
    <div className="home">
      <Navbar />
      <Featured type="series" />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}
