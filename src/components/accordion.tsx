import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function AccordionDemo() {
	return (
		<Accordion type='single' collapsible className='w-full'>
			<AccordionItem value='item-1'>
				<AccordionTrigger className=' text-4xl'>Ile masz lat?</AccordionTrigger>
				<AccordionContent className=' text-2xl'>Obecnie posiadam 17 lat.</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-2'>
				<AccordionTrigger className=' text-4xl'>Od ilu programujesz?</AccordionTrigger>
				<AccordionContent className=' text-2xl'>Zajmuje sie programowaniem od ponad pol roku.</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-3'>
				<AccordionTrigger className=' text-4xl'>Gdzie mozna sie z toba skontaktowac?</AccordionTrigger>
				<AccordionContent className=' text-2xl'>
					Mozna sie ze mna skontaktowac na discordzie{' '}
					<a href='https://discord.gg/BVuQYZZWcx'>https://discord.gg/BVuQYZZWcx</a>.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
