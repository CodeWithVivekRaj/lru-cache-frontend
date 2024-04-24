import React, { useState } from "react";
import { toast } from "react-toastify";
import { httpGet } from "../services/http-service";

const GetKeyForm = () => {
	const [key, setKey] = useState("");
	const [cachedValue, setCachedValue] = useState("");

	const handleGetKey = async () => {
		try {
			const response = await httpGet("/get", { key });
			if (response.value == null) {
                toast.error("No key found");
                setCachedValue("");
				return;
			}
            toast.success("Fetched the value");
			let displayObject = `{${response.key}:${response.value}}`;
			setCachedValue(displayObject);
		} catch (error) {
			console.error("Error fetching key:", error);
			toast.error("Error getting key");
		}
	};

	return (
		<div className="section">
			<h2>Get Key</h2>
			<div>
				<label>Key:</label>
				<input
					type="text"
					value={key}
					onChange={(e) => setKey(e.target.value)}
				/>
			</div>
			<button onClick={handleGetKey}>Get Key</button>
			<div>
				<h3>Cached Value:</h3>
				<p>{cachedValue}</p>
			</div>
		</div>
	);
};

export default GetKeyForm;
