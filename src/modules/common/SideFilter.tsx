import { useState } from "react";
import { brands, merchantTypes } from "../../shared/constants";
import { CheckboxType, PriceInputType, SubmitType } from "../../shared/types";

export default function SideFilter() {
    const [maxPrice, setMaxPrice] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [priceDiff, setPriceDiff] = useState(0);

    function onChangeValue(e:any, priceType: string, callback: Function) {
        if(priceType==='min_price') {
            setMinPrice(e.target.value);
            if(callback()>=0) {
                console.log(`Changed the checkbox`,e.target.form);
            }
        }

        if(priceType==='max_price') {
            setMaxPrice(e.target.value);
            if(callback()>=0) {
                console.log(`Changed the checkbox`,e.target.form);
            }
        }
    }

    function compareMaxMin() {
        const maxPriceFromElement: HTMLInputElement= document.querySelector("#max_price") as HTMLInputElement;
        const minPriceFromElement: HTMLInputElement = document.querySelector("#min_price") as HTMLInputElement;

        const maxPriceValue: number = !maxPriceFromElement.value?0:parseInt(maxPriceFromElement.value);
        const minPriceValue: number = !minPriceFromElement.value?0:parseInt(minPriceFromElement.value);
        
        const diff = maxPriceValue-minPriceValue;

        setPriceDiff(diff);

        return diff;
    }

    return (
        <form>
            <div className="row d-none">
                <div className="col-12">
                    <h2 className="h4">Filters</h2>    
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3 className="h6">Merchant Type</h3>
                    <ul className="list-unstyled ps-3">
                        {merchantTypes.map((merchant)=>{
                            return <li key={merchant.value}><Checkbox value={merchant.value} checkboxLabel={merchant.checkboxLabel} /></li>
                        })}
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3 className="h6">Brands</h3>
                    <ul className="list-unstyled ps-3">
                        {brands.map((brand)=>{
                            return <li key={brand.value}><Checkbox value={brand.value} checkboxLabel={brand.checkboxLabel} /></li>
                        })}
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3 className="h6">Price range</h3>
                    <PriceInput name="min_price" id="min_price" label="Min" labelId="min_label" ariaLabel="Minimum price" onChangeValue={(e:any)=>{
                        onChangeValue(e, 'min_price', compareMaxMin);
                    }} value={minPrice} />
                    <PriceInput name="max_price" id="max_price" label="Max" labelId="min_label" ariaLabel="Maximum price" onChangeValue={(e:any)=>{
                        onChangeValue(e, 'max_price', compareMaxMin);
                    }} value={maxPrice}  />
                    {priceDiff>=0?null:<div className="row"><div className="col-12 m-0 p-0 text-danger small">Minimum price can not be more than maximum price</div></div>}
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Submit name="submit" label="Filter" />
                </div>
            </div>
            

        </form>
    )
}

function Submit({name, label}: SubmitType) {
    return (
        <button type="button" className="btn btn-dark col-12" name={name}>{label}</button>
    );
}

function Checkbox({value, checkboxLabel}: CheckboxType) {
    function checkboxChanged(e: any) {
        console.log(`Changed the checkbox`,e.target.form);
    }
    return (
        <>
            <input type="checkbox" value={value} onChange={checkboxChanged} /> {checkboxLabel}
        </>
    );
}

function PriceInput({label, labelId, name, id, ariaLabel, onChangeValue, value}: PriceInputType) {
    const [numberWarning, setNumberWarning] = useState(true);
    function verifyNumber(e:any) {
        e.preventDefault();
        const inputVallue = e.target.value;
        const numberRegExp = /^[\d]+$/;
        const isNumber = numberRegExp.test(inputVallue) || inputVallue==='';
        setNumberWarning(isNumber);
    }
    return (
        <>
            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id={labelId}>{label}</span>
                </div>
                <input name={name} id={id} type="number" className="form-control" aria-label={ariaLabel} aria-describedby={labelId} onKeyUp={(e)=>{
                    verifyNumber(e);
                    onChangeValue && onChangeValue(e);
                }} />
                {numberWarning?null:<p className="col-12 m-0 p-0 text-danger small">
                    Error: {label} must be a positive integer    
                </p>}
            </div>
        </>
    );
}