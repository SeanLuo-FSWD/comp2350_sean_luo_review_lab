const database = include('/databaseConnection');

function getAllResto(callback) {

	let sqlQuery = "SELECT restaurant_id, name, description FROM restaurant";

	database.query(sqlQuery, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});
}

function addResto(postData, callback) {
	let sqlInsert = "INSERT INTO restaurant (name, description) VALUES (:name, :desc);";
	let params = {	
			name: postData.name,
			desc: postData.description
		};
	console.log(sqlInsert);
	database.query(sqlInsert, params, (err, results, fields) => {
		if (err) {
			console.log(err);
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}
	});
}


function getReviews(postData, callback) {
	let sqlQuery = "SELECT restaurant_id, review_id, reviewer_name, details, rating FROM review WHERE restaurant_id = :resto_id";
	let params = {	
		resto_id: postData
	};

	database.query(sqlQuery, params, (err, results, fields) => {
		if (err) {
			console.log(err);
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}
	});
}


function addReview(postData, callback) {
	let sqlInsert = "INSERT INTO review (restaurant_id, reviewer_name, details, rating) VALUES (:restaurant_id, :reviewer_name, :details, :rating);";
	const rating = parseInt(postData.rating);
	let params = {	
			restaurant_id: postData.restaurant_id,
			reviewer_name: postData.reviewer_name,
			details: postData.details,
			rating: rating
		};
	console.log(sqlInsert);
	database.query(sqlInsert, params, (err, results, fields) => {
		if (err) {
			console.log(err);
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}
	});
}

function deleteReview(reviewId, callback) {
	let sqldeleteRestoReview = "delete from review where review_id = :reviewId";
	let params = {
		reviewId: reviewId
	};
	console.log(sqldeleteRestoReview);
	database.query(sqldeleteRestoReview, params, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});	
}


function deleteAllReviews(restaurant_id, callback) {
	let sqldeleteRestoReview = "delete from review where restaurant_id = :restaurant_id";
	let params = {
		restaurant_id: restaurant_id
	};
	console.log(sqldeleteRestoReview);
	database.query(sqldeleteRestoReview, params, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});	
}
 
function deleteResto(restaurant_id, callback) {
	let sqldeleteResto = "delete from restaurant where restaurant_id = :restaurant_id";
	let params = {
		restaurant_id: restaurant_id
	};
	console.log(sqldeleteResto);
	database.query(sqldeleteResto, params, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});	
}

module.exports = {getAllResto, addResto, deleteResto, deleteReview, getReviews,addReview, deleteAllReviews}
