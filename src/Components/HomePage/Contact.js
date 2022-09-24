import classes from "./Contact.module.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const form = useRef(null);

  const submitButtonHandler = () => {
    console.log(process.env.REACT_APP_email_service_key);
    emailjs
      .sendForm(
        process.env.REACT_APP_email_service_key,
        process.env.REACT_APP_email_template_key,
        form.current,
        process.env.REACT_APP_email_public_key
      )
      .then(
        () => {
          toast.success("We will Contact you shortly");
        },
        (error) => {
          console.log(error);
        }
      );

    reset();
  };

  return (
    <>
      {" "}
      <h1 className={classes.heading} id='contact'>
        Contact
      </h1>
      <div className={classes.contact}>
        <div className={classes.contact_left}>
          <p>
            The only platform in the world that <br /> translates your website
            into blended <br /> language & multiple languages in just <br /> one
            click.
          </p>
          <p style={{ wordSpacing: 0 }}>Let’s Connect & Go local.</p>
          <img
            className={`${classes.circle} ${classes.rotating}`}
            src='/images/circle.png'
            alt=''
          />
          <div>
            <img src='/images/logo.png' className={classes.logo} alt='' />
            <p className={classes.gray}>
            Helping businesses to expand their reach to the
              <br /> untapped global markets in the customers own native
              <br /> language, making the businesses local and global
              <br /> at the same time. Make that market your own market today.
              
            </p>   
          </div>
        </div>
        <div className={classes.contact_right}>
          <p>
            Want to take your website on foreign <br /> markets, Say no more,
            Let’s connect.
          </p>
          <form
            className={classes.form}
            ref={form}
            onSubmit={handleSubmit(submitButtonHandler)}>
            <div style={{ marginTop: "10%" }}></div>
            <input
              type='text'
              required
              style={{ marginBottom: "0.8rem" }}
              name=''
              id=''
              placeholder='User name'
              {...register("name")}
            />
            <br />
            <div></div>
            <input
              type='email'
              required
              name=''
              id=''
              placeholder='Email'
              {...register("email")}
            />
            <div>Your Website?</div>
            <input type='url' required name='' id='' {...register("url")} />
            <div>Your Number?</div>
            <input
              type='number'
              required
              name=''
              id=''
              {...register("number")}
            />

            <button>Submit</button>
          </form>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              {" "}
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#pricing'>Price</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
          <ul style={{ marginTop: "0" }}>
            <li>
              <a href='#terms'>Cookie</a>
            </li>
            <li>
              {" "}
             
              <a href='#privacy'>Terms & Condition</a>
            </li>
            <li>
              <a href='#privacy'>Privacy Policy</a>
            </li>
          </ul>
          
        </div>
      </div>
    </>
  );
};

export default Contact;
