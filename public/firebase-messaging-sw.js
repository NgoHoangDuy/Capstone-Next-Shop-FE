importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js')

const firebaseConfig = {
  apiKey: "AIzaSyCaVj7ri6kpyRfqKYZgODrxaeNi6xnEHY4",
  authDomain: "next-shop-2d498.firebaseapp.com",
  projectId: "next-shop-2d498",
  storageBucket: "next-shop-2d498.appspot.com",
  messagingSenderId: "135167592854",
  appId: "1:135167592854:web:6acfe03927284a8d3075b7",
  measurementId: "G-XRBBH97074"
}
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig)
// eslint-disable-next-line no-undef
const messaging = firebase.messaging()

messaging.onBackgroundMessage(payload => {
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: './logo.png'
  }
  self.registration.showNotification(notificationTitle, notificationOptions)
})
