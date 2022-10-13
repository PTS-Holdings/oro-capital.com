import nodemailer from "nodemailer";

export default async function emailHandler(req, res) {
	const {
		CONFIG_MAIL_USER,
		CONFIG_MAIL_Password,
		CONFIG_MAIL_HOST,
		CONFIG_ADMIN_EMAIL,
	} = process.env;

	// Check request payload has the necessary object
	const emailPayload = req.body;

	if (!emailPayload["subject"]) res.status(400).send();
	if (!emailPayload["html"] || emailPayload.text) res.status(400).send();

	//Set a default if it's not sent
	if (!emailPayload["from"])
		emailPayload[
			"from"
		] = `"Oro Capital Mail Client" <no-reply@oro-capital.com>`;

	if (!emailPayload["to"]) emailPayload["to"] = CONFIG_ADMIN_EMAIL;

	// Open nodemailer transporter
	const transporter = nodemailer.createTransport({
		host: CONFIG_MAIL_HOST,
		port: 465,
		secure: true,
		auth: {
			user: CONFIG_MAIL_USER,
			pass: CONFIG_MAIL_Password,
		},
	});

	//Send Email
	transporter.sendMail(emailPayload, function (err, info) {
		if (err) {
			console.log(err);
			res.status(500).send();
		} else {
			console.log(info);
			res.status(200).send();
		}
	});
}
