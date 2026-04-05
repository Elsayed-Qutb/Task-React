import "./SectionTwo.css";

export default function SectionTwo() {
  return (
    <div className="my-card bg-body-secondary">
      <img src="/Iphone 14 pro 1.png" className="my-card-image"></img>
      <div className="my-heading">
       Apple iPhone 14 Pro 512GB Gold (MQ233)
        <div className="my-category">1500$</div>
        <div className="my-author">
          <button type="button" className="btn btn-dark col-12 p-2">
            {" "}
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
