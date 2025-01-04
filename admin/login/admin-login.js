const firebaseConfig = {
    apiKey: "AIzaSyDydXcMDZxGLRckVZ7nuz8d2BD64URG2eA",
    authDomain: "aeek-project.firebaseapp.com",
    projectId: "aeek-project",
    storageBucket: "aeek-project.appspot.com",
    messagingSenderId: "174347383838",
    appId: "1:174347383838:web:92b10cf129573122d7aa0f",
    measurementId: "G-FD9WWXJXQ0"
};


firebase.initializeApp(firebaseConfig);

const adminLoginForm = document.getElementById('admin-login-form');

adminLoginForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const email = document.getElementById("email-signIn").value;
    const password = document.getElementById("password-signIn").value;
    // await initializeFirebase();

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.href = "/admin.html";
        })
        .catch((error) => {
            // Girişte hata oluştuğunda yapılacak işlemler
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Hata:", errorCode, errorMessage);
        });
});


// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         window.location.href = "/admin/admin.html";
//     } else {
//         console.log("Kullanıcı oturumu kapattı.");
//     }
// });