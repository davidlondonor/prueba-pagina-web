import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ContactForm = () => {
	return (
		<section
			id="contact"
			className="project__area project__area-2 p-relative pt-130 mb-260"
		>
			<div className="project__shape contact__shape">
				<img
					className="project-s-1 c-s-1"
					src="/assets/images/shape/project/p-s-1.png"
					alt=""
				/>
				<img
					className="project-s-2 c-s-2"
					src="/assets/images/shape/project/p-s-2.png"
					alt=""
				/>
				<img
					className="project-s-3 c-s-3"
					src="/assets/images/shape/project/p-s-3.png"
					alt=""
				/>
				<img
					className="project-s-4 c-s-4 d-none d-lg-block"
					src="/assets/images/shape/project/p-s-4.png"
					alt=""
				/>
			</div>
			<Container>
				<Row>
					<Col xl={9} lg={10}>
						<div className="project__thumb d-sm-flex">
							<div className="project__thumb-1">
								<img
									src="/assets/images/project/project-img-1.jpg"
									alt=""
								/>
							</div>
							<div className="project__thumb-2 project__thumb-3 d-none d-sm-block">
								<img
									src="/assets/images/project/project-img-2.jpg"
									alt=""
								/>
							</div>
						</div>
					</Col>
					<Col
						xl={{ span: 7, offset: 5 }}
						lg={{ span: 8, offset: 4 }}
						md={{ span: 10, offset: 2 }}
					>
						<div className="contact__form contact__form-2">
							<div className="contact__form-title mb-40">
								<h4>Envianos un mensaje</h4>
							</div>
							<div className="contact__form-content">
								<form
									action="https://getform.io/f/3ff4875e-fb67-4f2e-8aba-344b8e857c9e"
									id="contact-form"
									method="POST"
								>
									<div className="field-format d-sm-flex justify-content-between mb-40">
										<div className="form-group pr-10 form-group-2">
											<input
												type="text"
												className="form-control"
												name="name"
												placeholder="Nombre"
											/>
										</div>
										<div className="form-group pl-10">
											<input
												type="email"
												className="form-control"
												name="email"
												placeholder="Email"
											/>
										</div>
									</div>
									<div className="form-group mb-40">
										<input
											type="text"
											className="form-control"
											name="asunto"
											placeholder="Asunto"
										/>
									</div>
									<div className="form-group mb-50">
										<textarea
											className="form-control"
											spellCheck="false"
											name="mensaje"
											placeholder="Escribe el mensaje"
										></textarea>
									</div>
									<button type="submit" className="m-btn">
										Enviar mensaje
									</button>
								</form>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ContactForm;
