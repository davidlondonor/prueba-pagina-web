import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import Link from "next/link";

const Footer = () => {
	return (
		<footer>
			<div className="footer__area fix p-relative pt-200 pb-60">
				<div className="footer__shape">
					<img
						className="footer-shape-1"
						src="/assets/images/shape/footer/footer-s-1.png"
						alt=""
					/>
					<img
						className="footer-shape-2"
						src="/assets/images/shape/footer/footer-s-2.png"
						alt=""
					/>
				</div>
				<Container>
					<Row className="mb-145">
						<Col xxl={6} xl={7} lg={8} md={10}>
							<div className="footer__newsletter">
								<SectionTitle
									subTitle="Inscribete a nuestra comunidad"
									titleFirst="Newsletter"
								/>
							</div>
						</Col>
						<Col xxl={{ span: 5, offset: 1 }} xl={5} lg={4} md={4}>
							<div className="footer__subscribe">
								<form action="#">
									<div className="footer__subscribe-input">
										<div className="form-group">
											<input
												type="email"
												className="form-control"
												placeholder="Email"
											/>
										</div>
										<button type="submit">Inscribirse</button>
									</div>
								</form>
							</div>
						</Col>
					</Row>
					<Row className="mb-50">
						<Col xl={4} lg={4} md={10} sm={10}>
							<div
								className="footer__widget wow fadeIn"
								data-wow-delay=".5s"
							>
								<div className="footer__widget-logo">
									<img
										src="assets/images/logo/Logo-footer.svg"
										alt="logo"
									/>
									<p>
										Core object made kolor adipisci elit sed diam
										nonummy nibh euismod tincidunt laoreet dolore
										magna grinjon.
									</p>
								</div>
								<div className="footer__widget-social">
									<Link href="https://www.linkedin.com/in/nathalia-miranda/">
										<a aria-label="Encuentra el perfil en Linkedin">
											<i className="fa-brands fa-linkedin"></i>
										</a>
									</Link>
									<Link href="https://www.instagram.com/nathaliamirandaortiz/">
										<a aria-label="Encuentra el perfil en Instagram">
											<i className="fa-brands fa-instagram"></i>
										</a>
									</Link>
								</div>
							</div>
						</Col>
						<Col xl={2} lg={2} md={4} sm={6}>
							<div className="footer__widget">
								<div className="footer__widget-title">
									<Link href="/services">
										<a>
											<h5>Servicios</h5>
										</a>
									</Link>
								</div>
								<div className="footer__widget-link">
									<ul>
										<li>
											<Link href="/services-details">
												<a>Ikigai – Propósito superior</a>
											</Link>
										</li>
										<li>
											<Link href="/services-details">
												<a>Inteligencia emocional</a>
											</Link>
										</li>
										<li>
											<Link href="/services-details">
												<a>PNL Programación Neurolingüística</a>
											</Link>
										</li>
										<li>
											<Link href="/services-details">
												<a>Gestión del cambio</a>
											</Link>
										</li>
										<li>
											<Link href="/services-details">
												<a>Certificaciones B</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</Col>
						<Col xl={2} lg={2} md={4} sm={6}>
							<div className="footer__widget footer__widget-mt-2">
								<div className="footer__widget-title">
									<h5>Transformente</h5>
								</div>
								<div className="footer__widget-link">
									<ul>
										<li>
											<Link href="/about">
												<a>Nosotros</a>
											</Link>
										</li>
										<li>
											<Link href="/services">
												<a>Servicios</a>
											</Link>
										</li>
										<li>
											<Link href="/team">
												<a>Equipo</a>
											</Link>
										</li>
										<li>
											<Link href="/contact">
												<a>Contacto</a>
											</Link>
										</li>
										<li>
											<Link href="/services">
												<a>Servicios</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</Col>
						<Col xl={4} lg={4} md={4} sm={10}>
							<div className="footer__widget footer__widget-mt">
								<div className="footer__widget-title">
									<h5>Información</h5>
								</div>
								<div className="footer__widget-info">
									<div className="footer__widget-address">
										<p>Medellín, Antioquia</p>
									</div>
									<div className="footer__widget-phone d-flex align-items-center">
										<i className="fa-solid fa-phone"></i>
										<p>
											<Link href="tel:+573007855675">
												<a>+57 300 785 56 75</a>
											</Link>
										</p>
									</div>
									<div className="footer__widget-email d-flex align-items-center">
										<i className="fa-solid fa-paper-plane"></i>
										<p>
											<Link href="mailto:info@example.com">
												<a>info@example.com</a>
											</Link>
										</p>
									</div>
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col xl={12}>
							<div className="footer__copyright">
								<p>2023 © Todos los derechos reservados</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;
