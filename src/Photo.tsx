import * as React from "react";
import { getSrc, getSrcSet } from "./utils";
// import { customMedia } from "./global.css";
// import styles from "./Photo.module.scss";
const styles = require("./Photo.module.scss");
const { customMedia } = require("./global.css");

const Photo = ({ publicId, alt, rounded, borderRadius }) => (
	<figure>
		<img
			className={rounded ? styles.roundedPhoto : styles.photo}
			style={
				typeof borderRadius !== "undefined"
					? {
							// ["--border-radius"]: borderRadius,
							borderRadius: borderRadius,
					  }
					: null
			}
			src={getSrc({
				publicId,
				width: 200,
			})}
			srcSet={getSrcSet({
				publicId,
				widths: [200, 400, 800],
			})}
			sizes={`${customMedia["--photo-breakpoint"]} 400px, 200px`}
			// sizes="(min-width: 30rem) 400px, 200px"
		/>{" "}
		<figcaption className={styles.caption}> {alt} </figcaption>
		{"Here is your cusotoms media data:" + `${customMedia["--photo-breakpoint"]}`}
	</figure>
);

Photo.defaultProps = {
	rounded: false,
	borderRadius: 1,
};

export default Photo;
