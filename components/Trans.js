import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from "./SectionTitle";

const trans = () => {
	return (
		<section className="trans__area fix p-relative pt-115 pb-145">
			<div className="trans__shape">
				<img
					className="m-shape-1 d-none d-sm-block"
					src="/assets/images/shape/testimonials/t-shape-1.png"
					alt=""
				/>
				<img
					className="m-shape-2"
					src="/assets/images/shape/testimonials/t-shape-2.png"
					alt=""
				/>
				<img
					className="m-shape-3"
					src="/assets/images/shape/testimonials/t-shape-3.png"
					alt=""
				/>
				<img
					className="m-shape-4"
					src="/assets/images/shape/testimonials/t-shape-4.png"
					alt=""
				/>
			</div>
			<Container>
				<Row className="mb-110">
					<Col xl={12}>
						<div className="trans__title text-center">
							<SectionTitle
								subTitle="Somos Transformente"
								titleFirst="Trabajamos para ti"
							/>
							<p>Nos encantan los retos, conversemos sobre ellos</p>
						</div>
					</Col>
				</Row>
				<Row>
					<Col xl={12}>
						<div className="trans__counter">
							<div className="trans__counter-content text-center">
								<h2>
									<CountUp end={500} duration={5} />+
								</h2>
								<p>Clientes satisfechos</p>
							</div>
						</div>
						<div className="trans__counter trans__counter-2">
							<div className="trans__counter-content trans__counter-content-2 text-center">
								<h2>
									<CountUp end={280} duration={5} />+
								</h2>
								<p>Valor entregado</p>
							</div>
						</div>
						<div className="trans__content d-flex">
							<div className="trans__thumb-1">
								<img
									src="/assets/images/trans/trans-img-1.jpg"
									alt=""
								/>
							</div>
							<div className="trans__thumb-2">
								<img
									src="/assets/images/trans/trans-img-2.jpg"
									alt=""
								/>
							</div>
							<div className="trans__thumb-3">
								<img
									src="/assets/images/trans/trans-img-3.jpg"
									alt=""
								/>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default trans;
