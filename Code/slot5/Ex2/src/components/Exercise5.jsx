export function Exercise5() {
  const people = [
    { name: "Thang", age: 19 },
    { name: "Huy", age: 12 },
    { name: "Long", age: 15 },
    { name: "Hoang", age: 22 },
    { name: "Dung", age: 13 }
  ];

  // Lọc teen (13–19) và map ra chuỗi
  const teens = people
    .filter(person => person.age >= 13 && person.age <= 19)
    .map(person => `${person.name} (${person.age})`);

  return (
    <div>
      <h2>Exercise 5</h2>
      <ul>
        {teens.map((teen, index) => (
          <li key={index}>{teen}</li>
        ))}
      </ul>
    </div>
  );
}

export default Exercise5;
