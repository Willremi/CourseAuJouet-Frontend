export const onSaleDate = (data) => {
    let date = new Date(data)
    let day = date.getDate()
    let Month = date.getMonth()
    let Year = date.getFullYear()
    console.log(day);
    if(day < 10){
      day = "0" + day
    }
    if (Month < 10) {
      Month = "0" + (Month + 1);
    }

    return day + "/" + Month + "/" + Year
  }