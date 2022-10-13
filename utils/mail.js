export async function sendEmail(payload) {
	const res = await fetch("/api/emailHandler", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	});
	return res.status === 200 ? true : false;
}
