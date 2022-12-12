
import "./App.css";
import StripeCheckout from 'react-stripe-checkout';
function App() {
  const onToken = (token) => {
    console.log(token);
  }
  return (
    <div className="App">
      <StripeCheckout
        token={onToken}
        name="Zeta"
        stripeKey="pk_test_51MCRICSCten95ouSpij4khLSDioClHHypme2PTABF5aRV3Xw9swznMOTIkV8CYA564x4d5sniDEOLU0QAfQDOjNx00EF1yLXMj"
      />
    </div>
  );
}
export default App;
