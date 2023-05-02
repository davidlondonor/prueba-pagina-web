import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import TeamMemberCard from "./TeamMemberCard";

const MEMBER_DATA = [
	{
		memberImg: "/assets/images/team/member-2.jpg",
		memberLink: "/single-team",
		memberName: "Maria Paula Miranda",
		memberPosition: "Psicóloga",
	},
	{
		memberImg: "/assets/images/team/member-3.jpg",
		memberLink: "/single-team",
		memberName: "Victor Cabrera",
		memberPosition: "Abogado",
	},
	{
		memberImg: "/assets/images/team/member-7.jpg",
		memberLink: "/single-team",
		memberName: "Juan Carlos Andrade",
		memberPosition: "Abogado",
	},
	{
		memberImg: "/assets/images/team/member-1.jpg",
		memberLink: "/single-team",
		memberName: "Nathalia Miranda",
		memberPosition: "CEO & Founder",
	},
	{
		memberImg: "/assets/images/team/member-4.jpg",
		memberLink: "/single-team",
		memberName: "Marcela Moreno",
		memberPosition: "Manager",
	},
	{
		memberImg: "/assets/images/team/member-5.jpg",
		memberLink: "/single-team",
		memberName: "Ana Sofia Ramirez",
		memberPosition: "Comunicadora Relaciones Corporativas",
	},
	{
		memberImg: "/assets/images/team/member-6.jpg",
		memberLink: "/single-team",
		memberName: "Silvia Valencia",
		memberPosition: "Manager",
	},
];

const TeamMember = ({ subTitle }) => {
	return (
		<section className="team__area pt-115 pb-80 mb-150 fix p-relative">
			<div className="team__shape">
				<img
					className="t-shape-1"
					src="/assets/images/shape/testimonials/t-shape-1.png"
					alt=""
				/>
				<img
					className="t-shape-2"
					src="/assets/images/shape/testimonials/t-shape-2.png"
					alt=""
				/>
				<img
					className="t-shape-3"
					src="/assets/images/shape/testimonials/t-shape-3.png"
					alt=""
				/>
				<img
					className="t-shape-4"
					src="/assets/images/shape/testimonials/t-shape-4.png"
					alt=""
				/>
			</div>
			<Container>
				<Row className="mb-65">
					<Col xl={12}>
						<div className="team__heading text-center">
							<SectionTitle
								subTitle={subTitle}
								titleFirst="Nuestro talentoso equipo"
							/>
							<p>Nuestro equipo esta listo para comenzar nuevos retos</p>
						</div>
					</Col>
				</Row>
				<Row>
					{MEMBER_DATA.map(
						(
							{ memberImg, memberLink, memberName, memberPosition },
							index
						) => (
							<TeamMemberCard
								key={index}
								memberImg={memberImg}
								memberLink={memberLink}
								memberName={memberName}
								memberPosition={memberPosition}
							/>
						)
					)}
				</Row>
			</Container>
		</section>
	);
};

export default TeamMember;
