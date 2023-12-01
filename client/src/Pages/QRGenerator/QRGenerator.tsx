import React, { ChangeEvent, useState } from "react";
import styles from "./style.module.css";
import QRCode from "qrcode.react";
function QRGenerator() {
  const [link, setLink] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };
  const downloadQRCode = () => {
    const canvas = document.getElementById("qr-code-canvas") as HTMLCanvasElement;
    const imageUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "qr_code.png";
    link.click();
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}>QR Code Generator</div>
      <div className={styles.header}>
        <input type="text" value={link} onChange={handleChange} className={styles.input} placeholder="Paste Your Link Here!" />

        {/* <div className={styles.btn}>Generator</div> */}
      </div>
      <div className={styles.qrContainer}>
        <QRCode id="qr-code-canvas" value={link} />
        <div className={styles.dbtn} onClick={downloadQRCode}>Download</div>
      </div>
    </div>
  );
}

export default QRGenerator;
