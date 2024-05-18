const Razorpay = require('razorpay');

apiKey="rzp_test_3sHGOI1pRr9bUY"
apiSecret="Y2jXmnHcDEcS75rX0zJ72DTm"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;