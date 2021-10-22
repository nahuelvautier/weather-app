const FooterContent = () => {
  let styles = {
    marginBottom: ".25rem",
    padding: "1rem",
    borderTop: "thin solid #fff",
  }

  return (
    <>
      <aside style={styles} >
        <p>Datos obtenidos de <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">openweathermap.org</a></p>
      </aside>
      <div style={{ transform: "translate(-1.5rem, 0)" }}>
        <p>&copy; 2021 <a href="https://nahuelvautier.netlify.app" target="_blank" rel="noreferrer">Nahuel Vautier</a></p>
      </div>
    </>
  )
}

export default FooterContent;
