const firebaseConfig = {
    apiKey: "AIzaSyDydXcMDZxGLRckVZ7nuz8d2BD64URG2eA",
    authDomain: "aeek-project.firebaseapp.com",
    projectId: "aeek-project",
    storageBucket: "aeek-project.appspot.com",
    messagingSenderId: "174347383838",
    appId: "1:174347383838:web:92b10cf129573122d7aa0f",
    measurementId: "G-FD9WWXJXQ0"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// Firestore referansı
export const firestore = firebase.firestore();


// LOGIN oldugunu yoxlayir
// firebase.auth().onAuthStateChanged((user) => {
//     if (!user) {
//         window.location.href = "/admin/login/login.html";
//     }
// });


// const SwalFire = (swalContent, icon) => {
//     Swal.fire({
//         position: "center",
//         icon: icon,
//         title: swalContent,
//         showConfirmButton: false,
//         timer: 1500,
//     });
// };

// // // LOGOUT
// const logOutBtn = document.querySelector('.dropdown-item')
// logOutBtn.addEventListener('click', function () {
//     Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//         if (result.isConfirmed) {
//             await firebase.auth().signOut().then(() => {
//                 SwalFire('Log Out successfully!', 'success');
//             }).catch((error) => {
//                 SwalFire(`${error}:log Out error!!`, 'error');

//             });
//         }
//     });
// });