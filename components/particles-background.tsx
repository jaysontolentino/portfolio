"use client"

import { useMemo, useSyncExternalStore } from "react"
import Particles, { ParticlesProvider } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { Engine, ISourceOptions } from "@tsparticles/engine"
import { useTheme } from "next-themes"

async function initEngine(engine: Engine) {
    await loadSlim(engine)
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"

function subscribeReducedMotion(callback: () => void) {
    const query = window.matchMedia(REDUCED_MOTION_QUERY)
    query.addEventListener("change", callback)
    return () => query.removeEventListener("change", callback)
}

function getReducedMotionSnapshot() {
    return window.matchMedia(REDUCED_MOTION_QUERY).matches
}

function getReducedMotionServerSnapshot() {
    return false
}

export function ParticlesBackground({ className }: { className?: string }) {
    const reducedMotion = useSyncExternalStore(
        subscribeReducedMotion,
        getReducedMotionSnapshot,
        getReducedMotionServerSnapshot
    )
    const { resolvedTheme } = useTheme()

    const isDark = resolvedTheme === "dark"

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: { enable: false },
            fpsLimit: 60,
            detectRetina: true,
            background: { color: "transparent" },
            particles: {
                number: {
                    value: 42,
                    density: { enable: true, width: 1400, height: 900 },
                },
                color: {
                    value: isDark ? ["#e8933a", "#3fbfb0"] : ["#c9791f", "#2f9a8c"],
                },
                links: {
                    enable: true,
                    distance: 130,
                    color: isDark ? "#33405a" : "#c7cedb",
                    opacity: isDark ? 0.4 : 0.5,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 0.35,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: { default: "out" },
                },
                opacity: { value: { min: 0.3, max: 0.75 } },
                size: { value: { min: 1, max: 2.5 } },
            },
            interactivity: {
                events: { onHover: { enable: false }, onClick: { enable: false } },
            },
        }),
        [isDark]
    )

    if (reducedMotion) return null

    return (
        <ParticlesProvider init={initEngine}>
            <Particles id="hero-particles" className={className} options={options} />
        </ParticlesProvider>
    )
}
