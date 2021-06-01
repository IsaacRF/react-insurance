export function getDifferenceYears(year: string) {
    return new Date().getFullYear() - parseInt(year);
}

export function getIncrementByBrand(brand: string) {
    let increment = 0;

    switch(brand) {
        case 'european':
            increment = 1.30;
            break;
        case 'american':
            increment = 1.15;
            break;
        default:
            increment = 1.05;
            break;
    }

    return increment;
}