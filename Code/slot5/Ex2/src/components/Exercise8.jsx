export function Exercise8() {
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const stats = ages.reduce(
    (acc, age) => {
      acc.total += age;
      acc.min = Math.min(acc.min, age);
      acc.max = Math.max(acc.max, age);

      if (age >= 13 && age <= 19) {
        acc.buckets.teen++; 
      } else if (age >= 20) {
        acc.buckets.adult++;
      }

      return acc;
    },
    { total: 0, min: Infinity, max: -Infinity, buckets: { teen: 0, adult: 0 } }
  );

  return (
    <div>
      <h2>Exercise 8: Reduce nâng cao – Thống kê tuổi</h2>
      <p>
        Total: {stats.total}, Min: {stats.min}, Max: {stats.max}
      </p>
      <p>
        Buckets: &#123; teen: {stats.buckets.teen}, adult: {stats.buckets.adult} &#125;
      </p>
    </div>
  );
}

export default Exercise8;
