import ButtonSecondary from "components/ButtonSecondary";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import { sendEmail } from "utils/mail";

const ContactForm = () => {
	// form controller states
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [phone, setPhone] = useState("");

	const onSubmitHandler = (e) => {
		e.preventDefault();

		// Generate email payload for admin & user
		const adminPayload = {
			subject: `oro-capital.com Contact form submission from ${name}`,
			html: `<h1>New Inquiry from ${name}</h1>
            <h4>new contact form submission(oro-capital.com)</h4><br>
              <p><strong>name: </strong> ${name}</p>
              <p><strong>Email: </strong> ${email}</p><br>
              <p><strong>Phone: </strong> ${phone}</p><br>
              <p><strong>Message: </strong> ${message}</p><br>
            `,
		};

		const userPayload = {
			to: email,
			from: `"Oro Capital" <no-reply@oro-capital.com>`,
			subject: `We received your inquiry`,
			html: `<p>Hello ${name},
            <br/>
            <br/>
            We have received your inquiry submission, we will contact you as soon as possible,<br/>
            meanwhile, take a look on our <a href="oro-capital.com/#faq">FAQ section</a>for more information.
            <br/>
            <br/>
            Thanks,
            Kemtech team
            </p>`,
		};

		sendEmail(adminPayload)
			.then((isSent) => {
				if (isSent) {
					setName("");
					setEmail("");
					setMessage("");
					setPhone("");
					toast.success("Sent successfully, we will get to you soon");
				} else {
					toast.error("Something went wrong, try again later");
				}
			})
			.then(sendEmail(userPayload));
	};

	return (
		<section className="container">
			<h2 className="mb-8 text-4xl font-semibold">
				Love to hear from you, <br />{" "}
				<span className="font-bold text-primaryOrange">
					Let&apos;s get in touch{" "}
				</span>
			</h2>

			<form className="w-full" onSubmit={onSubmitHandler}>
				<div className="mb-4">
					<label htmlFor="Name" className="label">
						Name
					</label>
					<input
						className="input w-2/3 lg:w-1/4"
						name="Name"
						id="Name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="John Doe"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="Email" className="label">
						Email
					</label>
					<input
						className="input w-2/3 lg:w-1/4"
						name="Email"
						id="Email"
						type="email"
						placeholder="example@domain.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className=" mb-4">
					<label htmlFor="phone" className="label">
						Phone number
					</label>
					<input
						className="input w-2/3 lg:w-1/4"
						name="phone"
						id="phone"
						type="phone"
						placeholder="+2012356789"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						required
					/>
				</div>
				<div className="mb-6">
					<label htmlFor="message" className="label">
						Message
					</label>
					<textarea
						className="input h-64 w-full lg:w-1/2"
						id="message"
						name="message"
						value={message}
						placeholder="Hello Oro, I want to ask about... "
						onChange={(e) => setMessage(e.target.value)}
						required
					></textarea>
				</div>
				<button type={"submit"}>
					<ButtonSecondary>
						<MdEmail /> Submit
					</ButtonSecondary>
				</button>
			</form>
		</section>
	);
};

export default ContactForm;
