const axios = require('axios'); // Import Axios if you haven't already

const recipeTitle = 'YourRecipeTitleHere'; // Replace this with the actual recipe title you are searching for

const fetchData = async () => {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://us-west-2.aws.data.mongodb-api.com/app/data-bsqfo/endpoint/data/v1/action/find',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'LNHaSO2LqK4gCXhPHzINTgO3EAY0D5qI1OKbbU6qvfzPtgFJGiO6XIcxK3vcfKOY'
      },
      data: {
        collection: 'recipe',
        database: 'macromania',
        dataSource: 'Cluster0',
        filter: {
          title: {
            $regex: `.*${recipeTitle}.*`
          }
        },
        projection: {
          _id: 0,
          title: 1,
          image: 2
        }
      }
    });

    console.log(response.data);
  } catch (error) {
    console.log("Error name:", error.name);
    console.log("Error message:", error.message);
    console.log("Error stack:", error.stack);
  }
};

fetchData();

