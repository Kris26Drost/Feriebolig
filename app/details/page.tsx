"use client"

import Details from "./components/Details"
import ClientOnly from "../components/ClientOnly"

const Page = () => {
    
    return (
       <ClientOnly>
       <Details/>  
        </ClientOnly>
    )
}

export default Page