import classes from "./Notification.module.css";

const Notification = (props) => {
  const { title, message, status } = props;
  let specialClasses = "";

  if (status === "error") {
    specialClasses = classes.error;
  }
  if (status === "success") {
    specialClasses = classes.success;
  }

  // switch (status) {
  //   case "error":
  //     specialClasses = classes.error;
  //   case "sucess":
  //     specialClasses = classes.sucess;
  //   default:
  //     specialClasses = "";
  //     break;
  // }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
};

export default Notification;
