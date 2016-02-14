var api = {
    postReport(report){
        var apiKey = `Zk!YM7khp6tLzF3eySXv`;
        var url = `http://52.91.167.0/wp-json/wp_red_caps/v1/incident`;
        fetch(url, {
            method: 'POST',
            headers: {
                'apikey': apiKey,
                'issue_id': '',
                'reporter_id': '',
                'report_time': Date.now(),
                'lat': '',
                'lng': '',
                'type': '',
                'business_name': '',
                'notes': '',
                'images': '',
                'police_contacted': '0'
            }
        })
        .then((response)=>response.text())
        .then((responseText)=>{
            return true;
          });
        })
        .catch((error) => {
            return false;
        });
    }
};

module.exports = api;