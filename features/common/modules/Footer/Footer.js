"use client"

import Link from "next/link"
import { FooterStyledTag } from "./styles"
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
    return (
        <FooterStyledTag>
            <article className="flex h-full justify-between items-center">
                <span>© 2024 Booking Hub</span>
                <section className="socialmedia-icons hidden md:flex h-full justify-between items-center gap-8">
                    <Link href="/">
                        <BsFacebook size={24}/>
                    </Link>
                    <Link href="/">
                        <FaLinkedinIn size={24}/>
                    </Link>
                    <Link href="/">
                        <BsTwitter size={24}/>
                    </Link>
                    <Link href="/">
                        <BsInstagram size={24}/>
                    </Link>
                </section>
            </article>
        </FooterStyledTag>
    )
}

export default Footer