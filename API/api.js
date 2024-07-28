fetch('https://bumblebee-rest.examsdaily.in/domainTag/get/all/firstV1')
    .then(response => {
        if (!response.ok){
            throw new Error('Netwaork response was not ok');
        }
        console.log(response.ok);
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Failed to fetch', error);
    });