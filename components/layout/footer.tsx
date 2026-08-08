export function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="max-w-5xl mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        &copy; {new Date().getFullYear()} Jayson Tolentino. All rights reserved.
                    </p>
                </div>
                <p className="font-mono text-xs text-muted-foreground">
                    built with <span className="text-signal-amber">Next.js</span>
                </p>
            </div>
        </footer>
    )
}
