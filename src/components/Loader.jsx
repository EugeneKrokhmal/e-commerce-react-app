import React from "react"
import LoaderGif from "./../images/loader.gif"

const Loader = () => {
	return (
		<div className="loader d-flex justify-content-center">
			<img
				height={50}
				width={50}
				src={LoaderGif}
				alt="loading..."
			/>
		</div>
	)
}

export default Loader
