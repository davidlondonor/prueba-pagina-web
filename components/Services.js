import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import ServiceItem from "./ServiceItem";

const SERVICE_DATA = [
	{
		serviceIcon: "/assets/images/icon/s-icon-1.png",
		serviceTitle: "Ikigai – Propósito superior",
		serviceDesc:
			"Descubrir y construir la razón de ser de las rutinas como motivación principal y gran herramienta para fluir mejor en un entorno de incertidumbre, complejo, ambiguo y volátil que nos propone este presente.",
		serviceLink: "/services-details",
	},
	{
		serviceIcon: "/assets/images/icon/s-icon-2.png",
		serviceTitle: "Inteligencia emocional",
		serviceDesc:
			"Comprender las emociones que gobiernan al ser humano, gestionar las que se reconocen en uno mismo, y también gestionar las que se reconocen en los demás, permite un relacionamiento asertivo conmigo, con los otros y con lo otro, desarrollando así el potencial que tiene para movilizar hacia los resultados ágilmente.",
		serviceLink: "/services-details",
	},
	{
		serviceIcon: "/assets/images/icon/s-icon-3.png",
		serviceTitle: "PNL:",
		serviceDesc:
			"Se aprenderá a aplicar esta forma de cambiar los pensamientos y hábitos de una persona para que sean exitosos por medio de técnicas de percepción, comportamiento y comunicación. ",
		serviceLink: "/services-details",
	},
	{
		serviceIcon: "/assets/images/icon/s-icon-4.png",
		serviceTitle: "Gestión del cambio",
		serviceDesc:
			"Acompañamos a las organizaciones a despertar en su talento  una disposición positiva a cualquier tipo de cambio, para así instalar nuevas mentalidades, resiliencia y apropiación de las nuevas formas de hacer las cosas.",
		serviceLink: "/services-details",
	},
	{
		serviceIcon: "/assets/images/icon/s-icon-5.png",
		serviceTitle: "Certificaciones B para empresas",
		serviceDesc:
			"Acompañamos a las organizaciones a ser relevantes para la sociedad, pasando de ser empresas del mundo a ser empresas para el mundo por medio del procesod e certificación de empresas B Lationamérica.",
		serviceLink: "/services-details",
	},
	{
		serviceIcon: "/assets/images/icon/s-icon-6.png",
		serviceTitle: "Sinergia de equipo:",
		serviceDesc:
			"La suma de los factores es algo más grande o más valioso que cada una de las partes por separado. En este espacio lograremos que todos los elementos tengan tal grado de conexión entre ellos que sean capaces de derribar los silos de trabajo, eliminando así la individualidad y crecer en conjunto. ",
		serviceLink: "/services-details",
	},
];

const Services = ({ extraClass }) => {
	return (
		<section
			className={`services__area p-relative fix ${extraClass} pt-120 pb-90`}
		>
			<div className="services__shape">
				<img
					className="services-s-1"
					src="/assets/images/shape/services/services-s-1.png"
					alt=""
				/>
				<img
					className="services-s-2"
					src="/assets/images/shape/services/services-s-2.png"
					alt=""
				/>
				<img
					className="services-s-3"
					src="/assets/images/shape/services/services-s-3.png"
					alt=""
				/>
			</div>
			<Container>
				<Row className="mb-55">
					<Col xl={6}>
						<div className="services__title">
							<SectionTitle
								subTitle="Servicios"
								titleFirst="Que hacemos"
							/>
						</div>
					</Col>
				</Row>
				<Row>
					{SERVICE_DATA.map(
						(
							{ serviceIcon, serviceTitle, serviceDesc, serviceLink },
							index
						) => (
							<ServiceItem
								key={index}
								serviceIcon={serviceIcon}
								serviceTitle={serviceTitle}
								serviceDesc={serviceDesc}
								serviceLink={serviceLink}
							/>
						)
					)}
				</Row>
			</Container>
		</section>
	);
};

export default Services;
