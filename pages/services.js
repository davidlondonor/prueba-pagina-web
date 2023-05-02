import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import trans from "../components/trans";
import Faq from "../components/Faq";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";

const ServicesPage = () => {
	return (
		<Layout pageTitle="trans | Business & Digital Agency">
			<PageHeader title="Servicios" crumbTitle="Servicios" />
			<Header
				heroLogo="/assets/images/logo/logo.svg"
				headerClass="header__white"
				menuClass="main-menu-3"
			/>
			<main>
				<Services />
				<trans />
				<Faq />
				<LetsWork />
			</main>
			<Footer />
		</Layout>
	);
};

export default ServicesPage;
