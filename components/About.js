import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from "./SectionTitle";

const About = ({ subTitle, titleFirst, titleSecond }) => {
	return (
		<section className="about__area fix p-relative pt-120 pb-120 about__pb">
			<Container>
				<Row>
					<Col xxl={7} xl={8} lg={10} md={10}>
						<div className="about__title mb-80">
							<SectionTitle
								subTitle={subTitle}
								titleFirst={titleFirst}
								titleSecond={titleSecond}
							/>
						</div>
					</Col>
				</Row>
				<Row>
					<Col xl={6} lg={6}>
						<div className="about__thumb">
							<div className="about__thumb-shape">
								<img
									className="about-s-1 d-none d-lg-block"
									src="/assets/images/shape/about/about-s-1.png"
									alt=""
								/>
								<img
									className="about-s-2 d-none d-md-block"
									src="/assets/images/shape/about/about-s-2.png"
									alt=""
								/>
							</div>
							<div className="about__thumb-image">
								<img src="/assets/images/about/about-img.jpg" alt="" />
							</div>
						</div>
					</Col>
					<Col xl={{ span: 5, offset: 1 }} lg={6}>
						<div className="about__content">
							<p>
								Nos dedicamos al desarrollo de personas, proyectos y
								organizaciones a través de cambios de estructura y
								gestión del talento. Transformamos a las personas para
								que eleven su nivel de desempeño en sus vidas y en sus
								trabajos.
							</p>
							<ul>
								<li>Ikigai – Propósito superior </li>
								<li>Inteligencia emocional:</li>
								<li>PNL: Programación neurolingüística</li>
							</ul>
						</div>
						<div className="about__counter-bg d-none d-sm-block">
							<div className="about__counter-content d-flex">
								<div className="about__counter-text text-center">
									<h2>
										<CountUp end={280} duration={5} />+
									</h2>
									<p>Proyectos entregados</p>
								</div>
								<div className="about__counter-text text-center">
									<h2>
										<CountUp end={1200} duration={5} />+
									</h2>
									<p>Clientes satisfechos</p>
								</div>
								<div className="about__counter-text text-center">
									<h2>
										<CountUp end={100} duration={5} />+
									</h2>
									<p>Conversaciones</p>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default About;
