import { Container, Filters, Title, TopBar } from '@/components/shared'
import { ProductsGroupList } from '@/components/shared/product-group-list'

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
			</Container>
			<TopBar />

			<Container className='pb-14'>
				<div className='flex gap-[60px]'>
					<div className='w-[250px]'>
						<Filters />
					</div>

					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductsGroupList
								title='Пиццы'
								categoryId={1}
								items={[
									{
										id: 1,
										name: 'Мясная пицца',
										price: 450,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6007F1524DA2ED9C24D3C57ACE.avif',
										items: [{ price: 550 }],
									},
									{
										id: 2,
										name: 'Мясная пицца',
										price: 450,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6007F1524DA2ED9C24D3C57ACE.avif',
										items: [{ price: 550 }],
									},
									{
										id: 3,
										name: 'Мясная пицца',
										price: 450,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6007F1524DA2ED9C24D3C57ACE.avif',
										items: [{ price: 550 }],
									},
									{
										id: 4,
										name: 'Мясная пицца',
										price: 450,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6007F1524DA2ED9C24D3C57ACE.avif',
										items: [{ price: 550 }],
									},
									{
										id: 5,
										name: 'Мясная пицца',
										price: 450,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6007F1524DA2ED9C24D3C57ACE.avif',
										items: [{ price: 550 }],
									},
									{
										id: 6,
										name: 'Мясная пицца',
										price: 450,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6007F1524DA2ED9C24D3C57ACE.avif',
										items: [{ price: 550 }],
									},
								]}
							/>
							<ProductsGroupList
								title='Комбо'
								categoryId={2}
								items={[
									{
										id: 1,
										name: 'Мясная пицца',
										price: 450,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6007F1524DA2ED9C24D3C57ACE.avif',
										items: [{ price: 550 }],
									},
									{
										id: 2,
										name: 'Мясная пицца',
										price: 450,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6007F1524DA2ED9C24D3C57ACE.avif',
										items: [{ price: 550 }],
									},
									{
										id: 3,
										name: 'Мясная пицца',
										price: 450,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6007F1524DA2ED9C24D3C57ACE.avif',
										items: [{ price: 550 }],
									},
									{
										id: 4,
										name: 'Мясная пицца',
										price: 450,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6007F1524DA2ED9C24D3C57ACE.avif',
										items: [{ price: 550 }],
									},
									{
										id: 5,
										name: 'Мясная пицца',
										price: 450,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6007F1524DA2ED9C24D3C57ACE.avif',
										items: [{ price: 550 }],
									},
									{
										id: 6,
										name: 'Мясная пицца',
										price: 450,
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EE7D6007F1524DA2ED9C24D3C57ACE.avif',
										items: [{ price: 550 }],
									},
								]}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
