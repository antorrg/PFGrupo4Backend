require ('dotenv').config();
const { MERCADOPAGO_ACCESS_TOKEN }=process.env;
const mercadopago = require("mercadopago");

const postCreateParchuseOrderController = async (userID, items, orderID, req, res) => {

	console.log("userID: " + userID);
	//console.log("auxItems: " + JSON.stringify(auxItems));

	mercadopago.configure({
		access_token: MERCADOPAGO_ACCESS_TOKEN,
	});

	let preference = {
		items: items,
		/*player: {
			name: "Juan",
			surname: "esq",
			email: "juan86@gmail.com"
		},*/
		back_urls: {
			//"success": "http://localhost:3001/success",
			"success": "http://http://localhost:3000/checkout/Succesfull",
			"failure": "http://http://localhost:3000/checkout/Failure",
			"pending": "http://http://localhost:3000/checkout/Pending"
		},
		auto_return: 'approved',
		external_reference: orderID,
		notification_url: "https://d2d5-181-53-96-163.ngrok-free.app/post/paymentResultwebhook"
		//notification_url: "https://3fd5-181-53-96-163.ngrok-free.app/post/webhook"
		//auto_return: "approved"
		//auto_return: "http://localhost:3000/pending"
	};

	/*
	getRouter.get("/success", (req, res) => res.send("success"));
getRouter.get("/failure", (req, res) => res.send("failure"));
getRouter.get("/pending", (req, res) => res.send("pending"));
getRouter.get("/webhook", (req, res) => res.send("webhook"));
	*/

    try {
        const orderResult = await mercadopago.preferences.create(preference);
		//const body = orderResult.body;
        //console.log(orderResult.body);
		//return orderResult.body;
		//const transactionId = orderResult.body.id;
		return orderResult.body;

    } catch (error) {
        res.status(500).send("postCreateParchuseOrderController not found");
    }
};

module.exports = postCreateParchuseOrderController;