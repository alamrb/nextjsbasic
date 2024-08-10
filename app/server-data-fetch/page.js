import Link from "next/link";

async function fetchListOfUsers() {

    try {

        const apiResponse = await fetch('https://dummyjson.com/users');
        const result = await apiResponse.json();
        return result.users;

    } catch (e) {
        console.error(e);
        throw new Error('Failed to fetch users');
    }

}


export default async function ServerSidedataFetching() {

    const listofusers = await fetchListOfUsers();
    console.log(listofusers)
    return (
        <div className="p-10">
            <h1 className=""> Server site Data Fatching : User List Page</h1>

            <ul>
                {listofusers && listofusers.length > 0 ? listofusers.map((user) => (<li className="mt-5 cursor-pointer" key="">
                    <Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link>
                </li>))
                    : null}
            </ul>
        </div>
    )
}