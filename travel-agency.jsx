"use client"

import { useState } from "react"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import DestinationsPage from "./components/DestinationsPage"
import DestinationDetailPage from "./components/DestinationDetailPage"
import RegionsPage from "./components/RegionsPage"
import ServicesPage from "./components/ServicesPage"
import BlogPage from "./components/BlogPage"

export default function PakistanTravelAgency() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedDestination, setSelectedDestination] = useState(null)

  const navigateToPage = (page) => {
    setCurrentPage(page)
    setIsMenuOpen(false)
    setSelectedDestination(null)
    window.scrollTo(0, 0)
  }

  const showDestinationDetails = (destination) => {
    setSelectedDestination(destination)
    setCurrentPage("destination-detail")
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentPage={currentPage}
        navigateToPage={navigateToPage}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />

      {currentPage === "home" && <HomePage navigateToPage={navigateToPage} />}
      {currentPage === "about" && <AboutPage navigateToPage={navigateToPage} />}
      {currentPage === "destinations" && (
        <DestinationsPage navigateToPage={navigateToPage} showDestinationDetails={showDestinationDetails} />
      )}
      {currentPage === "destination-detail" && (
        <DestinationDetailPage selectedDestination={selectedDestination} navigateToPage={navigateToPage} />
      )}
      {currentPage === "regions" && <RegionsPage navigateToPage={navigateToPage} />}
      {currentPage === "services" && <ServicesPage navigateToPage={navigateToPage} />}
      {currentPage === "blog" && <BlogPage navigateToPage={navigateToPage} />}
    </div>
  )
}
