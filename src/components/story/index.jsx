import waves from "../../assets/waves.png";

function Story() {
  return (
    <div className="card text-black">
      <img
        src={waves}
        className="card-img"
        alt="waves"
        style={{ objectFit: "cover", opacity: 0.2, overflow: "hidden" }}
      />
      <div className="card-img-overlay">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">hello.</p>
      </div>
    </div>
  );
}

export default Story;
