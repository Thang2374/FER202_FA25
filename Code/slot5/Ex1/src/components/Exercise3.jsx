function Exercise3() {
  const person = {
    name: "Thang",
    age: 21,
    address: {
      street: "36",
    },
  };

  // Destructuring với giá trị mặc định
  const {
    address: { street, city = "Hue City" },
  } = person;

  console.log("Street:", street);
  console.log("City:", city);

  return (
    <div>
      <h2>Exercise 3</h2>
      <p>Street: {street}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default Exercise3;
