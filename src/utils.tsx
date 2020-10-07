import Cl from "./Cloudinary";

export const getSrc = ({ publicId, width }) =>
	Cl.url(publicId, {
		crop: "scale",
		width,
	});

export const getSrcSet = ({ publicId, widths }) =>
	widths.map((width) => `${getSrc({ publicId, width })} ${width}w`).join(", ");
