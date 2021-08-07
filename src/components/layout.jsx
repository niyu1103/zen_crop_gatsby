import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/scss/style.scss"

export const Layout = ({ children }) => {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}