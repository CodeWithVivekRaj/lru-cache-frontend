import React from "react";

function CacheDataList({ cacheData }) {
	return (
		<div className="section">
			<h2>Cache Data</h2>
			<ul>
				{cacheData.map((item) => (
					<li key={item.key}>
						<strong>Key:</strong> {item.key}, <strong>Value:</strong>{" "}
						{item.value}, <strong>Expiration:</strong> {item.duration}
					</li>
				))}
			</ul>
		</div>
	);
}

export default CacheDataList;
