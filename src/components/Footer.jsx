export default function Footer() {
  return (
    <footer style={styles.footer}>
      <span style={styles.logo}>
        Agencia<em style={styles.em}>Service</em>
      </span>
      <span style={styles.copy}>
        © 2026 AgenciaService · Aix-en-Provence · agenciaservice.fr
      </span>
    </footer>
  )
}

const styles = {
  footer: {
    background: 'var(--onyx)', padding: '48px 60px',
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', flexWrap: 'wrap', gap: 16,
  },
  logo: {
    fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 300,
    color: 'rgba(250,240,220,0.4)', letterSpacing: '0.1em',
  },
  em: { fontStyle: 'italic', color: 'var(--or)' },
  copy: {
    fontFamily: 'var(--sans)', fontSize: '0.62rem', fontWeight: 300,
    color: 'rgba(180,160,110,0.3)', letterSpacing: '0.18em',
  },
}
