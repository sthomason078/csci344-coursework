import React from "react";
import { Card } from 'antd';
const { Meta } = Card;

export default function AntCard({ name, image_url, description }) {
	return (
		<Card
			hoverable
			style={{ width: 300 }}
			cover={
				<img
					draggable={false}
					alt={name}
					src={image_url}
				/>
			}
		>
			<Meta title={name} description={description} />
		</Card>
	);
}