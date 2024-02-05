export const fetchFunction = (accessToken, endpoint, sourceCode) => {
    // Define request parameters
    const submissionData = {
      compilerId: 11,
      sourceCode,
    };
  
    // Construct the URL to your proxy server
    const apiUrl = `http://localhost:3002/api/v4/submissions?access_token=${accessToken}`;
  
    // Create the fetch request and return the promise
    return fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(submissionData).toString(),
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 401) {
            console.log('Invalid access token');
          } else if (response.status === 402) {
            console.log('Unable to create submission');
          } else if (response.status === 400) {
            return response.json().then((data) => {
              console.log(`Error code: ${data.error_code}, details available in the message: ${data.message}`);
            });
          } else {
            console.log('Connection problem');
          }
        } else {
          return response.json(); // Submission data in JSON
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
};