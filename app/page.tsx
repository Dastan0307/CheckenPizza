import { Container, Title, TopBar, Filters } from '@/components/shared'

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
			</Container>
			<TopBar />

			<Container className='pb-14'>
				<div className="flex gap-[60px]">
					<div className="w-[250px]">
						<Filters />
					</div>

					<div className="flex-1">
						<div className="flex flex-col gap-16">
							{/* <ProductsGroupList title="Пиццы" items={[1, 2, 3, 4, 5]} />
							<ProductsGroupList title="Комбо" items={[1, 2, 3, 4, 5]} /> */}
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
