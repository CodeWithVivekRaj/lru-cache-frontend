import React, { useState } from "react";
import { toast } from "react-toastify";
import { httpPost } from "../services/http-service";

const SetKeyForm = () => {
	const [key, setKey] = useState("");
	const [value, setValue] = useState("");
	const [duration, setExpiration] = useState("");

	const handleSetKey = async () => {
		try {
			const expiration = duration ? `${duration}s` : "";
			const response = await httpPost("/set", { key, value, expiration });
			toast.success(response.message);
		} catch (error) {
			console.error("Error setting key:", error);
			toast.error("Error setting key");
		}
	};

	const handleKeyPress = (e) => {
		// Prevent non-numeric characters from being typed
		const charCode = e.which ? e.which : e.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			e.preventDefault();
		}
	};

	return (
		<div className="section">
			<h2>Set Key</h2>
			<div>
				<label>Key:</label>
				<input
					type="text"
					value={key}
					onChange={(e) => setKey(e.target.value)}
				/>
			</div>
			<div>
				<label>Value:</label>
				<input
					type="text"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>
			<div>
				<label>Expiration:</label>
				<input
					type="text"
					value={duration}
					onChange={(e) => setExpiration(e.target.value)}
                    onKeyPress={handleKeyPress}
				/>
			</div>
			<button onClick={handleSetKey}>Set Key</button>
		</div>
	);
};

export default SetKeyForm;
