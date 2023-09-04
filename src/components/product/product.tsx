import './product.css';

interface ProductProps {
	name?: string;
	description?: string;
	imageSrc?: string;
	moq?: string;
}

export const Product: React.FC<ProductProps> = ({ name, description, imageSrc, moq }) => {
	return (
		<div className="product">
			<div className="product-image">
				<img src={imageSrc} alt="bag" className="image" />
			</div>
			<div className="description">
				<h1 className="title">{name}</h1>
				<p className="info">{description}</p>
				<p className="contact">MOQ: {moq} (minimum order quantitiy) </p>
				<p className="contact">
					Contact for quote:
					<a href="mailto: thebagladysinfo@gmail.com">thebagladysinfo@gmail.com</a>
				</p>
			</div>
		</div>
	);
};
