import Link from "next/link"
export default function Navbar() {
    return (
        <nav className="flex bg-green-500 text-white items-center justify-between flex-row w-full">
            <Link href={'/dashboard'}>Dashboard</Link>
            <Link href={'/dashboard/orders'}>Orders</Link>
            <Link href={'/dashboard/products'}>Products</Link>
            <Link href={'/dashboard/users'}>Users</Link>
        </nav>

    )
}