import { redirect } from "next/navigation";

export default function account() {

    // assume that profile info is null

    const userProfileInfo = null;
    // if (userProfileInfo === null) redirect('cart?search=product1&randomvalue=abcde')
    if (userProfileInfo === null) redirect('products?search=product1')

    return (
        <h1 className="">Account Page</h1>
    )
}