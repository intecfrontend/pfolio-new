import React from "react";

export const StaticCloudItem = ({ data }) => {
	return (
		<div>
			<a>
				<img height="50" width="50" src={data} className="logo" />
			</a>
		</div>
	);
};