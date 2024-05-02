export const EmailTemplate = ({
  name,
  lastName,
  email,
  number,
  message,
}: any) => (
  <div>
    <p>Hello Faizer,</p>
    <p>
      {name} {lastName} has submitted the contact form on your website.
      <br />
      Their email is {email}!
      <br />
      Their number is {number}!
      <br />
      and there message is {message}
    </p>
    <p>
      Regards,
      <br />
      {name}
    </p>
  </div>
);
