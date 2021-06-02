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

export function getIncrementByPlan(plan: string) {
    return (plan === 'basic') ?  1.20 : 1.50;
}

export function Capitalize(text: string) {
    return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
}