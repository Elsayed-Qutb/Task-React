export default function SectionOne() {
  return (
    <div className="Sectionone text-dark p-4">
      <div className="container col-6  text-dark d-flex flex-column justify-content-center align-items-Start gap-2 p-3">
        <h1 >Apple iPhone 14 Pro Max</h1>
        <div className="span1 d-flex align-items-center gap-2 ">
          <h4>$1499</h4>
          <span className="text-decoration-line-through">1600</span>
        </div>
        <p >
          Enhanced capabilities thanks toan enlarged display of 6.7 inchesand
          work without rechargingthroughout the day. Incredible photosas in
          weak, yesand in bright lightusing the new systemwith two cameras
        </p>
      <div className="btn col-12 d-flex gap-2 p-0">
        <button type="button" className="btn btn-light col-6 p-2 border border-dark"> Add To Wishlist</button>
        <button type="button" className="btn btn-dark col-6 p-2"> Add To Cart</button>
      </div>
      <div className=" p-2 col-12 d-flex justify-content-center mt-4">
        <img src="/Search icon(1).png" alt="Search Field" />
      </div>
      </div>
    </div>
  );
}
