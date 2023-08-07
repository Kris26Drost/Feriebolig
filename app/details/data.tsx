export async function getData(id: string | null | undefined) {
    
    const res = await fetch (`http://dev-api.guestbox.dk/Accommodation/GetAccommodation?id=${id}`);
    
    if(!res.ok) {
        throw new Error("failed to fetch data");
    }

    return res.json();
}