import { logotitle, subtitle, title } from '@/components/primitives';
import React from 'react';
import NavigationBar from '@/components/navbar';
import { SeparatorDemo } from '@/components/separator';
import photo from '../../public/iphone.png';
import ac from '../../public/amazing.png';
import cp from '../../public/image.png';
import photo2 from '../../public/panel.png';
import photo3 from '../../public/minecraft.png';
import photo4 from '../../public/macbook.png';
import photo5 from '../../public/commerce.jpg';
import Image from 'next/image';
import { AccordionDemo } from '@/components/accordion';

function page() {
	return (
		<>
			<section>
				<div className='flex wrapper items-center justify-between h-screen bg-background overflow-x-hidden'>
					<div className=' w-full lg:w-1/2 p-6 relative z-50'>
						<h1 className={title()}>Tworzenie przestrzeni w sieci, które inspirują i angażują</h1>
						<p className={subtitle()}>
							Specjalizujemy się w tworzeniu stron internetowych, które łączą w sobie kreatywność i funkcjonalność.
							Nasze projekty są dopracowane w każdym szczególe, by zapewnić wyjątkowe doświadczenia online i wspierać
							cele Twojego biznesu.
						</p>
						<SeparatorDemo />
					</div>

					<div className='absolute hidden right-0 top-0 lg:flex flex-col justify-center items-center w-2/5 h-full bg-[#029973]'></div>
					<div>
						<Image
							className='hidden lg:absolute lg:flex z-30 w-80 h-auto transform lg:translate-x-1/4 lg:-translate-y-1/2 bottom-0 lg:left-1/2 lg:top-1/2'
							src={photo}
							alt='iPhone Mockup'
						/>
					</div>
				</div>
			</section>

			<section className='flex flex-row h-[30vh]  bg-secondary-foreground  justify-center'>
				<div className='flex flex-row items-center '>
					<Image width={100} src={cp} alt='Description' />
					<p className={` text-muted pb-4 text-gray-500 font-semibold font-mono ${logotitle()}`}>CM-PACK</p>
				</div>
				<div className='flex flex-row items-center'>
					<Image width={100} src={cp} alt='Description' />
					<p className={` text-muted pb-4 text-gray-500 font-semibold font-mono ${logotitle()}`}>CM-PACK</p>
				</div>
				<div className='flex flex-row items-center'>
					<Image width={100} src={cp} alt='Description' />
					<p className={` text-muted pb-4 text-gray-500 font-semibold font-mono ${logotitle()}`}>CM-PACK</p>
				</div>
				<div className='flex flex-row items-center'>
					<Image width={100} src={cp} alt='Description' />
					<p className={` text-muted pb-4 text-gray-500 font-semibold font-mono ${logotitle()}`}>CM-PACK</p>
				</div>
				<div className='flex flex-row items-center'>
					<Image width={100} src={cp} alt='Description' />
					<p className={` text-muted pb-4 text-gray-500 font-semibold font-mono ${logotitle()}`}>CM-PACK</p>
				</div>
				<div className='flex flex-row items-center'>
					<Image width={100} src={cp} alt='Description' />
					<p className={` text-muted pb-4 text-gray-500 font-semibold font-mono ${logotitle()}`}>CM-PACK</p>
				</div>
			</section>

			<section className='flex flex-col lg:h-[120vh] wrapper overflow-hidden p-10'>
				<h2 className='text-4xl font-semibold pb-16 p-4 overflow-hidden self-start'>Poznaj naszą niezwykłą ofertę!</h2>
				<div className='flex flex-col md:flex-row flex-1 overflow-hidden gap-6 '>
					<div className='w-full xl:w-1/3  relative h-full p-12 bg-[#e8f369] text-black flex flex-col items-start'>
						<div>
							<h2 className={`font-semibold ${subtitle()}`}>Nowoczesny oraz spersonalizowany wygląd strony</h2>
							<p>Tworzymy nowoczesne strony spersonalizowane do twoich potrzeb, nie ważne z czym będzie związane</p>
						</div>
						<div className='self-start mt-auto mx-auto'>
							<div className='flex justify-center pt-5 items-start overflow-hidden h-full'>
								<Image className='flex relative z-30 w-full object-cover' src={photo3} alt='iPhone Mockup' />
							</div>
						</div>
					</div>

					<div className='w-full md:w-3/4 flex flex-col gap-6'>
						<div className='h-full md:h-1/2 p-12 bg-[#ffd6e0] text-black flex  flex-col lg:flex-row justify-between items-center'>
							<div>
								<h2 className={`font-semibold ${subtitle()}`}>Spersonalizowane Panele</h2>
								<p>Dzięki naszym panelom z naszej strony korzysta się tak łatwo, jak dodawanie posta na Facebooku</p>
							</div>
							<div className='flex justify-center pt-5 items-start overflow-hidden h-full'>
								<Image className='flex relative z-30 w-full lg:w-3/4 object-cover' src={photo2} alt='iPhone Mockup' />
							</div>
						</div>
						<div className='h-full md:h-2/3 p-12 bg-[#c4f5fc] text-black flex flex-col md:flex-row justify-between items-center'>
							<div className='flex justify-center items-center overflow-hidden '>
								<Image className='relative z-30 object-cover' src={photo4} alt='iPhone Mockup' />
							</div>
							<div>
								<h2 className={`font-semibold ${subtitle()}`}>Responsywność na wiele urządzeń</h2>
								<p>Nasze strony będą wyglądać tak samo dobrze na telefonie jak i na innych urządzeniach</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className=' p-20 pt-20 bg-background'>
				<div className='flex flex-wrap items-center justify-center h-full'>
					<div className='w-full lg:w-1/2 p-5 bg-card flex flex-col items-center justify-center rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
						<h1 className='text-5xl font-bold text-foreground mb-6'>Frequently Asked Questions</h1>
						<div className='p-6 rounded-lg shadow bg-card'>
							<div className='flex items-center'>
								<AccordionDemo />
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className='text-center mb-12'>
				<h2 className={` pb-4 font-bold ${title()}`}>Masz dodatkowe pytania?</h2>
				<br />
				<p className={` pb-4 font-bold ${title()}`}>
					Napisz do nas na{' '}
					<a href='mailto:kontakt@amazingdev.pl' className='text-blue-600 text-3xl hover:underline'>
						kontakt@amazingdev.pl
					</a>
				</p>
			</div>

			<footer className='bg-gray-800 text-white p-4'>
				<div className='container mx-auto text-center'>
					<p className='text-sm'>© 2024 Moja Firma. Wszystkie prawa zastrzeżone.</p>
					<div className='flex justify-center mt-2'>
						<a href='#' className='mx-2'>
							Polityka prywatności
						</a>
						<a href='#' className='mx-2'>
							Warunki korzystania
						</a>
						<a href='#' className='mx-2'>
							Kontakt
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}

export default page;
