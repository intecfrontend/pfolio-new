import { Cloud } from "react-icon-cloud";
import { StaticCloudItem } from "./StaticCloudItem";
import { StaticCloudData } from "./StaticCloudData";

export const StaticCloud = () => {
	const cloudProps = {
		containerProps: {
			style: {
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "60vw",
			},
		},
		options: {
			imageScale: 2,
			reverse: true,
			wheelZoom: false,
			noSelect: true,
			shuffleTags: true,
			decel: 0.95,
			initial: [0.055, 0.055],
			maxSpeed: 0.015,
			minSpeed: 0.001275,
			dragControl: true,
			fadeIn: 500,
			shadowBlur: 1,
			depth: 0.01,
		},
	};

	return (
		<Cloud {...cloudProps}>
			{StaticCloudData.map((item, key = 0) => (
				<StaticCloudItem data={item.icon} key={key} />
			))}
		</Cloud>
	);
};