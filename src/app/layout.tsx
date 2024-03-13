import '@/app/globals.css'
import clsx from 'clsx'
import { fontSans } from '@/config/font-sans'
import { ThemeProvider } from '@/components/theme-provider'
import NavigationBar from '@/components/navbar'

type RootLayoutProps = {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<html lang='en' suppressHydrationWarning>
				<head />
				<body className={clsx('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
					<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
						<div className='relative flex flex-col h-screen'>
							<NavigationBar />
							<main className='  flex-grow'>{children}</main>
						</div>
					</ThemeProvider>
				</body>
			</html>
		</>
	)
}
