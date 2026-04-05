import SectionTwo from "./SectionTwo";

export default function TotalScTwo(){
    return(
        <div className="SectionTwo  d-flex flex-column justify-content-center align-items-center">
            <div className="container d-flex  flex-column justify-content-center col-6 p-2">
                <h5 className="mb-3">Related Products</h5>
                <div className="d-flex justify-content-between col-12 ">
                <SectionTwo></SectionTwo>
                <SectionTwo></SectionTwo>
                <SectionTwo></SectionTwo>
                </div>
            </div>
        </div>
    )
}