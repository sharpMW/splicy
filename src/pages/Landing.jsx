import React from 'react'
import SectionOne from "../components/L_Section_One"
import SectionTwo from "../components/L_Section_Two"
import SectionThree from "../components/L_Section_Three"
import Navbar from '../components/Navbar'

const Landing = () => {
  return (
    <>
      <Navbar/>
      <SectionOne/>
      <SectionTwo />
      <SectionThree/>
    </>
  );
}

export default Landing
