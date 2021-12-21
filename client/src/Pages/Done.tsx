import Boa_plain_bar from "../Components/boa-plain-bar";
import Boa_red_bar from "../Components/boa-red-bar";
import Footer from "../Components/footer";
import "./Done.css";

function Done() {
  return (
    <div className="Done">
      <Boa_plain_bar />
      <Boa_red_bar loan="Auto_Loan" />
      <div className="done-body">
        <div className="application-submitted">
          THANK YOU YOUR APPLICATION HAS BEEN SUBMITTED
        </div>
        <div className="what-happens-next">
          <h3>What happens next?</h3>
          <ul>
            <li>We will process your application as soon as possible</li>
            <li>
              We will contact you with next steps and any additional required
              documents.
            </li>
            <li>
              Our call ceners and financial centers do not have access to this
              information. Please do not call, email, chat, or go into a center
              to inquire about your loan.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Done;
