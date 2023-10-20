import fetch from "node-fetch";

const { PAYPAL_API_CLIENT, PAYPAL_API_SECRET } = process.env;
const base = "https://api-m.sandbox.paypal.com";

export const createOrder = async (data) => {
  
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          reference_id: data.idProduct,
          amount: {
            currency_code: "USD",
            value: data.cost,
          },
        },
      ],
    }),
   
  });
  return handleResponse(response);
};

export const captureOrder = async (orderID) => {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders/${orderID}/capture`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return handleResponse(response);
};

export const generateAccessToken = async () => {
  try {
    if (!PAYPAL_API_CLIENT || !PAYPAL_API_SECRET) {
      throw new Error("Error API credentials");
    }
    const auth = Buffer.from(
      PAYPAL_API_CLIENT + ":" + PAYPAL_API_SECRET
    ).toString("base64");
    const response = await fetch(`${base}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Failed to generate Access Token:", error);
  }
};

async function handleResponse(response) {
  try {
    const jsonResponse = await response.json();
    return {
      jsonResponse,
      httpStatusCode: response.status,
    };
  } catch (err) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}
