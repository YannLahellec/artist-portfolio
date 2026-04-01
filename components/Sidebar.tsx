import Link from "next/link"

export default function Sidebar() {

    const collections = [
        { href: '/', label: "Toutes les oeuvres" },
        { href: '/paysages', label: "Paysages" },
        { href: '/photographie', label: "Photographie" },
        { href: '/petits-formats', label: "Petits formats" },
    ]

    const information = [
        { href: '/about', label: 'À propos' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <aside className="w-64">
            <nav className="h-full flex flex-col bg-sidebar shadow-sm overflow-y-auto">
                <section className="flex flex-col gap-10 p-8">
                    <div>
                        <h1 className="font-ed-garamond font-semibold text-2xl">
                            <span className="block">Anne</span>
                            <span className="block">Roulant</span>
                        </h1>
                        <h2 className="font-ed-garamond font-light text-zinc-500">PEINTRE - PARIS</h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-jost text-zinc-400">COLLECTION</h3>
                        <div className="flex flex-col gap-4 pl-2">
                            {collections.map((link) =>
                                <Link key={link.href} href={link.href} className="font-jost">{link.label}</Link>)}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-jost text-zinc-400">INFOS</h3>
                        <div className="flex flex-col gap-4 pl-2">
                            {information.map((link) => (
                                <Link key={link.href} href={link.href} className="font-jost">{link.label}</Link>
                            ))}
                        </div>
                    </div>
                </section>
                <div className="mt-auto p-8">
                    <p className="font-jost text-zinc-500">© 2026 Anne Roulant</p>
                </div>
            </nav>
        </aside>
    )
}