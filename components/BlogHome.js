import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import BlogHomeCard from "./BlogHomeCard";

const BLOG_DATA = [
	{
		blogImg: "/assets/images/blog/blog-img-1.jpg",
		blogLink: "/single-blog",
		blogDate: "15 diciembre, 2022",
		blogCat: "Digital",
		catLink: "/blog",
		blogTitle: "¿Cómo gestionar la trasformación digital?",
	},
	{
		blogImg: "/assets/images/blog/blog-img-2.jpg",
		blogLink: "/single-blog",
		blogDate: "24 febrero, 2023",
		blogCat: "Ventas",
		catLink: "/blog",
		blogTitle: "¿Cómo aplicar la innovación para aumentar las ventas?",
	},
	{
		blogImg: "/assets/images/blog/blog-img-3.jpg",
		blogLink: "/single-blog",
		blogDate: "10 marzo, 2023",
		blogCat: "Marketing",
		catLink: "/blog",
		blogTitle:
			"¿Cuál es el nuevo modelo de oficina más apropiado para mi empresa?",
	},
];

const BlogHome = ({ extraClass }) => {
	return (
		<section className={`blog__area fix p-relative ${extraClass} pb-50`}>
			<div className="blog__shape">
				<img
					className="blog-shape-1"
					src="assets/images/shape/blog/blog-s-1.png"
					alt=""
				/>
				<img
					className="blog-shape-2"
					src="assets/images/shape/blog/blog-s-2.png"
					alt=""
				/>
				<img
					className="blog-shape-3 d-none d-sm-block"
					src="assets/images/shape/blog/blog-s-3.png"
					alt=""
				/>
				<img
					className="blog-shape-4"
					src="assets/images/shape/blog/blog-s-4.png"
					alt=""
				/>
			</div>
			<Container>
				<Row className="mb-65">
					<Col xl={12}>
						<div className="blog__title text-center">
							<SectionTitle
								subTitle="Blog"
								titleFirst="Últimas publicaciones"
							/>
							<p>
								Puedes consultar las nuevas publicaciones de nuestro
								blog
							</p>
						</div>
					</Col>
				</Row>
				<Row>
					{BLOG_DATA.map(
						(
							{
								blogLink,
								blogImg,
								blogDate,
								blogCat,
								catLink,
								blogTitle,
							},
							index
						) => (
							<BlogHomeCard
								key={index}
								blogLink={blogLink}
								blogImg={blogImg}
								blogDate={blogDate}
								blogCat={blogCat}
								catLink={catLink}
								blogTitle={blogTitle}
							/>
						)
					)}
				</Row>
			</Container>
		</section>
	);
};

export default BlogHome;
