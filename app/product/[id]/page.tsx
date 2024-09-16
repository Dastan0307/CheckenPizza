export default function ProductPage({
	params: { id },
}: {
	params: { id: string }
}) {
	return <div>Product Page with ID: {id}</div>;
}
