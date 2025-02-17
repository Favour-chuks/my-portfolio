import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function BreadCrumb() {
  const location = useLocation();

  const pathName = location.pathname;
  return (
    <>
      <Link to="/#">favourchuks</Link> /{" "}
      <Link to={`${pathName}`}>{pathName.split("/")}</Link>
    </>
  );
}
