import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_RattEfDluUm29dBhDp9NDDQJ00X0QWPcDl";

  const onToken = token => {
    console.log(token);
    alert("Payment Succeded");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Kochi Haircare"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
