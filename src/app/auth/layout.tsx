export default function ShopLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <main className="min-h-screen bg-green-900">
            {children}
        </main>
    );
}