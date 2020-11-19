import { ReactNotificationOptions, store } from 'react-notifications-component';

interface AlertTypes {
    title: string;
    message: string;
    type: any
}
export const showAlert = ({title, message, type}:AlertTypes) => {

  store.addNotification({
    title: {title},
    message: {message},
    type: type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true
    }
  });
}
