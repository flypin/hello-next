import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
	  
	  <style jsx>{`
        a {
          text-decoration: none;
          color: darkcyan;
          font-weight: 700;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
	  
	  
    </div>
  )
}