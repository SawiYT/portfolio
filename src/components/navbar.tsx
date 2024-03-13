import React from 'react'
import { ModeToggle } from './theme-button'

function NavigationBar() {
	return (
		<nav className='absolute z-50 flex justify-between items-center px-10 py-5 max-w-7xl m-auto w-full font-mono'>
			<div className=' space-x-4'>
				<a href='' className='text-xl font-bold'>
					Patryk
				</a>
				<ModeToggle />
			</div>
			<div className=' space-x-10'>
				<a href='' className='text-xl font-bold'>
					Projekty
				</a>
				<a href='' className='text-xl font-bold border-foreground border-2 px-6 py-3 rounded-md '>
					O Mnie
				</a>
			</div>
		</nav>
	)
}

export default NavigationBar
