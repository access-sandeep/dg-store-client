const showDropDown = (e:any)=>{
    e.stopPropagation();
    e.preventDefault();
    const dropDownMenu: string = e.target.id;
    const target = document.querySelector(`[aria-labelledby='${dropDownMenu}']`);
    const isOpen = target?.getAttribute('data-open')==='yes';
    if(isOpen) {
        target?.setAttribute('style', 'display:none;');
        target?.setAttribute('data-open', 'no');
    } else { 
        target?.setAttribute('style', 'display:block;');
        target?.setAttribute('data-open', 'yes');
    }
}

const closeDropDown = (e:any)=>{
    const target = e.target.parentElement;
    const isOpen = target?.getAttribute('data-open')==='yes';
    if(isOpen) {
        target?.setAttribute('style', 'display:none;');
        target?.setAttribute('data-open', 'no');
    } else { 
        target?.setAttribute('style', 'display:block;');
        target?.setAttribute('data-open', 'yes');
    }
}

export {showDropDown, closeDropDown};