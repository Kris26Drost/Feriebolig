export const getAllData = async () => {
    const res = await fetch("http://dev-api.guestbox.dk/Accommodation/GetAllAccommodations?DomainId=1");
    if (!res.ok) {
        throw new Error("failed to fetch data");
    }
    return res.json();
}