import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Faq from "../components/Faq";
import BlogHome from "../components/BlogHome";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";

const HomeOne = () => {
	return (
		<Layout pageTitle="Transformente | Nos dedicamos al desarrollo de personas, proyectos y organizaciones">
			<Header heroLogo="/assets/images/logo/logo.svg" />
			<main>
				<Hero />
				<About
					subTitle="Nosotros"
					titleFirst="Nos dedicamos al desarrollo de personas, proyectos y organizaciones"
					titleSecond="Nos dedicamos al desarrollo de personas, proyectos y organizaciones"
				/>
				<Services extraClass="mt-75" />
				<Portfolio />
				<Experience />

				<Faq />
				<BlogHome extraClass="pt-60" />
				<LetsWork />
			</main>
			<Footer />
		</Layout>
	);
};

export default HomeOne;
