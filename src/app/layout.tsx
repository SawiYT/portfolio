import '@/app/globals.css';
import clsx from 'clsx';
import { fontSans } from '@/config/font-sans';
import { ThemeProvider } from '@/components/theme-provider';
import NavigationBar from '@/components/navbar';

type RootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<html lang='en' suppressHydrationWarning>
				<head />
				<body className={clsx('min-h-screen bg-background font-sans  antialiased', fontSans.variable)}>
					<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
						<div className=' flex relative flex-col h-screen'>
							<main className=''>
								<div className='wrapper'>
									<NavigationBar />
								</div>
								{children}
							</main>
						</div>
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
