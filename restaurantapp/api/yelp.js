export default async function fetchYelpData() {
  const url = 'https://api.yelp.com/v3/businesses';
  const headers = {
    'Authorization': 'Bearer aETOPuVSQ-luGy16YjLMitcWYtZh4W9pRa8Z8hk5Tz42JZA2f2UPY0ve9r7XDLnrlfVrbVqqJ-MagxP1AugW2wZgFVw2cl2ci8tq0UnFZRzUsT7_x_0-7hVa4F-RZHYx'
  };


  try {
    debugger;
    const response = await fetch(url, {
      method: 'GET',
      headers: headers,
    });

x
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }


    const data = await response.json();
    return data;

  } catch (error) {

    console.error('Error fetching data: ', error);
    return null;
  }
}
