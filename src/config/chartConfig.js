export const data = {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  
  let fetchItemsList = async () => {
    await fetch('https://localhost:7071/api/v1/Items/TopItem?year=2023&month=4', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        SessionID: user.session
      }
    })
      .then((response) => {
        response.json().then((data) => {
          console.log(data)
          if (data.err) {
            if (data.err) errorText.value = data.err
            else errorText.value = data.err
          } else {
            console.log(data)
            allItems.value = data
          }
        })
      })
      .catch((err) => console.log(err))
  }