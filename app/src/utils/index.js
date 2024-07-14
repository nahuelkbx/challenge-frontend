
export default function formatPrice(price, currency, locale){
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        maximumFractionDigits: 0,
        minimumFractionDigits: 0
    }).format(price)
}