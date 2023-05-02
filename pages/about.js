import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About";
import Experience from "../components/Experience";
import TeamHome from "../components/TeamHome";
import BlogHome from "../components/BlogHome";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";

const AboutPage = () => {
	return (
		<Layout pageTitle="trans | Business & Digital Agency">
			<PageHeader title="Nosotros" crumbTitle="Nosotros" />
			<Header
				heroLogo="/assets/images/logo/logo.svg"
				headerClass="header__white"
				menuClass="main-menu-3"
			/>
			<main>
				<About
					subTitle="Somos Transformente"
					titleFirst="Generamos valor"
					titleSecond="a través de la transformación"
				/>
				<Experience extraClass="mt-70" />
				<TeamHome subTitle="Equipo" />
				<BlogHome extraClass="pt-110" />
				<LetsWork />
			</main>
			<Footer />
		</Layout>
	);
};

export default AboutPage;
