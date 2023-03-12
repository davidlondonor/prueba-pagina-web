import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SectionTitle from "./SectionTitle";
import PortfolioItem from "./PortfolioItem";

const PORTFOLIO_ALL = [
	{
		portfolioImg: "/assets/images/portfolio/portfolio-1.jpg",
		portfolioCat: "1",
		portfolioTitle: "2",
		portfolioLink: "/single-portfolio",
	},
	{
		portfolioImg: "/assets/images/portfolio/portfolio-5.jpg",
		portfolioCat: "2",
		portfolioTitle: "3",
		portfolioLink: "/single-portfolio",
	},
	{
		portfolioImg: "/assets/images/portfolio/portfolio-3.jpg",
		portfolioCat: "4",
		portfolioTitle: "5",
		portfolioLink: "/single-portfolio",
	},
	{
		portfolioImg: "/assets/images/portfolio/p-1.jpg",
		portfolioCat: "6",
		portfolioTitle: "6",
		portfolioLink: "/single-portfolio",
	},
	{
		portfolioImg: "/assets/images/portfolio/p-2.jpg",
		portfolioCat: "7",
		portfolioTitle: "7",
		portfolioLink: "/single-portfolio",
	},
	{
		portfolioImg: "/assets/images/portfolio/p-3.jpg",
		portfolioCat: "8",
		portfolioTitle: "8",
		portfolioLink: "/single-portfolio",
	},
];

const PORTFOLIO_UI = [
	{
		portfolioImg: "/assets/images/portfolio/portfolio-5.jpg",
		portfolioCat: "11",
		portfolioTitle: "11",
		portfolioLink: "/single-portfolio",
	},
	{
		portfolioImg: "/assets/images/portfolio/p-1.jpg",
		portfolioCat: "12",
		portfolioTitle: "12",
		portfolioLink: "/single-portfolio",
	},
	{
		portfolioImg: "/assets/images/portfolio/p-3.jpg",
		portfolioCat: "13",
		portfolioTitle: "13",
		portfolioLink: "/single-portfolio",
	},
];

const PORTFOLIO_MARKETING = [
	{
		portfolioImg: "/assets/images/portfolio/portfolio-1.jpg",
		portfolioCat: "15",
		portfolioTitle: "15",
		portfolioLink: "/single-portfolio",
	},
	{
		portfolioImg: "/assets/images/portfolio/portfolio-3.jpg",
		portfolioCat: "16",
		portfolioTitle: "16",
		portfolioLink: "/single-portfolio",
	},
	{
		portfolioImg: "/assets/images/portfolio/p-2.jpg",
		portfolioCat: "17",
		portfolioTitle: "17",
		portfolioLink: "/single-portfolio",
	},
	{
		portfolioImg: "/assets/images/portfolio/p-1.jpg",
		portfolioCat: "18",
		portfolioTitle: "18",
		portfolioLink: "/single-portfolio",
	},
];

const PORTFOLIO_DEVELOPMENT = [
	{
		portfolioImg: "/assets/images/portfolio/portfolio-5.jpg",
		portfolioCat: "20",
		portfolioTitle: "20",
		portfolioLink: "/single-portfolio",
	},
	{
		portfolioImg: "/assets/images/portfolio/p-1.jpg",
		portfolioCat: "21",
		portfolioTitle: "21",
		portfolioLink: "/single-portfolio",
	},
	{
		portfolioImg: "/assets/images/portfolio/portfolio-3.jpg",
		portfolioCat: "22",
		portfolioTitle: "22",
		portfolioLink: "/single-portfolio",
	},
];

const PORTFOLIO_CONTENT = [
	{
		portfolioImg: "/assets/images/portfolio/p-3.jpg",
		portfolioCat: "30",
		portfolioTitle: "30",
		portfolioLink: "/single-portfolio",
	},
	{
		portfolioImg: "/assets/images/portfolio/portfolio-1.jpg",
		portfolioCat: "40",
		portfolioTitle: "40",
		portfolioLink: "/single-portfolio",
	},
	{
		portfolioImg: "/assets/images/portfolio/p-1.jpg",
		portfolioCat: "50",
		portfolioTitle: "50",
		portfolioLink: "/single-portfolio",
	},
	{
		portfolioImg: "/assets/images/portfolio/p-2.jpg",
		portfolioCat: "56",
		portfolioTitle: "56",
		portfolioLink: "/single-portfolio",
	},
];

