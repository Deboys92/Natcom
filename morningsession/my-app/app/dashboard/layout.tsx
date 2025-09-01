import type { Metadata } from "next";   
import '../globals.css'
import { Children } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/sideboard";


export const metadata:Metadata={
    title:'Dashboard app',
    description: 'Simple Next Dashboard'
}
export default function RootLayout({
    Children,
}:{
    Children:React.ReactNode;
}) {
    return(
        <div className="flex min-h-screen">
            <Sidebar/>
        
        <div className="w-full flex flex-col">
            <Navbar/>
            {Children}
        </div>
        </div>
    )
}