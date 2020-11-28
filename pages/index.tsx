import Logo from 'public/logo.svg';

export default function Home() {
	return (
		<div className="md:flex bg-white rounded-lg p-24 justify-center">
			<Logo />
			<img
				className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
				src="/dulce.jpg"
			/>
			<div className="text-center md:text-left">
				<h2 className="text-lg font-semibold">Dra. Dulce Maria Cid Paz</h2>
				<div className="text-primary">Dentista</div>
				<div className="text-gray-600">
					Twitter: <a href="#">@fixingsmilesmx</a>
				</div>
				<div className="text-gray-600">www.dentistatoluca.mx</div>
			</div>
		</div>
	);
}
