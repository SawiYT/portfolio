import { logotitle, subtitle, title } from '@/components/primitives'
import React from 'react'
import NavigationBar from '@/components/navbar'
import { SeparatorDemo } from '@/components/separator'
import photo from '../../public/iphone.png'
import ac from '../../public/amazing.png'
import cp from '../../public/image.png'
import photo2 from '../../public/panel.png'
import photo3 from '../../public/minecraft.png'
import photo4 from '../../public/macbook.png'
import Image from 'next/image'

function page() {
	return (
		<>
			<section>
				<div className='relative flex items-center justify-between h-screen bg-background overflow-x-hidden'>
					<div className='w-3/4 p-6 relative z-50'>
						<h1 className={title()}>Tworzenie przestrzeni w sieci, które inspirują i angażują</h1>
						<p className={subtitle()}>
							Specjalizujemy się w tworzeniu stron internetowych, które łączą w sobie kreatywność i funkcjonalność.
							Nasze projekty są dopracowane w każdym szczególe, <br /> by zapewnić wyjątkowe doświadczenia online i
							wspierać cele Twojego biznesu.
						</p>
						<SeparatorDemo />
					</div>

					<div className='relative flex flex-col justify-center items-center w-2/5 h-full bg-[#029973] overflow-hidden'>
						<Image
							className='relative z-30 w-3/4 h-auto  top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2'
							src={photo}
							alt='iPhone Mockup'
						/>
					</div>

					<img
						src='https://assets.website-files.com/63ad0d023928e40391f52937/63ad16f5da15976c346291e8_Ellipse%201.svg'
						loading='lazy'
						alt=''
						className='absolute z-10 max-w-none transform rotate-[-10deg] left-[66%] top-[20%] '
					/>
					<img
						src='https://assets.website-files.com/63ad0d023928e40391f52937/63ad16f5da15976c346291e8_Ellipse%201.svg'
						loading='lazy'
						alt=''
						className='absolute z-20 left-[70%] top-[25%]'
					/>
				</div>
			</section>
			<section className='flex flex-row h-[30vh] bg-foreground justify-center'>
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
				<div className='flex flex-row items-center'>
					<Image width={100} src={cp} alt='Description' />
					<p className={` text-muted pb-4 text-gray-500 font-semibold font-mono ${logotitle()}`}>CM-PACK</p>
				</div>
			</section>
			<section className='flex flex-col h-[120vh] overflow-hidden  p-10'>
				<h2 className='text-4xl font-semibold pb-16 p-4 overflow-hidden self-start'>Poznaj nasza niezwykla oferte!</h2>
				<div className='flex flex-1 overflow-hidden gap-6 '>
					<div class='w-1/3 relative h-full p-12 bg-[#e8f369] text-black flex flex-col items-start'>
						<div>
							<h2 className={`font-semibold ${subtitle()}`}>Nowoczesny oraz spersonalizowany wyglad strony</h2>
							<p className=''>
								Tworzymy nowoczesne strony sperzonalizowane do twoich potrzeb, nie wazne z czym bedzie zwiazane
							</p>
						</div>
						<div class='self-start mt-auto'>
							<Image className=' absolute right-0 bottom-0 z-30 w-3/4 h-auto' src={photo3} alt='iPhone Mockup' />
						</div>
					</div>

					<div className='w-3/4 flex flex-col gap-6'>
						<div className='h-1/2 p-12 bg-[#ffd6e0] text-black flex justify-between items-center'>
							<div>
								<h2>Spersonalizowane Panele</h2>
								<p>Dzięki naszym panelom z naszej strony korzysta się tak łatwo, jak dodawanie posta na Facebooku</p>
							</div>
							<div className='flex justify-center items-start overflow-hidden h-full'>
								<Image className='relative z-30 w-3/4 object-cover' src={photo2} alt='iPhone Mockup' />
							</div>
						</div>
						<div className='h-1/2 p-12 bg-[#c4f5fc] text-black flex flex-row justify-between items-center'>
							<div className='flex justify-center items-start overflow-hidden h-full w-2/3'>
								<Image className='relative z-30 w-full object-cover' src={photo4} alt='iPhone Mockup' />
							</div>
							<div>
								<h2>Responsywność na wiele urządzeń</h2>
								<p>Nasze strony będą wyglądać tak samo dobrze na telefonie jak i na innych urządzeniach</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default page
