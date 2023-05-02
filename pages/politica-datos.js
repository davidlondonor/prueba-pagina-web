import Image from "next/image";
import Link from "next/link";

const politicadedatos = () => {
	return (
		<>
			<div className="text-center mb-4 pt-5">
				<Link href="/" passHref>
					<Image
						className="h-auto mb-2 cursor-pointer"
						src="/images/transformente.png"
						alt="Logo Transformente"
						width={270}
						height={70}
					/>
				</Link>
			</div>
			<main className="grid grid-cols-1 text-center bg-gray-200 ">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
					{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
					<div className="mx-auto max-w-3xl bg-white rounded-3xl drop-shadow-lg">
						<h1 className="text-2xl pt-4 font-bold">
							Politica de Tratamiendos de datos
						</h1>
						<p className="mx-10 text-left pt-3 my-3 pb-8">
							<strong>
								Políticas y Procedimientos para el Tratamiento de Datos
								Personales TRANSFORMENTE S.A.S.NIT: 901.643.128-1
							</strong>
							<br />
							<br />
							Medellín, enero 7 de 2023 <br />
							<strong>
								POLÍTICA DE TRATAMIENTO DE PROTECCIÓN DE DATOS
								PERSONALES DE LOS TITULARES TRANSFORMENTE S.A.S
							</strong>{" "}
							<br />
							<br />
							Dando cumplimiento a lo dispuesto en la Ley estatutaria
							1581 de 2012 y a su Decreto Reglamentario 1377 de 2013,
							<strong> TRANSFORMENTE S.A.S.,</strong> adopta la presente
							política para el tratamiento de datos personales, la cual
							será aplicada a todos los titulares de los datos
							recolectados o que en el futuro se obtengan en el ejercicio
							de las actividades comerciales o laborales. De esta manera,
							<strong>TRANSFORMENTE S.A.S.</strong>, manifiesta que
							garantiza los derechos de la privacidad, la intimidad, el
							buen nombre y la autonomía en el tratamiento de los datos
							personales, y en consecuencia todas sus actuaciones se
							regirán por los principios de legalidad, finalidad,
							libertad, veracidad o calidad, transparencia, acceso y
							circulación restringida, seguridad y confidencialidad.
							Todas las personas que en desarrollo de diferentes
							actividades contractuales, comerciales, laborales, entre
							otras, sean permanentes u ocasionales, llegaran a
							suministrar a TRANSFORMENTE S.A.S., cualquier tipo de
							información o dato personal, podrá conocerla, actualizarla
							y rectificarla. <br />
							<br />
							<strong>
								1. IDENTIFICACIÓN DEL RESPONSABLE DEL TRATAMIENTO NOMBRE
								DE LA COMPAÑIA:
							</strong>
							El presente Manual pertenece a la empresa
							<strong> TRANSFORMENTE S.A.S.,</strong>
							que actualmente maneja sus bases de datos y está sometida a
							políticas y procedimientos de protección de datos
							personales, según lo establece la legislación colombiana.
							Los datos de
							<strong> TRANSFORMENTE S.A.S. </strong> Son los siguientes:
							<br />
							<br />
							<Image
								className="pt-2"
								src="/images/empresadatos.png"
								alt="Datos Transformente"
								width={500}
								height={170}
							/>
							<br /> <strong> 2. OBJETO DEL MANUAL. </strong> El presente
							Manual tiene por objeto definir los procedimientos y
							políticas internas, para la protección del derecho
							constitucional que tienen todas las personas a conocer,
							actualizar y rectificar la información que se hayan
							recogido sobre ellas en las bases de datos o archivos
							propiedad <strong> TRANSFORMENTE S.A.S.</strong>, o cuyo
							tratamiento ha sido encargado a éste, y los demás derechos,
							libertades y garantías constitucionales a que se refieren
							los artículos 15 (derecho a la intimidad) y 20 (derecho a
							la información) de la Constitución Política de Colombia.{" "}
							<br />
							<strong> 3. ÁMBITO DE APLICACIÓN </strong>
							El ámbito de aplicación de este Manual, de conformidad con
							la Ley 1581 de 2012, serán los datos de personas
							registrados en todas las bases de datos de propiedad de{" "}
							<strong>TRANSFORMENTE S.A.S.,</strong>o cuyo tratamiento ha
							sido encargado a éste. Según el artículo 2o de la ley 1581
							de 2012, el régimen de protección de datos personales que
							se establece en el presente Manual no será aplicable a: a)
							Las bases de datos o archivos mantenidos en la empresa,
							serán de uso exclusivo de
							<strong>TRANSFORMENTE S.A.S..</strong> Cuando las bases de
							datos o archivos vayan a ser suministrados a terceros,
							previamente se deberá informar al Titular y solicitar su
							autorización para hacerlo. En todo caso, el manejo de las
							bases de datos y archivos quedarán sujetos al cumplimiento
							de las disposiciones contenidas en la ley 1581 de 2012.
							<br /> <strong>b)</strong> Las bases de datos y archivos
							que tengan por finalidad la seguridad y defensa nacional,
							así como la prevención, detección, monitoreo y control del
							lavado de activos y el financiamiento del terrorismo.
							<br /> <strong> c)</strong> Las Bases de datos que tengan
							como fin y contengan información de inteligencia y
							contrainteligencia.
							<br /> <strong> d)</strong> Las bases de datos y archivos
							de información periodística y otros contenidos editoriales.{" "}
							<br /> <strong>e)</strong> Las bases de datos y archivos
							regulados por la Ley 1266 de 2008. f) Las bases de datos y
							archivos regulados por la Ley 79 de 1993.
						</p>
					</div>
				</div>
			</main>
		</>
	);
};

export default politicadedatos;
