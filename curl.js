$.ajax({
        url: 'https://www.strava.com/api/v3/athlete',
        beforeSend: function(xhr) {
             xhr.setRequestHeader("Authorization", "Bearer API KEY")
        }, success: function(data){
            console.log(data);
            //process the JSON data etc
        }
})
