import Link from "next/link";


export default function Home() {
  return (
    <div className="test">
      <ul>
        <li>
          <Link href="/speedtest">Speed test</Link>
        </li>
      </ul>
    </div>
  )
}
