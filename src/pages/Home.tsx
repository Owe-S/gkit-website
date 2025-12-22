import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../App.css'

function Home() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="app">
            {/* Header */}
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <Navbar />
            </header>

            {/* SECTION 1: HERO (LIGHT THEME, CLEAN PRO) */}
            <section className="bg-white px-6 py-20 text-center">
                <div className="max-w-3xl mx-auto">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-4">
                        [TAGLINE PLACEHOLDER]
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        [HERO HEADING PLACEHOLDER]
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 mb-8">
                        [SHORT SUBTEXT PLACEHOLDER – 1–2 LINES]
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                        <a href="#"
                           className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium
                                    bg-blue-600 text-white hover:bg-blue-700 transition">
                            [PRIMARY CTA PLACEHOLDER]
                        </a>
                        <a href="#"
                           className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium
                                    border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
                            [SECONDARY CTA PLACEHOLDER]
                        </a>
                    </div>
                </div>
            </section>

            {/* SECTION 2: SERVICE / FEATURE CARDS (3 COLUMNS ON DESKTOP, 1 ON MOBILE) */}
            <section className="bg-white px-6 py-16">
                <div className="max-w-5xl mx-auto">
                    <header className="text-center mb-10">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                            [SECTION HEADING PLACEHOLDER]
                        </h2>
                        <p className="text-sm md:text-base text-gray-600">
                            [SHORT INTRO TEXT PLACEHOLDER – OPTIONAL]
                        </p>
                    </header>

                    <div className="grid gap-6 md:grid-cols-3">
                        {/* Card 1 */}
                        <article className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                                <span className="text-xs text-blue-600">[ICON]</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                [CARD 1 TITLE PLACEHOLDER]
                            </h3>
                            <p className="text-sm text-gray-600">
                                [CARD 1 DESCRIPTION PLACEHOLDER – 2–3 LINES]
                            </p>
                        </article>

                        {/* Card 2 */}
                        <article className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                                <span className="text-xs text-blue-600">[ICON]</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                [CARD 2 TITLE PLACEHOLDER]
                            </h3>
                            <p className="text-sm text-gray-600">
                                [CARD 2 DESCRIPTION PLACEHOLDER – 2–3 LINES]
                            </p>
                        </article>

                        {/* Card 3 */}
                        <article className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                                <span className="text-xs text-blue-600">[ICON]</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                [CARD 3 TITLE PLACEHOLDER]
                            </h3>
                            <p className="text-sm text-gray-600">
                                [CARD 3 DESCRIPTION PLACEHOLDER – 2–3 LINES]
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* SECTION 3: SHORT PROBLEM / BENEFIT LIST WITH ICON ROWS */}
            <section className="bg-[#F7F9FC] px-6 py-16">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-10">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                            [SECTION HEADING PLACEHOLDER]
                        </h2>
                        <p className="text-sm md:text-base text-gray-600">
                            [OPTIONAL SUBTEXT PLACEHOLDER – MAX 1–2 LINES]
                        </p>
                    </header>

                    <div className="space-y-4">
                        {/* Row 1 */}
                        <div className="flex items-start gap-3">
                            <div className="mt-1 w-8 h-8 rounded-full bg-white border flex items-center justify-center">
                                <span className="text-xs text-blue-600">[ICON]</span>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">
                                    [ROW TITLE PLACEHOLDER 1]
                                </h3>
                                <p className="text-sm text-gray-600">
                                    [ROW DESCRIPTION PLACEHOLDER 1 – 1–2 LINES]
                                </p>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="flex items-start gap-3">
                            <div className="mt-1 w-8 h-8 rounded-full bg-white border flex items-center justify-center">
                                <span className="text-xs text-blue-600">[ICON]</span>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">
                                    [ROW TITLE PLACEHOLDER 2]
                                </h3>
                                <p className="text-sm text-gray-600">
                                    [ROW DESCRIPTION PLACEHOLDER 2 – 1–2 LINES]
                                </p>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="flex items-start gap-3">
                            <div className="mt-1 w-8 h-8 rounded-full bg-white border flex items-center justify-center">
                                <span className="text-xs text-blue-600">[ICON]</span>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">
                                    [ROW TITLE PLACEHOLDER 3]
                                </h3>
                                <p className="text-sm text-gray-600">
                                    [ROW DESCRIPTION PLACEHOLDER 3 – 1–2 LINES]
                                </p>
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div className="flex items-start gap-3">
                            <div className="mt-1 w-8 h-8 rounded-full bg-white border flex items-center justify-center">
                                <span className="text-xs text-blue-600">[ICON]</span>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">
                                    [ROW TITLE PLACEHOLDER 4]
                                </h3>
                                <p className="text-sm text-gray-600">
                                    [ROW DESCRIPTION PLACEHOLDER 4 – 1–2 LINES]
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: TWO HORIZONTAL CASE / PROJECT CARDS */}
            <section className="bg-white px-6 py-16">
                <div className="max-w-5xl mx-auto">
                    <header className="text-center mb-10">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                            [SECTION HEADING PLACEHOLDER]
                        </h2>
                        <p className="text-sm md:text-base text-gray-600">
                            [BRIEF SECTION DESCRIPTION PLACEHOLDER]
                        </p>
                    </header>

                    <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
                        {/* Case 1 */}
                        <article className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white flex flex-col gap-3">
                            <div className="w-full h-28 rounded-lg bg-gray-100 mb-2 flex items-center justify-center text-gray-400 text-xs">
                                [THUMBNAIL / ILLUSTRATION PLACEHOLDER]
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                [CASE TITLE PLACEHOLDER 1]
                            </h3>
                            <p className="text-sm text-gray-600">
                                [SHORT CASE DESCRIPTION PLACEHOLDER – 2–3 LINES]
                            </p>
                        </article>

                        {/* Case 2 */}
                        <article className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white flex flex-col gap-3">
                            <div className="w-full h-28 rounded-lg bg-gray-100 mb-2 flex items-center justify-center text-gray-400 text-xs">
                                [THUMBNAIL / ILLUSTRATION PLACEHOLDER]
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                [CASE TITLE PLACEHOLDER 2]
                            </h3>
                            <p className="text-sm text-gray-600">
                                [SHORT CASE DESCRIPTION PLACEHOLDER – 2–3 LINES]
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* SECTION 5: PRODUCT / MODULE LIST (STACKED ITEMS) */}
            <section className="bg-white px-6 py-16">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-10">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                            [SECTION HEADING PLACEHOLDER]
                        </h2>
                        <p className="text-sm md:text-base text-gray-600">
                            [OPTIONAL SECTION SUBTEXT PLACEHOLDER]
                        </p>
                    </header>

                    <div className="space-y-4">
                        {/* Item 1 */}
                        <article className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 bg-white">
                            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                                <span className="text-xs text-blue-600">[ICON]</span>
                            </div>
                            <div>
                                <h3 className="text-sm md:text-base font-semibold text-gray-900">
                                    [PRODUCT / MODULE NAME PLACEHOLDER 1]
                                </h3>
                                <p className="text-sm text-gray-600">
                                    [SHORT DESCRIPTION PLACEHOLDER 1 – 1–2 LINES]
                                </p>
                            </div>
                        </article>

                        {/* Item 2 */}
                        <article className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 bg-white">
                            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                                <span className="text-xs text-blue-600">[ICON]</span>
                            </div>
                            <div>
                                <h3 className="text-sm md:text-base font-semibold text-gray-900">
                                    [PRODUCT / MODULE NAME PLACEHOLDER 2]
                                </h3>
                                <p className="text-sm text-gray-600">
                                    [SHORT DESCRIPTION PLACEHOLDER 2 – 1–2 LINES]
                                </p>
                            </div>
                        </article>

                        {/* Item 3 */}
                        <article className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 bg-white">
                            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                                <span className="text-xs text-blue-600">[ICON]</span>
                            </div>
                            <div>
                                <h3 className="text-sm md:text-base font-semibold text-gray-900">
                                    [PRODUCT / MODULE NAME PLACEHOLDER 3]
                                </h3>
                                <p className="text-sm text-gray-600">
                                    [SHORT DESCRIPTION PLACEHOLDER 3 – 1–2 LINES]
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* SECTION 6: CONTACT / FOOTER (LIGHT THEME) */}
            <footer className="bg-[#F7F9FC] px-6 py-12 border-t border-gray-200">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                        {/* Left block */}
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-1">
                                [CONTACT HEADING PLACEHOLDER]
                            </h2>
                            <p className="text-sm text-gray-600">
                                [SHORT CONTACT OR CALL-TO-ACTION TEXT PLACEHOLDER]
                            </p>
                        </div>

                        {/* Right block */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                            <a href="#"
                               className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                                [PRIMARY CONTACT CTA PLACEHOLDER]
                            </a>
                            <a href="#"
                               className="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-4">
                                [SECONDARY CONTACT LINK PLACEHOLDER]
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6 border-t border-gray-200">
                        <p className="text-xs text-gray-500">
                            [FOOTER SMALL PRINT PLACEHOLDER – E.G. COPYRIGHT / ORG INFO]
                        </p>
                        <div className="flex gap-4 text-xs text-gray-500">
                            <a href="#" className="hover:text-gray-900">[LINK 1]</a>
                            <a href="#" className="hover:text-gray-900">[LINK 2]</a>
                            <a href="#" className="hover:text-gray-900">[LINK 3]</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
