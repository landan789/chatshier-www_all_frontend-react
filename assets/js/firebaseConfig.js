// // Initialize Firebase

// var config = {
// 	apiKey: "AIzaSyALpNZ4uw4cAt74i14ka8MYmlZxQTHR97k",
// 	authDomain: "tinichats-53c3e.firebaseapp.com",
// 	databaseURL: "https://tinichats-53c3e.firebaseio.com",
// 	projectId: "tinichats-53c3e",
// 	storageBucket: "tinichats-53c3e.appspot.com",
// 	messagingSenderId: "982360403003"
// };

// firebase.initializeApp(config);

// Initialize Firebase
var config = {
	apiKey: "AIzaSyCvEeDhpi-a8TDq5xzf3bG0GLyeHmyWz1c",
	authDomain: "tinichats-1c78f.firebaseapp.com",
	databaseURL: "https://tinichats-1c78f.firebaseio.com",
	projectId: "tinichats-1c78f",
	storageBucket: "tinichats-1c78f.appspot.com",
	messagingSenderId: "703410504817"
};
firebase.initializeApp(config);

const database = firebase.database();
const auth = firebase.auth();