const Services = () => {
	return (
		<section className="portfolio__area fix p-relative pb-90">
			<div className="portfolio__shape">
				<img
					className="portfolio-s-1"
					src="/assets/images/shape/portfolio/portfolio-s-1.png"
					alt=""
				/>
				<img
					className="portfolio-s-2"
					src="/assets/images/shape/portfolio/portfolio-s-2.png"
					alt=""
				/>
				<img
					className="portfolio-s-3 d-none d-sm-block"
					src="/assets/images/shape/portfolio/portfolio-s-3.png"
					alt=""
				/>
				<img
					className="portfolio-s-4"
					src="/assets/images/shape/portfolio/portfolio-s-4.png"
					alt=""
				/>
			</div>
			<Container>
				<Row>
					<Col xl={9}>
						<div className="portfolio__wrapper">
							<div className="portfolio__content">
								<div className="portfolio__title">
									<SectionTitle
										subTitle="Portafolio"
										titleFirst="Nuestro trabajo"
									/>
								</div>
							</div>
						</div>
					</Col>
				</Row>
				<div className="portfolio">
					<Tabs
						defaultActiveKey="all"
						transition={false}
						id="noanim-tab-example"
						className="portfolio__menu"
					>
						<Tab eventKey="all" title="Mostrar">
							<Row className="mt-150">
								{PORTFOLIO_ALL.map(
									(
										{
											portfolioImg,
											portfolioCat,
											portfolioTitle,
											portfolioLink,
										},
										index
									) => (
										<PortfolioItem
											key={index}
											portfolioImg={portfolioImg}
											portfolioCat={portfolioCat}
											portfolioTitle={portfolioTitle}
											portfolioLink={portfolioLink}
										/>
									)
								)}
							</Row>
						</Tab>
						<Tab eventKey="ui" title="Sinergia de equipo">
							<Row className="mt-150">
								{PORTFOLIO_UI.map(
									(
										{
											portfolioImg,
											portfolioCat,
											portfolioTitle,
											portfolioLink,
										},
										index
									) => (
										<PortfolioItem
											key={index}
											portfolioImg={portfolioImg}
											portfolioCat={portfolioCat}
											portfolioTitle={portfolioTitle}
											portfolioLink={portfolioLink}
										/>
									)
								)}
							</Row>
						</Tab>
						<Tab eventKey="marketing" title="Certificaciones B">
							<Row className="mt-150">
								{PORTFOLIO_MARKETING.map(
									(
										{
											portfolioImg,
											portfolioCat,
											portfolioTitle,
											portfolioLink,
										},
										index
									) => (
										<PortfolioItem
											key={index}
											portfolioImg={portfolioImg}
											portfolioCat={portfolioCat}
											portfolioTitle={portfolioTitle}
											portfolioLink={portfolioLink}
										/>
									)
								)}
							</Row>
						</Tab>
						<Tab eventKey="development" title="Gestión del cambio">
							<Row className="mt-150">
								{PORTFOLIO_DEVELOPMENT.map(
									(
										{
											portfolioImg,
											portfolioCat,
											portfolioTitle,
											portfolioLink,
										},
										index
									) => (
										<PortfolioItem
											key={index}
											portfolioImg={portfolioImg}
											portfolioCat={portfolioCat}
											portfolioTitle={portfolioTitle}
											portfolioLink={portfolioLink}
										/>
									)
								)}
							</Row>
						</Tab>
						<Tab eventKey="content" title="Inteligencia emocional">
							<Row className="mt-150">
								{PORTFOLIO_CONTENT.map(
									(
										{
											portfolioImg,
											portfolioCat,
											portfolioTitle,
											portfolioLink,
										},
										index
									) => (
										<PortfolioItem
											key={index}
											portfolioImg={portfolioImg}
											portfolioCat={portfolioCat}
											portfolioTitle={portfolioTitle}
											portfolioLink={portfolioLink}
										/>
									)
								)}
							</Row>
						</Tab>
					</Tabs>
				</div>
			</Container>
		</section>
	);
};

export default Services;
