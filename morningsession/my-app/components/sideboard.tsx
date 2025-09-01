import Link from "next/link";
export default function Sidebar() {
    return (
        <aside>
            <div>My dashboard</div>
            <nav className="flex-1 space-y-2">
                <Link href={'/dashboard/orders'}className="flexx item-center">Overview</Link>
                <Link href={'/dashboard/products'} className="flexx item-center px-4">Orders</Link>
                <Link href={'/dashboard/products'} className="flexx item-center px-4">Products</Link>
                <Link href={'/dashboard/users'}className="flexx item-center px-4">Users</Link>

                <div className="mt-auto">
                    <button className="w-full flex p-3 bg-blue-700 twxt-white">logout</button>
                </div>
            </nav>
        </aside>
    )
}