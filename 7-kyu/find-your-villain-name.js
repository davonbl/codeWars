function getVillainName(birthday) {
  const m = [
    "Evil",
    "Vile",
    "Cruel",
    "Trashy",
    "Despicable",
    "Embarrassing",
    "Disreputable",
    "Atrocious",
    "Twirling",
    "Orange",
    "Terrifying",
    "Awkward"
  ];
  const d = [
    "Mustache",
    "Pickle",
    "Hood Ornament",
    "Raisin",
    "Recycling Bin",
    "Potato",
    "Tomato",
    "House Cat",
    "Teaspoon",
    "Laundry Basket"
  ];

  let getMonth = String(birthday).split(" ")[1];
  let getDay = String(birthday).split(" ")[2];
  getDay >= 10 ? (getDay = Number(String(birthday).split(" ")[2][1])) : null;

  let combine = getMonth + " " + getDay;
  const birthArr = combine.split(" ");
  let birthNum, firstName, lastName;

  birthArr.forEach((ele, index) => {
    if (index === 0) {
      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      months.forEach((ele, index) =>
        ele === birthArr[0] ? (birthNum = index) : null
      );
      m.forEach((ele, index) =>
        index === birthNum ? (firstName = ele) : null
      );
    } else {
      d.forEach((ele, index) =>
        index === Number(birthArr[1]) ? (lastName = ele) : null
      );
    }
  });
  return `The ${firstName} ${lastName}`;
}
