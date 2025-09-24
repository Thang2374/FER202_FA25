function Exercise2() {
    //1. Tạo mảng số nguyên, in ra danh sách các số trong mảng
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //2. Tính tổng các phần tử trong mảng
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    // 3. TÍnh giá trị trung bình của các phần tử trong mảng
    const average = sum/numbers.length;
    //4. khai mang chuoi names, in ra danh sach cac ten
    //theo tt tang dan Alphabet
    const names = ["Thang", "Huy", "Long", "Vu", "Duy"];
    names.sort();
    //5. khai bao 1 mang students chua 10 doi tuong students
    //id la so nguyen, name la chuoi, age la so nguyen, grade la so thuc
    const students = [
    { id: 1, name: "Thang", age: 20, grade: 8.5 },
    { id: 2, name: "Huy", age: 21 , grade: 7.5},  
    { id: 3, name: "Long", age: 22 , grade: 9.0},   
    { id: 4, name: "Vu", age: 23, grade: 6.5},
    { id: 5, name: "Duy", age: 24, grade: 6.0},];
    // in ra danh sach ten cac sinh vien co diem >=7.0, sap xep theo diem giam dan
    const topStudents = students
    .filter(student => student.grade >= 7.5)
    .sort((a, b) => b.grade - a.grade);
    

    
      const avgTopGrade =
    topStudents.reduce((acc, curr) => acc + curr.grade, 0) /
    topStudents.length;

  return (
    <div>
      <h2>Exercise 2 </h2>
      <p>In mảng số nguyên</p>
      <ul>
        {numbers.map((num,i) => (
        <li key={i}>{num}</li>))}
      </ul>
      <p>Tổng các phần tử của mảng : {sum}</p>
      <p>Giá trị trung bình của các phần tử trong mảng: {average.toFixed(2)}</p>
      <p>Danh sách tên theo thứ tự tăng dần Alphabet: </p>
        <ul>
        {names.map((name,i) => (
        <li key={i}>{name}</li>))}
        </ul>
        <p>Hiển thị danh sách topStudents dưới dạng bảng</p>
        <table border={1} cellPadding={5}>
        <thead>
        <tr>
            <th>ID</th> 
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
        </tr>
        </thead>
        <tbody>
        {topStudents.map((student) => (
            <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.grade}</td>
       
            </tr>
        ))}
        </tbody>
        </table>
        <tfoot>
            <tr>
                 <td colSpan={4} style={{ textAlign: "center", fontWeight: "bold" }}>
                Average Top Grade: {avgTopGrade.toFixed(2)} </td>
            </tr>
        </tfoot>
    </div>
  );
}
export default Exercise2;       