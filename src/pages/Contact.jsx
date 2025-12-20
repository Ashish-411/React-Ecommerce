import styled from "styled-components";
function Contact(){
    return (
        <Wrapper>
            <h2 className="common-heading">Contact Page</h2>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.8112551112318!2d85.32771000178968!3d27.687015002264694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d9587efd6d%3A0xb62a0258f6524323!2sM.P.P%20Burger%20house%20%26%20stick%20food%20station%20buddhanagar!5e0!3m2!1sen!2snp!4v1765951529573!5m2!1sen!2snp" 
            width="100%" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>

            <div className="container">
                <div className="contact-form">
                    <form action="https://formspree.io/f/xanrreld" method="POST" class="contact-inputs">
                        <input type="text" placeholder="Username" name="username" 
                        required autoComplete="off"/>
                        <input type="email"name="Email" placeholder="Email" 
                         autoComplete="off" required />
                        <textarea name="message" 
                        required autoComplete="off"
                        placeholder="Enter Your Message"></textarea>
                        <input type="submit" value="send"/>

                    </form>
                </div>
            </div>
        </Wrapper>

    );
}
const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
export default Contact;