import MyFooter from "../components/Footer/MyFooter";

export default function FooterPage() {
  return (
    <div className="footer">
      <h2 style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
      </h2>
      <MyFooter
        author="ThangDNB"
        email="thangdnbde18095@fpt.edu.vn"
        linkGithub="https://github.com/Thang2374/FER202_FA25"
      />
    </div>
  );
}
