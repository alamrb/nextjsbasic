async function fetchUserDetaisl(currentUserId) {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/users/${currentUserId}`);
        const result = apiResponse.json();
        return result;


    } catch (e) {
        throw new Error(e)
    }
}





export default async function UserDetailsPage({ params }) {
    console.log(params)

    const userDetails = await fetchUserDetaisl(params.details)
    return (
        <div>
            <h1 className="text-lg">User Details Page</h1>
            <p><span className="text-lime-600">First Name: </span>{userDetails.firstName}</p>
            <p><span className="text-lime-600">Last Name: </span> {userDetails.lastName}</p>
            <p><span className="text-lime-600">Email: </span> {userDetails.email}</p>
            <p><span className="text-lime-600">Phone: </span> {userDetails.phone}</p>
            <p><span className="text-lime-600">User Name: </span> {userDetails.username}</p>
        </div>
    );
}