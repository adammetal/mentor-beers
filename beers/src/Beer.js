import "./Beer.css";

const Beer = (props) => (
  <div className="beer">
    <div className="number">{props.number}</div>
    <button>
      Details
      <span class="material-icons">arrow_forward</span>
    </button>
    <div className="title">{props.title}</div>
    <div className="info">
      <div className="sub">{props.sub}</div>
      <div className="text">{props.text}</div>
    </div>
  </div>
);

export default Beer;
