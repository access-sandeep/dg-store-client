export default function Featured({showProduct, num}:any) {
    return (
        <div className="col-md-4" id="prod_area_1">
            <button data-id="prod_area_1" onClick={(e)=>{
                showProduct(e, num);
            }}>Show Product {num}</button>
        </div>
    )
}