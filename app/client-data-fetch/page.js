'use client'
import Link from "next/link";
// use effect
//use swr swr hook
// with loading state
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function ClientSidedataFetching() {

    // const [loading, setLoading] = useState(false);
    // const [users, setUsers] = useState([])


    // async function fetchListOfUsers() {
    //     try {
    //         setLoading(true)
    //         const apiResponse = await fetch('https://dummyjson.com/users');
    //         const result = await apiResponse.json();

    //         if (result.users) {

    //             setUsers(result.users)
    //             setLoading(false)

    //         }

    //     } catch (error) {
    //         console.log(error);
    //         setUsers([]);
    //         setLoading(false);
    //     }
    // }



    // useEffect(() => {

    //     fetchListOfUsers()

    // }, [])

    const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher);

    if (error) {
        return <h3>{error}</h3>
    }


    if (isLoading) {
        return (
            <h3 className="font-extrabold text-3xl">Loading... Please wait</h3>
        )
    }


    return (
        <div className="">
            <h1 className=""> Client site Data Fatching</h1>
            {/* <ul>
                {users && users.length > 0 ? users.map((user) => (<li className="mt-5 cursor-pointer" key="">
                    <Link href={`/client-data-fetch/${user.id}`}>{user.firstName}</Link>
                </li>))
                    : null}
            </ul> */}


            <ul>
                {data && data.users && data.users.length > 0 ? data.users.map((user) => (<li className="mt-5 cursor-pointer" key="">
                    <Link href={`/client-data-fetch/${user.id}`}>{user.firstName}</Link>
                </li>))
                    : null}
            </ul>
        </div>
    )
}