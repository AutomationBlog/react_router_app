import Menu from "../menu/menu.jsx";
import Card from "../content/card.jsx";

import PropTypes from "prop-types";

export default function ContentAll({ data }) {
  return (
    <>
      <Menu active="ALL" />
      <div className="container col-xl-8 mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

ContentAll.prototype = {
  data: PropTypes.array.isRequired,
};
