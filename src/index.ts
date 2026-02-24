interface PriceProps {
    price: number
    discount: number
    isInstallment: boolean
    months: number
}

const totalPrice = ({ price, discount, isInstallment, months }: PriceProps): number => {
    const payment = price * (1 - discount/100)
    return isInstallment ? payment/months : payment
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250