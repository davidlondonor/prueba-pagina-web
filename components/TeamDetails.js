import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import Link from "next/link";

const TeamDetails = () => {
	return (
		<section className="team__details fix p-relative pt-120 pb-260">
			<Container>
				<Row>
					<Col xl={5} lg={5} md={5}>
						<div className="team__details-thumb">
							<img src="/assets/images/team/member-1.jpg" alt="" />
						</div>
						<div className="team__details-thumb-content">
							<span>Founder y CEO</span>
							<div className="team__details-thumb-social">
								<Link href="#">
									<a>
										<i className="fa-brands fa-facebook-f"></i>
									</a>
								</Link>
								<Link href="#">
									<a>
										<i className="fa-brands fa-twitter"></i>
									</a>
								</Link>
								<Link href="#">
									<a>
										<i className="fa-brands fa-instagram"></i>
									</a>
								</Link>
								<Link href="#">
									<a>
										<i className="fa-brands fa-youtube"></i>
									</a>
								</Link>
							</div>
						</div>
					</Col>
					<Col
						xl={{ span: 6, offset: 1 }}
						lg={{ span: 6, offset: 1 }}
						md={7}
					>
						<div className="team__details-content">
							<h2>Nathalia Miranda</h2>
							<p>
								Creadora de nuevos presentes. Es quién enfoca el
								pensamiento estratégico en las organizaciones.
								Apasionada por el liderazgo y por la transformación del
								ser para lograr resultados superiores en el hacer.
							</p>

							<div className="team__details-counter d-sm-flex">
								<div className="team__details-counter-item">
									<h2>
										<CountUp end={350} duration={5} />+
									</h2>
									<p>Proyectos completos</p>
								</div>
								<div className="team__details-counter-item">
									<h2>
										<CountUp end={150} duration={5} />+
									</h2>
									<p>Satisfaccion</p>
								</div>
								<div className="team__details-counter-item">
									<h2>
										<CountUp end={15} duration={5} />+
									</h2>
									<p>Años de experiencia </p>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default TeamDetails;
