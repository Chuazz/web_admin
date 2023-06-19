import './globals.css';

export const metadata = {
    title: 'Trang chủ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className="sidebar-mini layout-navbar-fixed layout-fixed sidebar-mini-xs sidebar-mini-md layout-footer-fixed"
                style={{ height: 'auto' }}
            >
                <div>{children}</div>
            </body>
        </html>
    );
}
