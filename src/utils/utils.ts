import axios from "axios";

 
 
 export const getToken = async ()=>{ fetch ("https://auth.monday.com/oauth2/token", {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: JSON.stringify(
     { client_id: '502b3ec84e869c8facdac09d8d8710fd',
      client_secret: '9eec2a2a42d2f363d40d6deed57575ca',
      code : sessionStorage.getItem('code')}
  ),
    }).then((response) => response.json())
    .then((response) => console.log(response)
    );
   }

   export const pushingMondayData = async (value:any) => {
      const {client_id, client_secret, signing_secret,app_id, mondayToken} = value
        const courseName = value.courseName;
    try {
      const addingData = await axios.post(
        "http://localhost:8000/api/course/addingMonday",
        {
            client_id:client_id,
            client_secret: client_secret,
            signing_secret: signing_secret,
            app_id:  app_id,
            mondayToken: mondayToken,
            courseName:courseName
        }
      );
      alert("data update");
    } catch (err: any) {
      console.log(err.response.data);
      alert(err.response.data);
    }
  };

   
  export const getMondayData = async ()=>{ fetch ("https://api.monday.com/v2", {
   method: 'post',
   headers: {
     'Content-Type': 'application/json',
     'Authorization' : ``
    },
    body: JSON.stringify({
      'query' : 'query {boards(limit:2, ids:[4190641229]) {name id items { name  }}}'
    })
   }).then((response) => response.json())
   .then((response) => console.log(response)
   );
  }

export const oauth = async ()=>{
    fetch("http://localhost:8000/api/course/start")
}

export const getDataFromMonday = async () =>{
  axios.get('http://localhost:8000/api/monday/getData')
}