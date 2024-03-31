import './product.css';

interface ProductProps {
	name?: string;
	description?: string;
	imageSrc?: string;
	moq?: string;
	material?: string;
}

interface Gaiters extends ProductProps {}

export const Product: React.FC<ProductProps> = ({ name, description, imageSrc, material, moq }) => {
	console.log('materials', material);
	return (
		<div className="product">
			<div className="product-image">
				<img src={imageSrc} alt="bag" className="image" />
			</div>
			<div className="description">
				<h1 className="title">{name}</h1>
				<p className="info">{description}</p>
				<p className="material">Materials: {material}</p>
				{moq && <p className="contact">MOQ: {moq} (minimum order quantitiy) </p>}
				<p className="contact">
					Contact for quote:
					<a href="mailto: thebagladysinfo@gmail.com">thebagladysinfo@gmail.com</a>
				</p>
			</div>
		</div>
	);
};
