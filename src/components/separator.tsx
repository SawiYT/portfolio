import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

export function SeparatorDemo() {
	return (
		<div>
			<Separator className='my-4' />
			<div className='flex h-5 items-center space-x-4 mx-2 text-sm'>
				<Button>Zobacz projekty</Button>
				<div>
					20 projektow<span className='text-primary'>+</span>
				</div>
				<Separator orientation='vertical' />
				<div className=''>
					99.9<span className='text-primary'>%</span> - wydajnosci
				</div>
			</div>
		</div>
	)
}
