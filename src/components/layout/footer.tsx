
export function Footer() {
    return (
        <footer className="border-t">
            <div className="container flex items-center justify-between h-14">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} AniLib. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
