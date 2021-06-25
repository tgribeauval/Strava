$.ajax({
        url: 'https://www.strava.com/api/v3/athlete',
        beforeSend: function(xhr) {
             xhr.setRequestHeader("Authorization", "Bearer 6426588e45355ea5057c6950610c0fd476e95b3f")
        }, success: function(data){
            console.log(data);
            //process the JSON data etc
        }
})
