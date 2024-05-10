import Menu from "../menu/menu.jsx";

export default function Content() {
  return (
    <>
      <Menu active="Career" />
      <div className="container col-xl-8 mt-5 ">
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          <div className="col justify-content-center">
            <h2>Career</h2>
          </div>
        </div>
      </div>
    </>
  );
}
